import { ProjectCard } from "./ProjectCard";
import { PageHero, Section, SectionHeading, ThemeIcon, cx } from "./ui";
import { getTheme, type ThemeKey } from "@/lib/research";
import type { ResearchProjectSchema } from "@/backend/models/research_projects";

const heroTone: Record<ThemeKey, "lime" | "forest"> = { ai: "lime", climate: "forest", health: "lime" };
const shortName: Record<ThemeKey, string> = { ai: "AI", climate: "Climate", health: "Public Health" };

export default function ThemePage({ theme, projects = [] }: { theme: ThemeKey; projects?: ResearchProjectSchema[] }) {
  const t = getTheme(theme);
  const tone = heroTone[theme];
  const list = projects;
  const subOnLime = theme === "health";

  return (
    <>
      <PageHero eyebrow={t.name} tone={tone} title={t.heroTitle} lede={<p>{t.heroIntro}</p>} />

      <Section tone={subOnLime ? "lime" : "white"} labelledBy="sub-themes">
        <SectionHeading
          id="sub-themes"
          title={theme === "ai" ? "Core Focus Sub-Themes" : `Core ${shortName[theme]} Sub-Themes`}
          className={cx("mb-10", subOnLime && "[&_h2]:text-forest-deep")}
        />
        <ul className="grid gap-5 md:grid-cols-3">
          {t.subThemes.map((s, i) => (
            <li
              key={s.title}
              className={cx(
                "rounded-[var(--radius-card)] p-7",
                subOnLime ? "bg-cream" : "bg-cream ring-1 ring-line",
              )}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-forest/60">{i + 1}.</span>
                <ThemeIcon theme={theme} tone={tone === "forest" ? "forest" : "lime"} className="size-9 [&_svg]:size-4" />
              </div>
              <h3 className="mt-4 text-xl font-medium tracking-tight text-forest">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-ink/80">{s.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="cream" labelledBy="current-research">
        <SectionHeading
          id="current-research"
          eyebrow="Current research"
          title={`Active ${shortName[theme]} Research Projects`}
          className="mb-10"
        />
        <ul className="grid gap-5 md:grid-cols-2">
          {list.map((p) => (
            <ProjectCard key={p.researcher} project={p} themeOverride={theme} />
          ))}
        </ul>
      </Section>
    </>
  );
}
