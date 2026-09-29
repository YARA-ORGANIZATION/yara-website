import { createClient, type QueryParams } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { apiVersion, dataset, projectId } from "./env";

export const client = createClient({ projectId, dataset, apiVersion, useCdn: true, perspective: "published" });

const builder = imageUrlBuilder({ projectId, dataset });
export const urlFor = (source: SanityImageSource) => builder.image(source).auto("format");

/** Revalidate CMS pages every 5 minutes, or immediately via /api/revalidate. */
export const REVALIDATE = 300;

/** Fetch that never breaks a build or page render if Sanity is unreachable. */
export async function sanityFetch<T>(query: string, params: QueryParams = {}, fallback: T): Promise<T> {
  try {
    return await client.fetch<T>(query, params, { next: { revalidate: REVALIDATE, tags: ["post"] } });
  } catch (err) {
    console.error("[sanity]", err);
    return fallback;
  }
}
