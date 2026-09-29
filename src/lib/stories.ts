import type { ThemeKey } from "./research";
import type { StoryCard, StoryCategory } from "@/sanity/queries";

export type StoryItem = {
  id: string;
  title: string;
  href: string;
  external: boolean;
  category: StoryCategory;
  excerpt: string;
  publishedAt: string;
  themes: ThemeKey[];
  byline?: string;
  featured: boolean;
};

export const categoryLabels: Record<StoryCategory, string> = {
  spotlight: "Spotlight",
  insight: "Insight",
  press: "In the Press",
};

/** Stories written into the site itself (from the copy master) rather than the CMS. */
const builtIn: StoryItem[] = [
  {
    id: "static-ampe-db",
    title: "Ampe-DB: When a Ghanaian Game Becomes Research Data",
    href: "/stories/ampe-db-ghanaian-game-research-data",
    external: false,
    category: "spotlight",
    excerpt:
      "Ruth Biney Senior is documenting the movement, rhythm and interaction of Ampe in a form that computers can study.",
    publishedAt: "2026-09-20T09:00:00Z",
    themes: ["ai"],
    byline: "Ruth Biney Senior",
    featured: true,
  },
  {
    id: "static-inaugural-fellows",
    title: "Meet the Inaugural YARA Fellows and the Research They Are Pursuing",
    href: "/stories/meet-the-inaugural-yara-fellows",
    external: false,
    category: "spotlight",
    excerpt:
      "Meet YARA’s first Fellowship cohort and the original research they are beginning across artificial intelligence, climate and public health.",
    publishedAt: "2026-09-20T08:00:00Z",
    themes: ["ai", "climate", "health"],
    byline: "STEM Research Fellowship",
    featured: true,
  },
];

const THEMES: ThemeKey[] = ["ai", "climate", "health"];

function fromCms(s: StoryCard): StoryItem {
  const external = s.category === "press" && !!s.externalUrl;
  return {
    id: s._id,
    title: s.title,
    href: external ? s.externalUrl! : `/stories/${s.slug}`,
    external,
    category: s.category,
    excerpt: s.excerpt,
    publishedAt: s.publishedAt,
    themes: (s.themes ?? []).filter((t): t is ThemeKey => THEMES.includes(t as ThemeKey)),
    byline: s.people?.length ? s.people.join(", ") : s.author || s.publication,
    featured: !!s.featured,
  };
}

/** All stories, newest first, plus the (up to three) featured ones. CMS picks lead the featured row. */
export function buildStories(cms: StoryCard[]) {
  const all = [...cms.map(fromCms), ...builtIn].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const featured = [
    ...all.filter((s) => s.featured && !s.id.startsWith("static-")),
    ...builtIn.filter((s) => s.featured),
    ...all.filter((s) => !s.featured),
  ].slice(0, 3);
  return { all, featured };
}
