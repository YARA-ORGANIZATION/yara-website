import type { Metadata } from "next";
import { NewsletterForm } from "@/components/Forms";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Research, programmes, opportunities and news from the YARA Research Symposium.",
  alternates: { canonical: "/newsletter" },
};

export default function NewsletterPage() {
  return (
    <section className="bg-forest pt-36 pb-24 md:pt-48 md:pb-32">
      <div className="container-site max-w-3xl">
        <Eyebrow tone="lime">Newsletter</Eyebrow>
        <h1 className="mt-6 text-4xl font-medium tracking-tight text-white md:text-6xl">Updates from YARA</h1>
        <p className="mt-6 text-xl leading-relaxed text-white/85">
          Research, programmes, opportunities and news from the YARA Research Symposium.
        </p>
        <div className="mt-10">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
