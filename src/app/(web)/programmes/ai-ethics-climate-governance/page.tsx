import type { Metadata } from "next";
import { Photo } from "@/components/Art";
import { ButtonLink, Eyebrow, PageHero, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "AI, Ethics and Climate Governance Fellowship",
  description:
    "An eight-week online fellowship from the Young Africans Research Academy and Emerging Climate Frontiers for early-career Africans.",
  alternates: { canonical: "/programmes/ai-ethics-climate-governance" },
};

const glance = ["8 weeks", "Fully online", "Approximately 25 Fellows", "Fully funded", "No prior technical AI background required"];

const study = [
  {
    title: "Artificial Intelligence and Climate",
    body: "How AI is being used in areas such as climate modelling, energy systems, early-warning systems and carbon accounting.",
  },
  {
    title: "Frontier Climate Technologies",
    body: "The research and policy questions surrounding technologies including carbon dioxide removal and solar radiation modification.",
  },
  {
    title: "Ethics",
    body: "Questions of risk, responsibility, fairness, participation and who is represented in decisions about new technologies.",
  },
  {
    title: "Governance",
    body: "The laws, standards, institutions and processes through which technologies are governed.",
  },
];

export default function AiEthicsPage() {
  return (
    <>
      <PageHero
        eyebrow="AI, Ethics and Climate Governance Fellowship"
        tone="forest"
        title="African perspectives on the governance of emerging climate technologies."
        aside={<Photo src="/images/brand/green-hills.jpg" alt="Green hills with wind turbines on the horizon" className="hidden aspect-[16/10] lg:block" priority />}
        lede={
          <>
            <p>
              The AI, Ethics and Climate Governance Fellowship is an eight-week online fellowship from the Young Africans
              Research Academy and Emerging Climate Frontiers.
            </p>
            <p className="text-base md:text-lg">
              It brings together early-career Africans to examine how artificial intelligence and other frontier climate
              technologies are being developed, governed and used, and what those decisions mean for African countries
              and communities.
            </p>
          </>
        }
      />

      <section aria-labelledby="glance" className="bg-lime py-8">
        <div className="container-site">
          <h2 id="glance" className="sr-only">
            At a glance
          </h2>
          <ul className="grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-5">
            {glance.map((g) => (
              <li key={g} className="text-sm font-semibold tracking-[0.08em] text-forest-deep uppercase">
                {g}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Section labelledBy="study">
        <SectionHeading id="study" title="What Fellows study" />
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {study.map((s) => (
            <li key={s.title} className="rounded-[var(--radius-card)] bg-white p-7 ring-1 ring-line">
              <h3 className="text-xl font-medium tracking-tight text-forest">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-ink/80">{s.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="forest" labelledBy="how">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 id="how" className="text-3xl font-medium tracking-tight text-lime md:text-4xl">
              How the Fellowship works
            </h2>
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-white/85">
            <p>
              The programme moves from foundations into ethics and governance before Fellows apply what they have learned
              to a real question.
            </p>
            <p>
              Fellows work in small groups to produce a governance policy brief grounded in a country, field or policy
              problem. Their work is developed through discussion, peer review and written feedback.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="who">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <h2 id="who" className="text-3xl font-medium tracking-tight text-forest md:text-4xl">
            Who it is for
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-ink/85">
            <p>
              The Fellowship is intended for early-career Africans whose study or work touches climate, technology or
              governance.
            </p>
            <p>
              This includes researchers and graduate students, people working in policy or civil society, and
              journalists or advocates working on these questions.
            </p>
            <p className="font-medium text-forest">No previous technical training in artificial intelligence is required.</p>
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
              Applications for each cohort are published through YARA&apos;s opportunities page.
            </p>
          </div>
          <ButtonLink href="/opportunities">View opportunities</ButtonLink>
        </div>
      </Section>
    </>
  );
}
