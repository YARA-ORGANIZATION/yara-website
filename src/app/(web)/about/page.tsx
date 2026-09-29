import type { Metadata } from "next";
import { Photo } from "@/components/Art";
import Link from "next/link";
import { ButtonLink, Card, Eyebrow, PageHero, Prose, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Young Africans Research Academy (YARA) is a pan-African research institution developing the next generation of African researchers.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Rigour",
    body: "We ask precise questions, use sound methods and communicate only what the evidence can support.",
  },
  {
    title: "Collaboration",
    body: "We work across disciplines, institutions and sectors, recognising that consequential research is strengthened by different forms of expertise.",
  },
  {
    title: "Impact",
    body: "We pursue research with a clear understanding of what it could change, whether through new knowledge, policy, technology, institutional practice or commercial application.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About YARA"
        title="Building stronger pathways for African research talent."
        lede={
          <>
            <p>
              Young Africans Research Academy (YARA) is a pan-African research institution developing the next
              generation of African researchers and building pathways through which their work can move from inquiry
              to application.
            </p>
            <p className="text-base text-ink/70 md:text-lg">
              We identify promising researchers early, develop their capacity through rigorous training and sustained
              mentorship, and support them to pursue original questions grounded in African realities. We then create
              pathways for that work to move into publication, further research, policy, innovation and
              commercialisation.
            </p>
          </>
        }
        aside={<Photo src="/images/brand/students-group.jpg" alt="Young African students smiling together" className="hidden aspect-[4/5] max-h-[28rem] lg:block" priority />}
      >
        <ButtonLink href="/about/team" variant="primary">
          Meet the team
        </ButtonLink>
        <ButtonLink href="/strategy" variant="outline" className="text-forest">
          YARA 2031
        </ButtonLink>
      </PageHero>

      <Section tone="forest" labelledBy="mission">
        <h2 id="mission" className="sr-only">
          Mission and vision
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          <Card tone="cream" className="ring-0">
            <Eyebrow className="mb-4">Our mission</Eyebrow>
            <p className="text-pretty text-xl leading-relaxed text-ink md:text-2xl">
              To identify promising African researchers early, develop their capacity to produce rigorous original
              research, and create pathways for their work to advance knowledge, inform policy and drive innovation.
            </p>
          </Card>
          <Card tone="lime">
            <Eyebrow className="mb-4">Our vision for African research</Eyebrow>
            <p className="text-pretty text-xl leading-relaxed md:text-2xl">
              To build an Africa where African researchers generate the knowledge, technologies and evidence that shape
              the continent’s future.
            </p>
          </Card>
        </div>
      </Section>

      <Section labelledBy="values">
        <h2 id="values">
          <Eyebrow>Our core values</Eyebrow>
        </h2>
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {values.map((v, i) => (
            <li key={v.title} className="rounded-[var(--radius-card)] bg-white p-7 ring-1 ring-line">
              <span className="text-sm font-medium text-forest/60">0{i + 1}</span>
              <h3 className="mt-4 text-2xl font-medium tracking-tight text-forest">{v.title}</h3>
              <p className="mt-3 leading-relaxed text-ink/80">{v.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="lime" labelledBy="why">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <Eyebrow className="mb-4">Why YARA exists</Eyebrow>
            <h2 id="why" className="text-balance text-3xl font-medium leading-tight tracking-tight text-forest-deep md:text-5xl">
              African research should have greater influence over Africa’s future.
            </h2>
            <div className="mt-10 rounded-[var(--radius-card)] bg-cream p-7">
              <p className="text-5xl font-medium tracking-tight text-forest md:text-6xl">
                18% <span className="text-2xl text-ink/50">vs</span> &lt;2%
              </p>
              <p className="mt-3 leading-relaxed text-ink/80">
                Africa is home to about 18% of the world’s population, yet produces less than 2% of global research
                output.
              </p>
            </div>
          </div>
          <Prose className="text-forest-deep [&_p]:text-forest-deep">
            <p>
              Behind those numbers are longstanding constraints in research investment, training, mentorship,
              infrastructure and access to the environments in which researchers can develop serious work.
            </p>
            <p>
              But those figures do not capture the full challenge. They tell us something about how much research is
              produced, not what happens to the research that already exists.
            </p>
            <p>
              Across the continent, African researchers are already generating important knowledge and evidence. The
              challenge is also whether that work has the pathways to influence what happens next: what policymakers
              decide, how institutions respond, what industries build, and which ideas have the opportunity to develop
              into technologies, products and new ventures.
            </p>
            <p>
              For emerging researchers, the gap can begin early. Access to sustained mentorship, rigorous research
              training, data, research communities and opportunities to pursue original questions remains uneven.
              Without those conditions, promising researchers may never have the opportunity to develop their potential
              fully.
            </p>
            <p className="font-medium">YARA exists to strengthen that pathway from the beginning.</p>
            <p>
              We identify promising researchers early, support them to develop rigorous original work, and create
              routes through which that work can move into publication, further research, policy, innovation and
              commercialisation.
            </p>
          </Prose>
        </div>
      </Section>

      <Section id="beyond-publication" labelledBy="beyond">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <Eyebrow className="mb-4">Beyond publication</Eyebrow>
            <h2 id="beyond" className="text-balance text-3xl font-medium leading-tight tracking-tight text-forest md:text-4xl">
              Publication is an important milestone in research, but it is not always its final destination.
            </h2>
          </div>
          <Prose>
            <p>
              Good research can become the basis for another discovery, a better policy, a different institutional
              decision, a new technology, a product or a practical solution.
            </p>
            <p>
              YARA therefore treats what happens after the research as part of the research pathway itself. We want
              emerging African researchers not only to produce credible work, but to have stronger routes through which
              that work can reach the people and institutions positioned to use, test, extend or build on it.
            </p>
            <p>
              For research with clear potential for further application, our ambition goes further. YARA intends to
              provide an environment in which selected projects can continue to develop within the institution, moving
              from research towards prototypes, programmes, technologies, products or ventures.
            </p>
            <p>
              This allows promising research to keep developing with continued access to the expertise, partnerships
              and resources required for its next stage. YARA can support that progression from early research through
              to testing, application and commercial development, while keeping the research and what grows from it
              connected within the same institutional environment.
            </p>
          </Prose>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <Link href="/about/team" className="group rounded-[var(--radius-card)] bg-forest p-8 text-white transition-colors hover:bg-forest-deep">
            <p className="text-xs font-semibold tracking-[0.14em] text-lime uppercase">Team</p>
            <p className="mt-3 text-2xl font-medium tracking-tight">The people building YARA</p>
          </Link>
          <Link href="/strategy" className="group rounded-[var(--radius-card)] bg-lime p-8 text-forest-deep transition-colors hover:bg-[#cdeb57]">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase">YARA 2031</p>
            <p className="mt-3 text-2xl font-medium tracking-tight">Building Stronger Research Pathways</p>
          </Link>
        </div>
      </Section>
    </>
  );
}
