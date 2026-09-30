import { Photo } from "./Art";
import { ProjectCard } from "./ProjectCard";
import { Eyebrow, PageHero, Section, SectionHeading, ThemeIcon } from "./ui";
import { getTheme, type ThemeKey } from "@/lib/research";
import type { ResearchProjectSchema } from "@/backend/models/research_projects";

const heroPhoto: Record<ThemeKey, { src: string; alt: string }> = {
  ai: { src: "/images/focus-area-ai.png", alt: "Artificial intelligence research" },
  climate: { src: "/images/focus-area-climate.png", alt: "Climate research" },
  health: { src: "/images/focus-area-health.png", alt: "Public health research" },
};

const heroTone: Record<ThemeKey, "lime" | "forest"> = { ai: "lime", climate: "forest", health: "lime" };

export default function ThemePage({ theme, projects }: { theme: ThemeKey; projects: ResearchProjectSchema[] }) {
  const t = getTheme(theme);
  const tone = heroTone[theme];

  return (
    <>
      <PageHero
        eyebrow={t.name}
        tone={tone}
        title={t.heroTitle}
        lede={<p>{t.heroIntro}</p>}
        aside={<Photo src={heroPhoto[theme].src} alt={heroPhoto[theme].alt} className="hidden aspect-[4/3] lg:block" priority />}
      />

      <Section labelledBy="sub-themes">
        <SectionHeading id="sub-themes" title={`Our ${t.name} focus`} className="[&_h2]:sr-only" />
        <ul className="grid gap-5 md:grid-cols-3">
          {t.subThemes.map((s) => (
            <li key={s.title} className="rounded-[var(--radius-card)] bg-white p-7 ring-1 ring-line">
              <ThemeIcon theme={theme} tone={tone === "forest" ? "forest" : "lime"} />
              <h3 className="mt-5 text-xl font-medium tracking-tight text-forest">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-ink/80">{s.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="cream-deep" labelledBy="current-research">
        <h2 id="current-research" className="mb-8">
          <Eyebrow>Current research</Eyebrow>
        </h2>
        <ul className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} themeOverride={theme} />
          ))}
        </ul>
      </Section>
    </>
  );
}
