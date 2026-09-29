import type { Metadata } from "next";
import { NewsletterForm } from "@/components/Forms";
import { ButtonLink, Eyebrow, PageHero, Section } from "@/components/ui";
import { liveLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Opportunities",
  description: "Applications for YARA programmes, Fellowships and other open calls are published here.",
  alternates: { canonical: "/opportunities" },
};

export default function OpportunitiesPage() {
  const hasOpenCall = Boolean(liveLinks.aiEthicsApplication);

  return (
    <>
      <PageHero
        eyebrow="Opportunities"
        tone="lime"
        title="Applications for YARA programmes, Fellowships and other open calls are published here."
      />

      <Section className="pt-0 md:pt-0" labelledBy="current">
        <h2 id="current" className="mb-6">
          <Eyebrow>Current opportunities</Eyebrow>
        </h2>
        <ul className="space-y-5">
          <li className="grid gap-6 rounded-[var(--radius-card)] bg-white p-7 ring-1 ring-line md:grid-cols-[1fr_auto] md:items-center md:p-9">
            <div>
              <h3 className="text-2xl font-medium tracking-tight text-forest">
                AI, Ethics and Climate Governance Fellowship
              </h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-ink/80">
                An eight-week online Fellowship from YARA and Emerging Climate Frontiers for early-career Africans
                working across climate, technology and governance.
              </p>
              {liveLinks.aiEthicsStatus && (
                <p className="mt-4 inline-block rounded-full bg-lime px-3 py-1 text-sm font-medium text-forest-deep">
                  {liveLinks.aiEthicsStatus}
                </p>
              )}
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/programmes/ai-ethics-climate-governance" variant="outline" className="text-forest">
                View the Fellowship
              </ButtonLink>
              {liveLinks.aiEthicsApplication && (
                <ButtonLink href={liveLinks.aiEthicsApplication}>Apply</ButtonLink>
              )}
            </div>
          </li>
          <li className="grid gap-6 rounded-[var(--radius-card)] bg-white p-7 ring-1 ring-line md:grid-cols-[1fr_auto] md:items-center md:p-9">
            <div>
              <h3 className="text-2xl font-medium tracking-tight text-forest">STEM Research Fellowship</h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-ink/80">
                YARA’s year-long research Fellowship for undergraduate researchers developing an original project through
                structured training and sustained mentorship.
              </p>
              <p className="mt-4 text-sm font-medium text-muted">Next cohort: Dates to be announced</p>
            </div>
            <ButtonLink href="/programmes/stem-research-fellowship" variant="outline" className="text-forest">
              View the Fellowship
            </ButtonLink>
          </li>
        </ul>
      </Section>

      <Section tone="forest" id="interest-list" labelledBy="interest">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            {!hasOpenCall && (
              <h2 id="interest" className="text-3xl font-medium tracking-tight text-white md:text-4xl">
                There are currently no open applications.
              </h2>
            )}
            {hasOpenCall && (
              <h2 id="interest" className="text-3xl font-medium tracking-tight text-white md:text-4xl">
                Join the interest list
              </h2>
            )}
            <p className="mt-4 max-w-md text-lg text-white/80">
              Join the YARA interest list and we will send you the next call when applications open.
            </p>
          </div>
          <NewsletterForm
            kind="interest-list"
            buttonLabel="Join the interest list"
            confirmation="Thank you. We’ll email you when the next call for applications opens."
          />
        </div>
      </Section>

    </>
  );
}
