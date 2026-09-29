import type { Metadata } from "next";
import { NewsletterForm } from "@/components/Forms";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Research, programmes, opportunities and news from the YARA Research Symposium.",
  alternates: { canonical: "/newsletter" },
};

export default function NewsletterPage() {
  return (
    <>
      <PageHero
        eyebrow="Newsletter"
        tone="lime"
        title="Updates from YARA"
        lede={<p>Research, programmes, opportunities and news from the YARA Research Symposium.</p>}
      />
      <section className="bg-cream py-16 md:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-xl rounded-[var(--radius-panel)] bg-white p-7 text-center ring-1 ring-line md:p-10">
            <h2 className="text-xl font-medium tracking-tight text-forest">Subscribe to YARA updates</h2>
            <div className="mt-6 text-left">
              <NewsletterForm tone="light" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
