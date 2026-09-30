"use client";

import Image from "next/image";
import dayjs from "dayjs";
import type { StorySchema } from "@/backend/models/stories";

const categoryLabels = { spotlight: "Spotlight", insight: "Insight", press: "In the Press" } as const;

function Field({ label, value }: { label: string; value?: string | null }) {
  if (!value) return null;
  return (
    <div>
      <dt className="text-xs font-semibold tracking-wide text-muted uppercase">{label}</dt>
      <dd className="mt-1 text-ink">{value}</dd>
    </div>
  );
}

export default function StoryDetails({ data }: { data: StorySchema }) {
  const publishedAt =
    data.publishedAt instanceof Date
      ? dayjs(data.publishedAt).format("DD MMM YYYY, HH:mm")
      : dayjs(data.publishedAt).format("DD MMM YYYY, HH:mm");

  return (
    <div className="space-y-6">
      {data.mainImageUrl && (
        <div className="relative aspect-video overflow-hidden rounded-xl bg-cream">
          <Image src={data.mainImageUrl} alt={data.mainImageAlt ?? ""} fill className="object-cover" />
        </div>
      )}
      <dl className="grid gap-5 sm:grid-cols-2">
        <Field label="Title" value={data.title} />
        <Field label="Slug" value={data.slug} />
        <Field label="Category" value={categoryLabels[data.category]} />
        <Field label="Published" value={publishedAt} />
        <Field label="Author" value={data.author} />
        <Field label="Publication" value={data.publication} />
        <Field label="External URL" value={data.externalUrl} />
        <Field label="Themes" value={data.themes?.join(", ")} />
        <Field label="People" value={data.people?.join(", ")} />
        <div className="sm:col-span-2">
          <Field label="Excerpt" value={data.excerpt} />
        </div>
      </dl>
      {data.body && (
        <div>
          <p className="mb-2 text-xs font-semibold tracking-wide text-muted uppercase">Body</p>
          <div
            className="prose max-w-none rounded-xl bg-cream p-5"
            dangerouslySetInnerHTML={{ __html: data.body }}
          />
        </div>
      )}
    </div>
  );
}
