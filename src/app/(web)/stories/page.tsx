import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BrandPanel } from "@/components/Art";
import StoryCard from "@/components/StoryCard";
import { ButtonLink, Eyebrow, PageHero, Section } from "@/components/ui";
import { sanityFetch } from "@/sanity/client";
import { storiesQuery, type StoryCard as StoryCardData } from "@/sanity/queries";

// Must be a literal for Next.js; matches REVALIDATE in src/sanity/client.ts.
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Stories is where we explain the work, follow the people doing it and collect outside coverage of YARA.",
  alternates: { canonical: "/stories" },
};

const spotlights = [
  {
    title: "Ampe-DB: When a Ghanaian Game Becomes Research Data",
    body: "Ruth Biney Senior is documenting the movement, rhythm and interaction of Ampe in a form that computers can study.",
    cta: "Read the story",
    href: "/stories/ampe-db-ghanaian-game-research-data",
    tone: "forest" as const,
    label: "Ampe-DB",
  },
  {
    title: "Meet the Inaugural YARA Fellows and the Research They Are Pursuing",
    body: "Meet YARA’s first Fellowship cohort and the original research they are beginning across artificial intelligence, climate and public health.",
    cta: "Meet the Fellows",
    href: "/stories/meet-the-inaugural-yara-fellows",
    tone: "lime" as const,
    label: "Inaugural Fellows",
  },
];

const sections = [
  { id: "spotlights", label: "Spotlights" },
  { id: "insights", label: "Insights" },
  { id: "in-the-press", label: "In the Press" },
];

export default async function StoriesPage() {
  const stories = await sanityFetch<StoryCardData[]>(storiesQuery, {}, []);
  const cms = {
    spotlight: stories.filter((s) => s.category === "spotlight"),
    insight: stories.filter((s) => s.category === "insight"),
    press: stories.filter((s) => s.category === "press"),
  };

  return (
    <>
      <PageHero
        eyebrow="Stories"
        title="Research, people and ideas from YARA."
        lede={<p>Stories is where we explain the work, follow the people doing it and collect outside coverage of YARA.</p>}
      >
        <nav aria-label="Story categories" className="flex flex-wrap gap-2">
          <a href="#spotlights" className="rounded-full bg-forest px-4 py-2 text-sm font-medium text-lime">
            All
          </a>
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink ring-1 ring-line hover:ring-forest"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </PageHero>

      <Section id="spotlights" className="pt-0 md:pt-0" labelledBy="spotlights-heading">
        <h2 id="spotlights-heading" className="mb-6">
          <Eyebrow>Spotlights</Eyebrow>
        </h2>
        <ul className="grid gap-6 md:grid-cols-2">
          {spotlights.map((s) => (
            <li key={s.href}>
              <Link href={s.href} className="group block">
                <BrandPanel tone={s.tone} className="aspect-[16/10] transition-transform group-hover:-translate-y-1">
                  <p className={s.tone === "forest" ? "text-2xl font-medium text-white" : "text-2xl font-medium text-forest-deep"}>
                    {s.label}
                  </p>
                </BrandPanel>
                <p className="mt-5 text-xs font-semibold tracking-[0.12em] text-forest uppercase">Spotlight</p>
                <h3 className="mt-2 text-balance text-2xl font-medium leading-snug tracking-tight text-ink group-hover:text-forest">
                  {s.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink/75">{s.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-medium text-forest">
                  {s.cta}
                  <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
          {cms.spotlight.map((story) => (
            <StoryCard key={story._id} story={story} />
          ))}
        </ul>
      </Section>

      <Section tone="white" id="insights" labelledBy="insights-heading">
        <h2 id="insights-heading" className="mb-6">
          <Eyebrow>Insights</Eyebrow>
        </h2>
        {cms.insight.length ? (
          <ul className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {cms.insight.map((story) => (
              <StoryCard key={story._id} story={story} />
            ))}
          </ul>
        ) : (
          <p className="max-w-2xl text-lg leading-relaxed text-ink/80">
            Plain-language explanations of YARA research and ideas will appear here as they are published.
          </p>
        )}
      </Section>

      <Section id="in-the-press" labelledBy="press-heading">
        <h2 id="press-heading" className="mb-6">
          <Eyebrow>In the Press</Eyebrow>
        </h2>
        {cms.press.length ? (
          <ul className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {cms.press.map((story) => (
              <StoryCard key={story._id} story={story} />
            ))}
          </ul>
        ) : (
          <p className="max-w-2xl text-lg leading-relaxed text-ink/80">
            External journalism, interviews and coverage about YARA and its work will appear here.
          </p>
        )}
      </Section>

      <Section tone="lime" labelledBy="follow" className="py-12 md:py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 id="follow">
              <Eyebrow className="text-forest-deep">Follow the work</Eyebrow>
            </h2>
            <p className="mt-3 max-w-xl text-xl text-forest-deep">
              Get occasional updates on YARA research, programmes, opportunities and the Research Symposium.
            </p>
          </div>
          <ButtonLink href="/newsletter">Subscribe to YARA updates</ButtonLink>
        </div>
      </Section>
    </>
  );
}
