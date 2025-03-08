import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity"; // Importing the correct type for images

export const client = createClient({
   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
   apiVersion: "2025-03-04",
   useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: Image) {
   return builder.image(source);
}
