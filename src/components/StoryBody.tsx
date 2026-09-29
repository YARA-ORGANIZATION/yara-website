import Image from "next/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { urlFor } from "@/sanity/client";
import type { StoryImage } from "@/sanity/queries";

const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: StoryImage }) => (
      <figure className="my-10">
        <Image
          src={urlFor(value).width(1600).fit("max").url()}
          alt={value.alt ?? ""}
          width={1600}
          height={1000}
          sizes="(min-width: 768px) 720px, 100vw"
          className="h-auto w-full rounded-[var(--radius-card)]"
        />
        {value.caption && <figcaption className="mt-3 text-sm text-muted">{value.caption}</figcaption>}
      </figure>
    ),
  },
  block: {
    h3: ({ children }) => <h3 className="mt-8 text-xl font-medium tracking-tight text-ink">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-lime pl-6 text-2xl leading-snug font-medium text-forest">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const href: string = value?.href ?? "#";
      const external = href.startsWith("http");
      return (
        <a
          href={href}
          className="font-medium text-forest underline underline-offset-4"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => <ul className="mt-5 list-disc space-y-2 pl-6">{children}</ul>,
    number: ({ children }) => <ol className="mt-5 list-decimal space-y-2 pl-6">{children}</ol>,
  },
};

export default function StoryBody({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
