"use client";

import { useEffect, useState } from "react";
import { getDBInfoAggregator } from "@/backend/firebase/db/_dbInfo";
import { filterResearchProjectsApi } from "@/backend/firebase/db/api/research_projects_api";
import { filterStoriesApi } from "@/backend/firebase/db/api/stories_api";
import type { ResearchProjectSchema } from "@/backend/models/research_projects";
import { FiltersDefault, ResponseIndicator } from "@/backend/models/_shared";
import type { StorySchema } from "@/backend/models/stories";

interface OverviewActivityItem {
  id: string;
  kind: "Story" | "Research project";
  title: string;
  byline: string;
  publishedAt: Date;
}

export default function DashboardViewOverview() {
  const [counts, setCounts] = useState({ stories: 0, researchProjects: 0 });
  const [activity, setActivity] = useState<OverviewActivityItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function loadOverview() {
      setLoading(true);
      setError(null);

      try {
        const [aggregateResult, storiesResult, projectsResult] =
          await Promise.all([
            getDBInfoAggregator(),
            filterStoriesApi({
              ...FiltersDefault,
              orderBy: "updatedAt",
              orderDirection: "desc",
              limit: 5,
            }),
            filterResearchProjectsApi({
              ...FiltersDefault,
              orderBy: "updatedAt",
              orderDirection: "desc",
              limit: 5,
            }),
          ]);

        const [aggregateResponse, aggregateStatus] = aggregateResult;
        const [storiesResponse, storiesStatus] = storiesResult;
        const [projectsResponse, projectsStatus] = projectsResult;

        if (
          aggregateStatus !== ResponseIndicator.SUCCESS ||
          storiesStatus !== ResponseIndicator.SUCCESS ||
          projectsStatus !== ResponseIndicator.SUCCESS ||
          typeof aggregateResponse === "string" ||
          typeof storiesResponse === "string" ||
          typeof projectsResponse === "string"
        ) {
          throw new Error("Unable to load overview data.");
        }

        if (cancelled) return;

        setCounts({
          stories: aggregateResponse.data.stories,
          researchProjects: aggregateResponse.data.research_projects,
        });

        const stories = storiesResponse.data as StorySchema[];
        const projects = projectsResponse.data as ResearchProjectSchema[];
        const recentItems: OverviewActivityItem[] = [
          ...stories.map((story) => ({
            id: story.id,
            kind: "Story" as const,
            title: story.title,
            byline: story.author || story.category,
            publishedAt: story.publishedAt,
          })),
          ...projects.map((project) => ({
            id: project.id,
            kind: "Research project" as const,
            title: project.question,
            byline: project.researcher,
            publishedAt: project.publishedAt ?? project.createdAt,
          })),
        ];

        setActivity(
          recentItems
            .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
            .slice(0, 8),
        );
      } catch (loadError) {
        if (!cancelled) {
          setError(
            loadError instanceof Error
              ? loadError.message
              : "Unable to load overview data.",
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void loadOverview();
    return () => {
      cancelled = true;
    };
  }, [retryKey]);

  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="mx-auto max-w-6xl space-y-8">
        <header>
          <h2 className="text-xl font-medium text-black">Overview</h2>
          <p className="mt-1 text-sm text-muted">
            Publishing activity across YARA content.
          </p>
        </header>

        <section
          aria-label="Content totals"
          className="grid gap-4 sm:grid-cols-2"
        >
          {[
            { label: "Stories", count: counts.stories },
            { label: "Research projects", count: counts.researchProjects },
          ].map((item) => (
            <div
              key={item.label}
              className="flex min-h-32 flex-col justify-between rounded-lg bg-white p-5"
            >
              <h3 className="text-sm font-medium text-muted">{item.label}</h3>
              <p className="text-4xl font-medium text-black" aria-live="polite">
                {loading ? "..." : item.count.toLocaleString()}
              </p>
            </div>
          ))}
        </section>

        <section
          aria-labelledby="overview-activity-heading"
          className="space-y-4"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3
              id="overview-activity-heading"
              className="text-base font-medium text-black"
            >
              Recent publishing activity
            </h3>
            <p className="text-xs text-muted">
              Latest stories and research projects
            </p>
          </div>

          {loading ? (
            <p className="py-6 text-sm text-muted" role="status">
              Loading overview...
            </p>
          ) : error ? (
            <div className="flex flex-wrap items-center justify-between gap-3 py-4">
              <p className="text-sm text-red-700" role="alert">
                {error}
              </p>
              <button
                type="button"
                onClick={() => setRetryKey((key) => key + 1)}
                className="rounded-lg bg-neutral-800 px-4 py-2 text-sm text-white"
              >
                Retry
              </button>
            </div>
          ) : activity.length === 0 ? (
            <p className="py-6 text-sm text-muted">
              No stories or projects have been published yet.
            </p>
          ) : (
            <ol className="divide-y divide-line rounded-lg bg-white px-5">
              {activity.map((item) => (
                <li
                  key={`${item.kind}-${item.id}`}
                  className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2 py-4"
                >
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase text-forest">
                      {item.kind}
                    </p>
                    <p className="mt-1 wrap-break-word text-sm font-medium text-black">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-muted">{item.byline}</p>
                  </div>
                  <time
                    className="shrink-0 text-xs text-muted"
                    dateTime={item.publishedAt.toISOString()}
                  >
                    {item.publishedAt.toLocaleString("en-GB", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </time>
                </li>
              ))}
            </ol>
          )}
        </section>
      </div>
    </div>
  );
}
