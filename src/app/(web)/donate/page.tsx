import type { Metadata } from "next";
import { HandCoins, Landmark } from "lucide-react";
import { ArrowLink, ButtonLink, PageHero, Section } from "@/components/ui";
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
      <PageHero eyebrow="Donate" tone="lime" title="Support the research." />
      <Section labelledBy="donate-why">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <h2 id="donate-why" className="text-2xl font-medium tracking-tight text-forest md:text-3xl">
              Your support drives African science
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/85">
              Donations help cover research training, mentorship, research costs, data and technical resources,
              publication preparation and opportunities for researchers to present their work.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-[var(--radius-card)] bg-lime p-7 text-forest-deep">
              <HandCoins aria-hidden className="size-6" />
              <h3 className="mt-4 text-xl font-medium tracking-tight">Make a donation</h3>
              {liveLinks.donation ? (
                <ButtonLink href={liveLinks.donation} className="mt-5">
                  Make a donation
                </ButtonLink>
              ) : (
                <p className="mt-2 text-forest-deep/80">Online giving will open here soon.</p>
              )}
            </div>
            <div className="rounded-[var(--radius-card)] bg-lime-soft p-7 text-forest-deep">
              <Landmark aria-hidden className="size-6" />
              <h3 className="mt-4 text-xl font-medium tracking-tight">Institutional grants</h3>
              <p className="mt-2 text-forest-deep/80">For institutional grants or larger funding partnerships,</p>
              <ArrowLink href="/contact" className="mt-4 text-forest">
                contact YARA
              </ArrowLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
