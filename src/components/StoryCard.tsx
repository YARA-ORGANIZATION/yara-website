import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { urlFor } from "@/sanity/client";
import type { StoryCard as StoryCardData } from "@/sanity/queries";
import { BrandPanel } from "./Art";

const labels = { spotlight: "Spotlight", insight: "Insight", press: "In the Press" } as const;

export default function StoryCard({ story }: { story: StoryCardData }) {
  const external = story.category === "press" && story.externalUrl;
  const href = external ? story.externalUrl! : `/stories/${story.slug}`;
  const date = new Date(story.publishedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const inner = (
    <>
      {story.mainImage ? (
        <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-panel)] bg-cream-deep">
          <Image
            src={urlFor(story.mainImage).width(900).height(560).fit("crop").url()}
            alt={story.mainImage.alt ?? ""}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      ) : (
        <BrandPanel tone={story.category === "insight" ? "lime" : "forest"} className="aspect-[16/10]" />
      )}
      <p className="mt-5 text-xs font-semibold tracking-[0.12em] text-forest uppercase">
        {[labels[story.category], story.publication, date].filter(Boolean).join(" · ")}
      </p>
      <h3 className="mt-2 text-balance text-2xl font-medium leading-snug tracking-tight text-ink group-hover:text-forest">
        {story.title}
      </h3>
      <p className="mt-3 leading-relaxed text-ink/75">{story.excerpt}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 font-medium text-forest">
        {external ? "Read the coverage" : "Read the story"}
        {external ? (
          <ArrowUpRight aria-hidden className="size-4" />
        ) : (
          <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
        )}
      </span>
    </>
  );

  return (
    <li>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="group block">
          {inner}
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      ) : (
        <Link href={href} className="group block">
          {inner}
        </Link>
      )}
    </li>
  );
}
