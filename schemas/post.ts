import { defineArrayMember, defineField, defineType } from "sanity";

export const STORY_CATEGORIES = [
  { title: "Spotlight", value: "spotlight" },
  { title: "Insight", value: "insight" },
  { title: "In the Press", value: "press" },
];

export const THEMES = [
  { title: "Artificial Intelligence", value: "ai" },
  { title: "Climate", value: "climate" },
  { title: "Public Health", value: "health" },
];

export default defineType({
  name: "post",
  title: "Story",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "meta", title: "Details" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      group: "content",
      validation: (r) => r.required().max(140),
    }),
    defineField({
      name: "slug",
      type: "slug",
      group: "content",
      description: "The URL: /stories/<slug>",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      type: "string",
      group: "meta",
      options: { list: STORY_CATEGORIES, layout: "radio", direction: "horizontal" },
      initialValue: "insight",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Standfirst",
      type: "text",
      rows: 3,
      group: "content",
      description: "One or two sentences shown on cards and under the headline.",
      validation: (r) => r.required().max(280),
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      group: "content",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Describe the image for people using screen readers.",
          validation: (r) =>
            r.custom((alt, ctx) => {
              const parent = ctx.parent as { asset?: unknown } | undefined;
              return parent?.asset && !alt ? "Alt text is required when an image is set" : true;
            }),
        }),
        defineField({ name: "caption", type: "string" }),
      ],
    }),
    defineField({
      name: "body",
      type: "array",
      group: "content",
      hidden: ({ document }) => document?.category === "press" && !!document?.externalUrl,
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading", value: "h2" },
            { title: "Subheading", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
            ],
            annotations: [
              defineArrayMember({
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  defineField({
                    name: "href",
                    type: "url",
                    validation: (r) => r.uri({ allowRelative: true, scheme: ["http", "https", "mailto"] }),
                  }),
                ],
              }),
            ],
          },
        }),
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt text", type: "string", validation: (r) => r.required() }),
            defineField({ name: "caption", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "externalUrl",
      title: "External article URL",
      type: "url",
      group: "meta",
      description: "For In the Press items: link to the outside coverage instead of writing a body.",
      hidden: ({ document }) => document?.category !== "press",
    }),
    defineField({
      name: "publication",
      title: "Publication / outlet",
      type: "string",
      group: "meta",
      hidden: ({ document }) => document?.category !== "press",
    }),
    defineField({ name: "author", type: "string", group: "meta", description: "e.g. YARA Communications" }),
    defineField({
      name: "people",
      title: "People featured",
      type: "array",
      group: "meta",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "themes",
      type: "array",
      group: "meta",
      of: [{ type: "string" }],
      options: { list: THEMES },
    }),
    defineField({
      name: "publishedAt",
      title: "Published",
      type: "datetime",
      group: "meta",
      initialValue: () => new Date().toISOString(),
      validation: (r) => r.required(),
    }),
    defineField({ name: "seoTitle", title: "SEO title", type: "string", group: "seo" }),
    defineField({ name: "seoDescription", title: "SEO description", type: "text", rows: 2, group: "seo" }),
  ],
  orderings: [
    { title: "Newest first", name: "publishedDesc", by: [{ field: "publishedAt", direction: "desc" }] },
  ],
  preview: {
    select: { title: "title", category: "category", media: "mainImage", date: "publishedAt" },
    prepare({ title, category, media, date }) {
      const label = STORY_CATEGORIES.find((c) => c.value === category)?.title ?? "Story";
      return {
        title,
        media,
        subtitle: [label, date ? new Date(date).toLocaleDateString("en-GB") : null].filter(Boolean).join(" · "),
      };
    },
  },
});
