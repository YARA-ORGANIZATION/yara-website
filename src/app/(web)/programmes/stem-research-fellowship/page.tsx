import type { Metadata } from "next";
import { ArrowLink, ButtonLink, Eyebrow, PageHero, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "STEM Research Fellowship",
  description:
    "The STEM Research Fellowship is YARA's year-long research programme for undergraduate researchers.",
  alternates: { canonical: "/programmes/stem-research-fellowship" },
};

const glance = [
  { title: "12 months", body: "Research development from foundations to presentation" },
  { title: "Original research", body: "Each Fellow develops and carries out an independent project" },
  { title: "Sustained mentorship", body: "Fellows work with researchers with relevant academic or professional experience" },
  { title: "Research training", body: "Methods, ethics, analysis and scientific writing" },
  { title: "Public presentation", body: "Fellows present their work at the YARA Research Symposium" },
];

const year = [
  {
    phase: "Months 1–2",
    title: "Foundations",
    body: "Research questions, literature, research ethics and the basic principles behind sound research.",
  },
  {
    phase: "Months 3–6",
    title: "Research design",
    body: "Fellows develop their proposals and strengthen the methods, analytical and writing skills required for the work.",
  },
  {
    phase: "Months 7–10",
    title: "Independent research",
    body: "Each Fellow undertakes an original project with regular guidance and review.",
  },
  {
    phase: "Months 11–12",
    title: "Presenting the work",
    body: "Fellows complete their research and prepare it for presentation, publication or further development where appropriate.",
  },
];

export default function StemFellowshipPage() {
  return (
    <>
      <PageHero
        eyebrow="STEM Research Fellowship"
        tone="lime"
        title="A year to learn how to do research by doing it."
        lede={
          <>
            <p>The STEM Research Fellowship is YARA&apos;s year-long research programme for undergraduate researchers.</p>
            <p className="text-base md:text-lg">
              Fellows receive structured research training, work with experienced mentors and develop an original
              research project from question and proposal through to analysis and presentation.
            </p>
            <p className="text-base md:text-lg">
              YARA&apos;s current Fellowship supports research across artificial intelligence, climate and public health.
            </p>
          </>
        }
      />

      <Section labelledBy="glance">
        <SectionHeading id="glance" title="At a glance" />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {glance.map((g) => (
            <li key={g.title} className="rounded-[var(--radius-card)] bg-white p-6 ring-1 ring-line">
              <h3 className="text-lg font-medium tracking-tight text-forest">{g.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{g.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="forest" labelledBy="year">
        <SectionHeading id="year" tone="light" title="How the year works" />
        <ol className="mt-10 grid gap-4 md:grid-cols-4">
          {year.map((y) => (
            <li key={y.phase} className="rounded-[var(--radius-card)] bg-cream p-6 text-ink">
              <span className="inline-block rounded-full bg-lime px-3 py-1 text-xs font-semibold text-forest-deep">
                {y.phase}
              </span>
              <h3 className="mt-4 text-xl font-medium tracking-tight text-forest">{y.title}</h3>
              <p className="mt-2 leading-relaxed text-ink/80">{y.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section labelledBy="details">
        <h2 id="details" className="sr-only">
          Mentorship, research and the Symposium
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-[var(--radius-card)] bg-white p-7 ring-1 ring-line">
            <Eyebrow>Mentorship</Eyebrow>
            <p className="mt-4 leading-relaxed text-ink/85">
              Each Fellow works with a mentor who provides subject knowledge, reviews the work and helps the Fellow make
              decisions as the project develops.
            </p>
          </div>
          <div className="rounded-[var(--radius-card)] bg-white p-7 ring-1 ring-line">
            <Eyebrow>Research</Eyebrow>
            <p className="mt-4 leading-relaxed text-ink/85">Fellows currently pursue research across:</p>
            <p className="mt-2 font-medium text-forest">Artificial Intelligence · Climate · Public Health</p>
            <ArrowLink href="/research" className="mt-5 text-forest">
              Explore current research
            </ArrowLink>
          </div>
          <div className="rounded-[var(--radius-card)] bg-lime p-7 text-forest-deep">
            <Eyebrow className="text-forest-deep">The Symposium</Eyebrow>
            <p className="mt-4 leading-relaxed">
              The Fellowship ends with the YARA Research Symposium, where Fellows present their work to researchers,
              universities, public institutions, industry and funders.
            </p>
            <ArrowLink href="/symposium-2026" className="mt-5">
              Explore the YARA Research Symposium
            </ArrowLink>
          </div>
        </div>
      </Section>

      <Section tone="lime" labelledBy="applications" className="py-12 md:py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 id="applications">
              <Eyebrow className="text-forest-deep">Applications</Eyebrow>
            </h2>
            <p className="mt-3 max-w-xl text-xl text-forest-deep">
              Applications for the next cohort will be announced through YARA&apos;s opportunities page.
            </p>
          </div>
          <ButtonLink href="/opportunities">View opportunities</ButtonLink>
        </div>
      </Section>
    </>
  );
}
