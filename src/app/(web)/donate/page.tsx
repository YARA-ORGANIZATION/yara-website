import type { Metadata } from "next";
import { Photo } from "@/components/Art";
import { ArrowLink, ButtonLink, PageHero } from "@/components/ui";
import { liveLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Donations help cover research training, mentorship, research costs, data and technical resources, publication preparation and opportunities for researchers to present their work.",
  alternates: { canonical: "/donate" },
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Support the research."
        lede={
          <p>
            Donations help cover research training, mentorship, research costs, data and technical resources,
            publication preparation and opportunities for researchers to present their work.
          </p>
        }
        aside={<Photo src="/images/brand/farmer-field.jpg" alt="A farmer kneeling among crops in a field" className="hidden aspect-[4/3] lg:block" priority />}
      >
        {liveLinks.donation && <ButtonLink href={liveLinks.donation}>Make a donation</ButtonLink>}
      </PageHero>
      <section className="bg-cream pb-20 md:pb-28">
        <div className="container-site">
          <div className="rounded-[var(--radius-card)] bg-forest p-8 text-white md:flex md:items-center md:justify-between md:p-10">
            <p className="text-xl">For institutional grants or larger funding partnerships,</p>
            <ArrowLink href="/contact" className="mt-4 text-lg text-lime md:mt-0">
              contact YARA
            </ArrowLink>
          </div>
        </div>
      </section>
    </>
  );
}
