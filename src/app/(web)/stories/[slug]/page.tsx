import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import StoryBody from "@/components/StoryBody";
import { ButtonLink, Prose } from "@/components/ui";
import { site } from "@/lib/site";
import { sanityFetch, urlFor } from "@/sanity/client";
import { storyQuery, storySlugsQuery, type Story } from "@/sanity/queries";

// Must be a literal for Next.js; matches REVALIDATE in src/sanity/client.ts.
export const revalidate = 300;
export const dynamicParams = true;

const categoryLabel = { spotlight: "Spotlight", insight: "Insight", press: "In the Press" } as const;

async function getStory(slug: string) {
  return sanityFetch<Story | null>(storyQuery, { slug }, null);
}

export async function generateStaticParams() {
  const slugs = await sanityFetch<string[]>(storySlugsQuery, {}, []);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const story = await getStory(slug);
  if (!story) return { title: "Story not found", robots: { index: false } };
  const title = story.seoTitle || story.title;
  const description = story.seoDescription || story.excerpt;
  const image = story.mainImage ? urlFor(story.mainImage).width(1200).height(630).fit("crop").url() : undefined;
  return {
    title,
    description,
    alternates: { canonical: `/stories/${slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      publishedTime: story.publishedAt,
      images: image ? [image] : undefined,
    },
  };
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = await getStory(slug);
  if (!story) notFound();

  const date = new Date(story.publishedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const meta = [categoryLabel[story.category], story.people?.join(", "), story.publication]
    .filter(Boolean)
    .join(" · ");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: story.title,
    description: story.excerpt,
    datePublished: story.publishedAt,
    author: story.author ? { "@type": "Person", name: story.author } : { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/stories/${slug}`,
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="bg-forest pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="container-site">
          <Link href="/stories" className="inline-flex items-center gap-2 text-sm text-white/75 hover:text-white">
            <ArrowLeft aria-hidden className="size-4" /> Stories
          </Link>
          <p className="mt-8 text-xs font-semibold tracking-[0.14em] text-lime uppercase">{meta}</p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-medium leading-[1.05] tracking-tight text-white md:text-6xl">
            {story.title}
          </h1>
          <p className="mt-6 max-w-3xl text-pretty text-xl leading-relaxed text-white/85 md:text-2xl">{story.excerpt}</p>
          <p className="mt-6 text-sm text-white/60">
            {story.author && <>{story.author} · </>}
            <time dateTime={story.publishedAt}>{date}</time>
          </p>
        </div>
      </header>

      <div className="bg-cream py-14 md:py-20">
        <div className="container-site">
          {story.mainImage && (
            <figure className="mx-auto mb-12 max-w-4xl">
              <Image
                src={urlFor(story.mainImage).width(1800).fit("max").url()}
                alt={story.mainImage.alt ?? ""}
                width={1800}
                height={1100}
                priority
                sizes="(min-width: 1024px) 896px, 100vw"
                className="h-auto w-full rounded-[var(--radius-panel)]"
              />
              {story.mainImage.caption && (
                <figcaption className="mt-3 text-sm text-muted">{story.mainImage.caption}</figcaption>
              )}
            </figure>
          )}
          {story.body?.length ? (
            <Prose className="mx-auto md:text-xl">
              <StoryBody value={story.body} />
            </Prose>
          ) : null}
          {story.externalUrl && (
            <div className="mx-auto mt-10 max-w-2xl">
              <ButtonLink href={story.externalUrl}>
                Read the full article{story.publication ? ` on ${story.publication}` : ""}
              </ButtonLink>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
