import type { Metadata } from "next";
import { Photo } from "@/components/Art";
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
        <ul className="space-y-4">
          <li className="grid gap-6 rounded-[var(--radius-card)] bg-white p-5 ring-1 ring-line sm:grid-cols-[9rem_1fr] sm:items-center md:p-6">
            <Photo src="/images/brand/lab-microscope.jpg" alt="A scientist working with a mentor in a laboratory" className="aspect-square max-w-36 rounded-2xl" rounded={false} sizes="144px" />
            <div>
              <h3 className="text-xl font-medium tracking-tight text-forest">Sustained Mentorship</h3>
              <p className="mt-2 leading-relaxed text-ink/80">
                Each Fellow works with a mentor who provides subject knowledge, reviews the work and helps the Fellow make
                decisions as the project develops.
              </p>
            </div>
          </li>
          <li className="grid gap-6 rounded-[var(--radius-card)] bg-white p-5 ring-1 ring-line sm:grid-cols-[9rem_1fr] sm:items-center md:p-6">
            <Photo src="/images/brand/lab-researcher.jpg" alt="A young researcher at work in a laboratory" className="aspect-square max-w-36 rounded-2xl" rounded={false} sizes="144px" />
            <div>
              <h3 className="text-xl font-medium tracking-tight text-forest">Research Specialisation</h3>
              <p className="mt-2 leading-relaxed text-ink/80">
                Fellows currently pursue research across:{" "}
                <span className="font-medium text-forest">Artificial Intelligence · Climate · Public Health</span>
              </p>
              <ArrowLink href="/research" className="mt-3 text-sm text-forest">
                Explore current research
              </ArrowLink>
            </div>
          </li>
          <li className="grid gap-6 rounded-[var(--radius-card)] bg-white p-5 ring-1 ring-line sm:grid-cols-[9rem_1fr] sm:items-center md:p-6">
            <Photo src="/images/brand/workshop-table.jpg" alt="Researchers discussing work around a table" className="aspect-square max-w-36 rounded-2xl" rounded={false} sizes="144px" />
            <div>
              <h3 className="text-xl font-medium tracking-tight text-forest">The Symposium</h3>
              <p className="mt-2 leading-relaxed text-ink/80">
                The Fellowship ends with the YARA Research Symposium, where Fellows present their work to researchers,
                universities, public institutions, industry and funders.
              </p>
              <ArrowLink href="/symposium-2026" className="mt-3 text-sm text-forest">
                Explore the YARA Research Symposium
              </ArrowLink>
            </div>
          </li>
        </ul>
      </Section>

      <Section tone="lime" labelledBy="applications" className="py-12 md:py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <Eyebrow className="text-forest-deep">Applications</Eyebrow>
            <h2 id="applications" className="mt-2 text-2xl font-medium tracking-tight text-forest-deep md:text-3xl">
              Apply for the STEM Research Fellowship
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
