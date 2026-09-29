import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import StoriesBrowser from "@/components/StoriesBrowser";
import { ButtonLink } from "@/components/ui";
import { buildStories, categoryLabels, type StoryItem } from "@/lib/stories";
import { sanityFetch } from "@/sanity/client";
import { storiesQuery, type StoryCard } from "@/sanity/queries";

// Must be a literal for Next.js; matches REVALIDATE in src/sanity/client.ts.
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Stories is where we explain the work, follow the people doing it and collect outside coverage of YARA.",
  alternates: { canonical: "/stories" },
};

function initialsOf(name: string) {
  return name
    .split(/[\s,]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function FeaturedCard({ story }: { story: StoryItem }) {
  const inner = (
    <>
      <p className="text-xs font-semibold tracking-[0.12em] text-forest uppercase">{categoryLabels[story.category]}</p>
      <h3 className="mt-3 text-balance text-2xl leading-snug font-medium tracking-tight text-ink group-hover:text-forest">
        {story.title}
        {story.external && <ArrowUpRight aria-hidden className="ml-1 inline size-5 text-muted" />}
      </h3>
      <p className="mt-3 leading-relaxed text-ink/75">{story.excerpt}</p>
      {story.byline && (
        <p className="mt-5 flex items-center gap-2 text-sm text-ink/70">
          <span
            aria-hidden
            className="inline-flex size-7 items-center justify-center rounded-full bg-lime text-[0.65rem] font-semibold text-forest-deep"
          >
            {initialsOf(story.byline)}
          </span>
          <span>
            By <span className="font-medium text-ink underline decoration-line underline-offset-4">{story.byline}</span>
          </span>
        </p>
      )}
    </>
  );
  const cls = "group block h-full border-t border-ink/15 pt-5";
  return story.external ? (
    <a href={story.href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  ) : (
    <Link href={story.href} className={cls}>
      {inner}
    </Link>
  );
}

export default async function StoriesPage() {
  const cms = await sanityFetch<StoryCard[]>(storiesQuery, {}, []);
  const { all, featured } = buildStories(cms);

  return (
    <>
      <header className="bg-cream pt-28 pb-14 md:pt-32 md:pb-20">
        <div className="container-site">
          <div className="flex items-center justify-between border-b border-line pb-4">
            <p className="text-sm font-semibold text-forest">Stories</p>
            <ButtonLink href="/newsletter" variant="dark" className="py-2 text-sm">
              Subscribe
            </ButtonLink>
          </div>
          <div className="mx-auto mt-16 max-w-3xl text-center md:mt-24">
            <h1 className="text-balance text-4xl leading-[1.1] font-medium tracking-tight text-forest md:text-5xl">
              Research, people and ideas from YARA.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink/75 md:text-xl">
              Stories is where we explain the work, follow the people doing it and collect outside coverage of YARA.
            </p>
          </div>
        </div>
      </header>

      <section aria-labelledby="featured" className="bg-cream pb-16 md:pb-24">
        <div className="container-site grid gap-8 border-t border-line pt-8 lg:grid-cols-[12rem_1fr] lg:gap-10">
          <h2 id="featured" className="text-2xl font-medium tracking-tight text-forest">
            Featured
          </h2>
          <ul className="grid gap-10 md:grid-cols-3 md:gap-8">
            {featured.map((s) => (
              <li key={s.id}>
                <FeaturedCard story={s} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="browse" aria-labelledby="browse-all" className="bg-cream-deep py-16 md:py-24">
        <div className="container-site grid gap-8 lg:grid-cols-[12rem_1fr] lg:gap-10">
          <h2 id="browse-all" className="text-2xl font-medium tracking-tight text-forest">
            Browse all
          </h2>
          <StoriesBrowser stories={all} />
        </div>
      </section>

      <section aria-labelledby="follow" className="bg-forest py-14 md:py-16">
        <div className="container-site flex flex-col items-center text-center">
          <h2 id="follow" className="text-2xl font-medium tracking-tight text-white md:text-3xl">
            Follow the Work
          </h2>
          <p className="mt-3 max-w-xl text-lg text-white/80">
            Get occasional updates on YARA research, programmes, opportunities and the Research Symposium.
          </p>
          <ButtonLink href="/newsletter" variant="lime" className="mt-7">
            Subscribe to YARA updates
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
