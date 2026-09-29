import { Photo } from "./Art";
import { ProjectCard } from "./ProjectCard";
import { Eyebrow, PageHero, Section, SectionHeading, ThemeIcon } from "./ui";
import { getTheme, projectsForTheme, type ThemeKey } from "@/lib/research";

const heroPhoto: Record<ThemeKey, { src: string; alt: string }> = {
  ai: { src: "/images/brand/robotics-workshop.jpg", alt: "Young people building electronics together at a workbench" },
  climate: { src: "/images/brand/farm-workers.jpg", alt: "Farmers tending crops on a green hillside" },
  health: { src: "/images/brand/lab-microscope.jpg", alt: "A scientist using a microscope in a laboratory" },
};

const heroTone: Record<ThemeKey, "lime" | "forest"> = { ai: "lime", climate: "forest", health: "lime" };

export default function ThemePage({ theme }: { theme: ThemeKey }) {
  const t = getTheme(theme);
  const tone = heroTone[theme];
  const list = projectsForTheme(theme);

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
          {list.map((p) => (
            <ProjectCard key={p.researcher} project={p} summary={p.themeSummary[theme]} />
          ))}
        </ul>
      </Section>
    </>
  );
}
