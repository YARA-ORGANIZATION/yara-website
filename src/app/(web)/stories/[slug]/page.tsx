import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink, Prose } from "@/components/ui";
import { site } from "@/lib/site";
import { fetchStoryBySlug, fetchStorySlugs } from "@/lib/firebase-fetch";

export const dynamicParams = true;

const categoryLabel = { spotlight: "Spotlight", insight: "Insight", press: "In the Press" } as const;

export async function generateStaticParams() {
  const slugs = await fetchStorySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const story = await fetchStoryBySlug(slug);
  if (!story) return { title: "Story not found", robots: { index: false } };
  const title = story.seoTitle || story.title;
  const description = story.seoDescription || story.excerpt;
  return {
    title,
    description,
    alternates: { canonical: `/stories/${slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      publishedTime: String(story.publishedAt),
      images: story.mainImageUrl ? [story.mainImageUrl] : undefined,
    },
  };
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = await fetchStoryBySlug(slug);
  if (!story) notFound();

  const date = new Date(story.publishedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: story.title,
    description: story.excerpt,
    datePublished: String(story.publishedAt),
    author: story.author ? { "@type": "Person", name: story.author } : { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/stories/${slug}`,
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <header className="bg-neutral-200 pt-32 pb-10 md:pt-40 md:pb-14">
        <div className="container-site max-w-4xl">
          <p className="text-sm font-medium text-ink/60">
            {categoryLabel[story.category]}
          </p>
          <h1 className="mt-3 text-balance text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-6xl">
            {story.title}
          </h1>
          <div className="mt-6 flex items-center gap-6 border-y border-line py-3 text-sm text-ink/60">
            <time dateTime={String(story.publishedAt)}>{date}</time>
            {story.author && (
              <span>By {story.author}</span>
            )}
          </div>
        </div>
      </header>

      {/* Cover image */}
      {story.mainImageUrl && (
        <figure className="bg-neutral-200 pb-10 md:pb-14">
          <div className="container-site max-w-4xl">
            <Image
              src={story.mainImageUrl}
              alt={story.mainImageAlt ?? ""}
              width={1800}
              height={1100}
              priority
              sizes="(min-width: 1024px) 896px, 100vw"
              className="h-auto w-full rounded-xl"
            />
            {story.mainImageCaption && (
              <figcaption className="mt-3 text-sm text-muted">{story.mainImageCaption}</figcaption>
            )}
          </div>
        </figure>
      )}

      {/* Body */}
      <div className="bg-white py-14 md:py-20">
        <div className="container-site max-w-3xl">
          {story.body ? (
            <Prose className="prose-yara">
              <div dangerouslySetInnerHTML={{ __html: story.body }} />
            </Prose>
          ) : null}
          {story.externalUrl && (
            <div className="mt-10">
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
