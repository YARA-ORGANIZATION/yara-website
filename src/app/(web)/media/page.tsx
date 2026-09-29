import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Media",
  description:
    "For interview requests, research enquiries, speaker requests or information about YARA and the Research Symposium.",
  alternates: { canonical: "/media" },
};

const available = [
  "Institutional background on YARA",
  "Information on current research",
  "Researcher and leadership interview requests",
  "Symposium information",
  "Approved photographs and logos",
];

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="For Media"
        tone="lime"
        title="For Media"
        lede={
          <p>
            For interview requests, research enquiries, speaker requests or information about YARA and the Research
            Symposium, contact:
          </p>
        }
      />
      <Section labelledBy="enquiries">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-[var(--radius-card)] bg-white p-7 ring-1 ring-line md:p-9">
            <h2 id="enquiries" className="text-2xl font-medium tracking-tight text-forest">
              Enquiries
            </h2>
            <p className="mt-3 leading-relaxed text-ink/80">
              Please include your outlet or organisation, the subject of your enquiry and your deadline.
            </p>
            <div className="mt-6 rounded-xl bg-cream p-5">
              <p className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">Media contact</p>
              <a href={`mailto:${site.email}`} className="mt-1 block text-lg font-medium text-forest hover:underline">
                {site.email}
              </a>
            </div>
          </div>
          <div className="rounded-[var(--radius-card)] bg-forest p-7 text-white md:p-9">
            <h2 className="text-2xl font-medium tracking-tight text-lime">Available on request</h2>
            <ul className="mt-5 space-y-3">
              {available.map((a) => (
                <li key={a} className="flex items-start gap-3 text-white/90">
                  <span aria-hidden className="mt-2 size-2 shrink-0 rounded-full bg-lime" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
