"use client";

import Image from "next/image";
import dayjs from "dayjs";
import type { StorySchema } from "@/backend/models/stories";

const categoryLabels = {
  spotlight: "Spotlight",
  insight: "Insight",
  press: "In the Press",
} as const;

function Field({ label, value }: { label: string; value?: string | null }) {
  if (!value) return null;
  return (
    <div className="min-w-0 border-b border-line py-4">
      <dt className="text-xs font-semibold uppercase text-muted">{label}</dt>
      <dd className="mt-1 break-words text-sm leading-6 text-ink">{value}</dd>
    </div>
  );
}

export default function StoryDetails({ data }: { data: StorySchema }) {
  const publishedAt =
    data.publishedAt instanceof Date
      ? dayjs(data.publishedAt).format("DD MMM YYYY, HH:mm")
      : dayjs(data.publishedAt).format("DD MMM YYYY, HH:mm");

  return (
    <div data-lenis-prevent className="h-full overflow-y-auto p-6 md:p-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="space-y-3 border-b border-line pb-6">
          <p className="text-xs font-semibold uppercase text-forest">
            {categoryLabels[data.category]}
          </p>
          <h2 className="break-words text-2xl font-medium leading-tight text-ink">
            {data.title}
          </h2>
          <p className="max-w-3xl text-base leading-7 text-muted">
            {data.excerpt}
          </p>
        </header>

        {data.mainImageUrl && (
          <figure className="overflow-hidden rounded-lg bg-cream">
            <div className="relative aspect-video">
              <Image
                src={data.mainImageUrl}
                alt={data.mainImageAlt ?? ""}
                fill
                className="object-cover"
              />
            </div>
            {data.mainImageCaption && (
              <figcaption className="px-4 py-3 text-sm text-muted">
                {data.mainImageCaption}
              </figcaption>
            )}
          </figure>
        )}

        <section aria-label="Story details">
          <dl className="grid gap-x-8 sm:grid-cols-2">
            <Field label="Slug" value={data.slug} />
            <Field label="Published" value={publishedAt} />
            <Field label="Author" value={data.author} />
            <Field label="Publication" value={data.publication} />
            <Field label="External URL" value={data.externalUrl} />
            <Field label="Themes" value={data.themes?.join(", ")} />
            <Field label="People" value={data.people?.join(", ")} />
          </dl>
        </section>

        {data.body && (
          <section className="space-y-3 border-t border-line pt-6">
            <h3 className="text-sm font-semibold text-ink">Story body</h3>
            <div
              className="prose max-w-none rounded-lg bg-cream p-5"
              dangerouslySetInnerHTML={{ __html: data.body }}
            />
          </section>
        )}
      </div>
    </div>
  );
}
