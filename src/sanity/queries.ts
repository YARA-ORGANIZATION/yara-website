import type { PortableTextBlock } from "@portabletext/types";

/** Tagged template so editors get GROQ syntax highlighting; returns the plain string. */
const groq = String.raw;
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type StoryCategory = "spotlight" | "insight" | "press";

export type StoryImage = SanityImageSource & { alt?: string; caption?: string };

export type StoryCard = {
  _id: string;
  title: string;
  slug: string;
  category: StoryCategory;
  excerpt: string;
  mainImage?: StoryImage;
  publishedAt: string;
  externalUrl?: string;
  publication?: string;
};

export type Story = StoryCard & {
  body?: PortableTextBlock[];
  author?: string;
  people?: string[];
  themes?: string[];
  seoTitle?: string;
  seoDescription?: string;
};

const card = groq`_id, title, "slug": slug.current, category, excerpt, mainImage, publishedAt, externalUrl, publication`;

export const storiesQuery = groq`*[_type == "post" && defined(slug.current) && publishedAt <= now()] | order(publishedAt desc) { ${card} }`;

export const storyQuery = groq`*[_type == "post" && slug.current == $slug][0] { ${card}, body, author, people, themes, seoTitle, seoDescription }`;

export const storySlugsQuery = groq`*[_type == "post" && defined(slug.current) && !(defined(externalUrl) && category == "press")].slug.current`;
