import type { Metadata } from "next";
import { FlaskConical, Scale } from "lucide-react";
import { ButtonLink, PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "YARA develops programmes that help emerging African researchers build research capability, pursue original questions and produce work that can travel further.",
  alternates: { canonical: "/programmes" },
};

export default function ProgrammesPage() {
  return (
    <>
      <PageHero
        eyebrow="Programmes"
        title="YARA develops programmes that help emerging African researchers build research capability, pursue original questions and produce work that can travel further."
      />
      <Section className="pt-0 md:pt-0" labelledBy="programme-list">
        <h2 id="programme-list" className="sr-only">
          Our programmes
        </h2>
        <ul className="space-y-5">
          <li className="grid gap-8 rounded-[var(--radius-panel)] bg-forest p-8 text-white md:grid-cols-[auto_1fr] md:items-center md:p-12">
            <span aria-hidden className="flex size-24 items-center justify-center rounded-[var(--radius-card)] bg-lime text-forest md:size-32">
              <FlaskConical className="size-10 md:size-12" strokeWidth={1.5} />
            </span>
            <div>
              <h3 className="text-3xl font-medium tracking-tight text-lime">STEM Research Fellowship</h3>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85">
                A year-long programme for emerging researchers to develop an original research project through
                structured training and sustained mentorship.
              </p>
              <ButtonLink href="/programmes/stem-research-fellowship" variant="lime" className="mt-7">
                Explore the Fellowship
                <span className="sr-only">: STEM Research Fellowship</span>
              </ButtonLink>
            </div>
          </li>
          <li className="grid gap-8 rounded-[var(--radius-panel)] bg-lime p-8 text-forest-deep md:grid-cols-[auto_1fr] md:items-center md:p-12">
            <span aria-hidden className="flex size-24 items-center justify-center rounded-[var(--radius-card)] bg-forest text-lime md:size-32">
              <Scale className="size-10 md:size-12" strokeWidth={1.5} />
            </span>
            <div>
              <h3 className="text-3xl font-medium tracking-tight">AI, Ethics and Climate Governance Fellowship</h3>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-forest-deep/85">
                A fellowship from the Young Africans Research Academy and Emerging Climate Frontiers for early-career
                Africans examining the ethics and governance of artificial intelligence and other frontier climate
                technologies.
              </p>
              <ButtonLink href="/programmes/ai-ethics-climate-governance" className="mt-7">
                Explore the Fellowship
                <span className="sr-only">: AI, Ethics and Climate Governance Fellowship</span>
              </ButtonLink>
            </div>
          </li>
        </ul>
      </Section>
    </>
  );
}
