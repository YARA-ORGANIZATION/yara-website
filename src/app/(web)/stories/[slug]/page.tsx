import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
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
  const meta = [categoryLabel[story.category], story.people?.join(", "), story.publication]
    .filter(Boolean)
    .join(" · ");
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
            <time dateTime={String(story.publishedAt)}>{date}</time>
          </p>
        </div>
      </header>

      <div className="bg-cream py-14 md:py-20">
        <div className="container-site">
          {story.mainImageUrl && (
            <figure className="mx-auto mb-12 max-w-4xl">
              <Image
                src={story.mainImageUrl}
                alt={story.mainImageAlt ?? ""}
                width={1800}
                height={1100}
                priority
                sizes="(min-width: 1024px) 896px, 100vw"
                className="h-auto w-full rounded-[var(--radius-panel)]"
              />
              {story.mainImageCaption && (
                <figcaption className="mt-3 text-sm text-muted">{story.mainImageCaption}</figcaption>
              )}
            </figure>
          )}
          {story.body ? (
            <Prose className="mx-auto md:text-xl">
              <div dangerouslySetInnerHTML={{ __html: story.body }} />
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
