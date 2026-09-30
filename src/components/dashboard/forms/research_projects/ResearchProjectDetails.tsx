"use client";

import type { ResearchProjectSchema } from "@/backend/models/research_projects";

const themeLabels: Record<string, string> = {
  ai: "Artificial Intelligence",
  climate: "Climate",
  health: "Public Health",
};

function Field({
  label,
  value,
}: {
  label: string;
  value?: string | number | null;
}) {
  if (value == null || value === "") return null;
  return (
    <div className="min-w-0 border-b border-line py-4">
      <dt className="text-xs font-semibold uppercase text-muted">{label}</dt>
      <dd className="mt-1 break-words text-sm leading-6 text-ink">{value}</dd>
    </div>
  );
}

export default function ResearchProjectDetails({
  data,
}: {
  data: ResearchProjectSchema;
}) {
  return (
    <div data-lenis-prevent className="h-full overflow-y-auto p-6 md:p-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="space-y-3 border-b border-line pb-6">
          <p className="text-xs font-semibold uppercase text-forest">
            Research project
          </p>
          <h2 className="break-words text-2xl font-medium leading-tight text-ink">
            {data.question}
          </h2>
          <p className="text-base leading-7 text-muted">{data.researcher}</p>
        </header>

        <section aria-label="Project details">
          <dl className="grid gap-x-8 sm:grid-cols-2">
            <Field
              label="Themes"
              value={data.themes.map((t) => themeLabels[t] ?? t).join(", ")}
            />
            <Field label="Tags" value={data.tags} />
            <Field label="Sort order" value={data.sortOrder} />
            <Field
              label="Published at"
              value={(data.publishedAt ?? data.createdAt).toLocaleString()}
            />
          </dl>
        </section>

        {data.summary && (
          <section className="space-y-3 border-t border-line pt-6">
            <h3 className="text-sm font-semibold text-ink">Summary</h3>
            <p className="max-w-4xl whitespace-pre-wrap text-sm leading-7 text-ink">
              {data.summary}
            </p>
          </section>
        )}

        {data.themes.length > 0 &&
          Object.keys(data.themeSummary).length > 0 && (
            <section className="space-y-4 border-t border-line pt-6">
              <h3 className="text-sm font-semibold text-ink">
                Theme summaries
              </h3>
              <div className="space-y-4">
                {data.themes.map((theme) =>
                  data.themeSummary[theme] ? (
                    <div key={theme} className="border-t border-line pt-4">
                      <h4 className="text-sm font-medium text-forest">
                        {themeLabels[theme] ?? theme}
                      </h4>
                      <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-ink/80">
                        {data.themeSummary[theme]}
                      </p>
                    </div>
                  ) : null,
                )}
              </div>
            </section>
          )}
      </div>
    </div>
  );
}
