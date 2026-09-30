import type { ResearchProjectSchema } from "@/backend/models/research_projects";
import type { ThemeKey } from "@/lib/research";

export function ProjectCard({ project, themeOverride }: { project: ResearchProjectSchema; themeOverride?: ThemeKey }) {
  const summary = themeOverride ? project.themeSummary[themeOverride] ?? project.summary : project.summary;
  return (
    <li className="flex flex-col rounded-[var(--radius-card)] bg-white p-6 ring-1 ring-line">
      <p className="self-start rounded-full bg-lime-soft px-3 py-1 text-xs font-medium text-forest">{project.tags}</p>
      <h3 className="mt-5 text-balance text-xl leading-snug font-medium tracking-tight text-ink">{project.question}</h3>
      <p className="mt-4 text-sm font-semibold text-forest">{project.researcher}</p>
      <p className="mt-3 leading-relaxed text-ink/75">{summary}</p>
    </li>
  );
}
