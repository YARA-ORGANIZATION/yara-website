"use client";

import type { ResearchProjectSchema } from "@/backend/models/research_projects";

const themeLabels: Record<string, string> = {
  ai: "Artificial Intelligence",
  climate: "Climate",
  health: "Public Health",
};

function Field({ label, value }: { label: string; value?: string | number | null }) {
  if (value == null || value === "") return null;
  return (
    <div>
      <dt className="text-xs font-semibold tracking-wide text-muted uppercase">{label}</dt>
      <dd className="mt-1 text-ink">{value}</dd>
    </div>
  );
}

export default function ResearchProjectDetails({ data }: { data: ResearchProjectSchema }) {
  return (
    <div className="space-y-6">
      <dl className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Field label="Question" value={data.question} />
        </div>
        <Field label="Researcher" value={data.researcher} />
        <Field label="Themes" value={data.themes.map((t) => themeLabels[t] ?? t).join(", ")} />
        <Field label="Tags" value={data.tags} />
        <Field label="Sort order" value={data.sortOrder} />
        <Field
          label="Published at"
          value={(data.publishedAt ?? data.createdAt).toLocaleString()}
        />
        <div className="sm:col-span-2">
          <Field label="Summary" value={data.summary} />
        </div>
      </dl>
      {data.themes.length > 0 && Object.keys(data.themeSummary).length > 0 && (
        <div>
          <p className="mb-3 text-xs font-semibold tracking-wide text-muted uppercase">Theme summaries</p>
          <div className="space-y-3">
            {data.themes.map((theme) =>
              data.themeSummary[theme] ? (
                <div key={theme} className="rounded-xl bg-cream p-4">
                  <p className="text-sm font-medium text-forest">{themeLabels[theme] ?? theme}</p>
                  <p className="mt-1 text-ink/80">{data.themeSummary[theme]}</p>
                </div>
              ) : null,
            )}
          </div>
        </div>
      )}
    </div>
  );
}
