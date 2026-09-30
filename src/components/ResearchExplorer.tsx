"use client";

import { useState } from "react";
import type { ThemeKey } from "@/lib/research";
import type { ResearchProjectSchema } from "@/backend/models/research_projects";
import { cx } from "./ui";
import { ProjectCard } from "./ProjectCard";

const filters: { key: ThemeKey | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "ai", label: "Artificial Intelligence" },
  { key: "climate", label: "Climate" },
  { key: "health", label: "Public Health" },
];

export default function ResearchExplorer({ projects }: { projects: ResearchProjectSchema[] }) {
  const [active, setActive] = useState<ThemeKey | "all">("all");
  const shown = active === "all" ? projects : projects.filter((p) => p.themes.includes(active));

  return (
    <div>
      <div role="group" aria-label="Filter research by theme" className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            aria-pressed={active === f.key}
            onClick={() => setActive(f.key)}
            className={cx(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              active === f.key ? "bg-forest text-lime" : "bg-white text-ink ring-1 ring-line hover:ring-forest",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {shown.length} research projects
      </p>
      <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </ul>
    </div>
  );
}
