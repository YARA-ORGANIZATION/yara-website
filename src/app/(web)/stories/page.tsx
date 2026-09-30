import type { Metadata } from "next";
import BlurReveal, { BlurRevealItem } from "@/components/BlurReveal";
import StoryCardHome from "@/components/StoryCardHome";
import { ButtonLink } from "@/components/ui";
import { fetchAllStories } from "@/lib/firebase-fetch";
import StoriesCategoryFilter from "./StoriesCategoryFilter";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Stories is where we explain the work, follow the people doing it and collect outside coverage of YARA.",
  alternates: { canonical: "/stories" },
};

export default async function StoriesPage() {
  const stories = await fetchAllStories();

  const pinnedStory = {
    title: "Meet the Inaugural YARA Fellows and the Research They Are Pursuing",
    description:
      "Meet YARA's first Fellowship cohort and the original research they are beginning across artificial intelligence, climate and public health.",
    href: "/stories/meet-the-inaugural-yara-fellows",
    image: undefined,
    cta: "Meet the Fellows",
    category: "spotlight" as const,
  };

  const cmsCards = stories.map((story) => ({
    title: story.title,
    description: story.excerpt,
    href: story.category === "press" && story.externalUrl ? story.externalUrl : `/stories/${story.slug}`,
    image: story.mainImageUrl || undefined,
    cta: story.category === "press" ? "Read the coverage" : "Read the story",
    category: story.category,
  }));

  const allCards = [pinnedStory, ...cmsCards];

  return (
    <>
      {/* Hero */}
      <section className="bg-[#222222] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <BlurReveal>
            <BlurRevealItem>
              <h1 className="primarymedium text-4xl tracking-tight text-white md:text-5xl lg:text-6xl">
                Stories
              </h1>
            </BlurRevealItem>
            <BlurRevealItem delay={0.1}>
              <p className="primarynormal mt-4 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                Stories is where we explain the work, follow the people doing it
                and collect outside coverage of YARA.
              </p>
            </BlurRevealItem>
          </BlurReveal>
        </div>
      </section>

      {/* Stories grid */}
      <section className="bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <StoriesCategoryFilter cards={allCards} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#222222] px-6 py-16 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
          <BlurReveal>
            <BlurRevealItem>
              <h2 className="primarymedium text-2xl text-white md:text-3xl">
                Subscribe to YARA updates
              </h2>
            </BlurRevealItem>
            <BlurRevealItem delay={0.1}>
              <p className="primarynormal mt-2 max-w-xl text-white/70">
                Get occasional updates on YARA research, programmes,
                opportunities and the Research Symposium.
              </p>
            </BlurRevealItem>
            <BlurRevealItem delay={0.2}>
              <div className="mt-6">
                <ButtonLink href="/newsletter">Subscribe</ButtonLink>
              </div>
            </BlurRevealItem>
          </BlurReveal>
        </div>
      </section>
    </>
  );
}
