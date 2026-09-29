import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BrandPanel, Photo, SymposiumFigure } from "@/components/Art";
import NewsletterBand from "@/components/NewsletterBand";
import { ArrowLink, ButtonLink, Eyebrow, Monogram, Section, SectionHeading, ThemeIcon } from "@/components/ui";
import { fellows, initials, themes } from "@/lib/research";
import { partners, symposium } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "YARA | Young Africans Research Academy" },
  alternates: { canonical: "/" },
};

const getInvolved = [
  { title: "Apply", body: "Join one of YARA’s research programmes.", cta: "See opportunities", href: "/opportunities" },
  {
    title: "Mentor",
    body: "Work with an emerging researcher as they develop and pursue an original question.",
    cta: "Mentor with YARA",
    href: "/get-involved/mentor",
  },
  {
    title: "Partner",
    body: "Work with YARA on research, expertise, data, programmes or pathways to application.",
    cta: "Partner with us",
    href: "/get-involved/partner",
  },
  {
    title: "Donate",
    body: "Support YARA’s researchers, programmes and the costs of doing the work.",
    cta: "Donate",
    href: "/donate",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section aria-labelledby="hero-title" className="relative bg-cream pt-32 md:pt-44">
        <div className="container-site">
          <h1
            id="hero-title"
            className="mx-auto max-w-5xl text-balance text-center text-[2.25rem] leading-[1.04] font-medium tracking-[-0.03em] text-forest sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          >
            Building the research talent Africa needs for an{" "}
            <em className="font-light text-ink italic md:block">evidence-driven future</em>
          </h1>
        </div>

        <div className="relative mt-14 md:mt-20">
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-forest" />
          <div className="container-site relative">
            <div className="relative overflow-hidden rounded-[var(--radius-panel)] bg-lime">
              <div className="relative z-10 bg-cream pb-6 pl-0.5 md:w-[55%] md:rounded-br-[var(--radius-panel)] md:pr-10 md:pb-10">
                <p className="text-pretty text-lg leading-relaxed text-ink md:text-xl">
                  Africa’s future will be shaped by decisions about emerging technologies, a changing climate and
                  persistent health challenges. Those decisions need rigorous research and evidence grounded in African
                  realities.
                </p>
              </div>
              <div className="relative px-6 pt-10 pb-8 md:px-10 md:pt-24 md:pb-12">
                <p className="max-w-2xl text-pretty text-lg leading-relaxed text-forest-deep md:text-xl">
                  YARA identifies promising researchers early and gives them rigorous training and sustained mentorship
                  to produce evidence that can inform policy and strengthen institutions.
                </p>
                <ButtonLink href="/about" className="mt-6">
                  Learn about YARA
                </ButtonLink>
              </div>
              <svg
                aria-hidden
                viewBox="0 0 100 100"
                className="pointer-events-none absolute -right-10 -bottom-10 hidden h-72 w-72 text-forest/15 md:block"
              >
                <path d="M0 0a100 100 0 0 0 100 100v-16A84 84 0 0 1 16 0z" fill="currentColor" />
                <path d="M26 0a74 74 0 0 0 74 74V58A58 58 0 0 1 42 0z" fill="currentColor" />
                <path d="M52 0a48 48 0 0 0 48 48V32A32 32 0 0 1 68 0z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* OUR WORK */}
      <Section tone="forest" labelledBy="our-work" className="pt-16 md:pt-24">
        <SectionHeading
          id="our-work"
          eyebrow="Our work"
          tone="light"
          align="center"
          title="YARA concentrates its research and programmes in three areas where stronger local evidence and research capacity will shape consequential decisions across the continent."
          className="max-w-4xl [&_h2]:text-2xl [&_h2]:leading-snug md:[&_h2]:text-4xl"
        />
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {themes.map((t) => (
            <li key={t.key}>
              <Link
                href={t.href}
                className="group flex h-full flex-col rounded-[var(--radius-card)] bg-lime p-7 text-forest-deep transition-transform hover:-translate-y-1"
              >
                <ThemeIcon theme={t.key} />
                <h3 className="mt-6 text-2xl font-medium tracking-tight">{t.name}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-forest-deep/85">{t.homeSummary}</p>
                <ArrowRight
                  aria-hidden
                  className="mt-6 size-5 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* FEATURED RESEARCH */}
      <Section labelledBy="featured-research">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <Photo
            src="/images/brand/lab-researcher.jpg"
            alt="A young researcher working in a laboratory"
            className="aspect-[4/3] md:max-w-lg"
          />
          <div>
            <Eyebrow className="mb-4">Research</Eyebrow>
            <h2 id="featured-research" className="text-balance text-3xl font-medium leading-tight tracking-tight text-forest md:text-4xl">
              Brianna is investigating who is most at risk of lead exposure.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/85">
              In Kintampo, Ghana, Brianna Ama Nyarkowaa Donkoh is analysing blood lead levels alongside factors such as
              age, occupation, water source and household practices to understand how exposure differs across
              population groups.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink/85">
              Her research could help identify which groups should be prioritised for lead-exposure prevention and
              further investigation.
            </p>
            <ButtonLink href="/research/public-health" variant="dark" className="mt-7">
              Explore public health research
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* FELLOWS */}
      <Section tone="cream" labelledBy="fellows" className="pt-0 md:pt-0">
        <SectionHeading
          id="fellows"
          eyebrow="Meet the inaugural Fellows"
          align="center"
          title="Meet the researchers beginning YARA’s first Fellowship year."
          intro="Ten emerging researchers are pursuing original work across artificial intelligence, climate and public health, supported by structured training and sustained mentorship."
        />
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-5">
          {fellows.map((f) => (
            <li key={f.name} className="group">
              <Link
                href="/stories/meet-the-inaugural-yara-fellows"
                className="block overflow-hidden rounded-[var(--radius-card)] bg-white ring-1 ring-line transition-transform group-hover:-translate-y-1"
              >
                <Monogram initials={initials(f.name)} theme={f.theme} className="aspect-[4/5] w-full text-5xl" />
                <span className="block p-4">
                  <span className="block text-[0.9375rem] leading-snug font-medium text-ink">{f.name}</span>
                  <span className="mt-1 block text-sm text-muted">
                    {themes.find((t) => t.key === f.theme)!.name}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <ButtonLink href="/stories/meet-the-inaugural-yara-fellows">Meet the Fellows</ButtonLink>
        </div>
      </Section>

      {/* PROGRAMMES */}
      <Section tone="lime" labelledBy="programmes">
        <SectionHeading id="programmes" align="center" title="Programmes" className="[&_h2]:text-forest-deep" />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[
            {
              title: "STEM Research Fellowship",
              body: "Our year-long STEM Research Fellowship gives emerging researchers rigorous research training, sustained mentorship and the opportunity to develop an original research project.",
              href: "/programmes/stem-research-fellowship",
            },
            {
              title: "AI, Ethics & Climate Governance Fellowship",
              body: "As artificial intelligence and climate technologies advance, new questions are emerging about how they should be governed, who benefits and how their risks are managed. This fellowship brings emerging researchers and practitioners into those questions.",
              href: "/programmes/ai-ethics-climate-governance",
            },
          ].map((p) => (
            <article key={p.href} className="flex flex-col rounded-[var(--radius-card)] bg-cream p-7 md:p-9">
              <h3 className="text-2xl font-medium tracking-tight text-forest">{p.title}</h3>
              <p className="mt-4 flex-1 leading-relaxed text-ink/85">{p.body}</p>
              <ButtonLink href={p.href} variant="outline" className="mt-7 self-start text-forest">
                Learn more<span className="sr-only"> about the {p.title}</span>
              </ButtonLink>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href="/programmes" variant="dark">
            View all programmes
          </ButtonLink>
        </div>
      </Section>

      {/* SYMPOSIUM */}
      <Section labelledBy="symposium">
        <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div className="rounded-[var(--radius-panel)] bg-white p-8 ring-1 ring-line md:p-12">
            <SymposiumFigure className="mx-auto w-full max-w-sm" />
          </div>
          <div>
            <Eyebrow className="mb-4">Symposium 2026</Eyebrow>
            <h2 id="symposium" className="text-balance text-3xl font-medium leading-tight tracking-tight text-forest md:text-5xl">
              A year of research, brought into public view.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/85">
              On 30 September 2026, YARA’s inaugural Fellows will present the research they have developed over the
              past year at the Google AI Community Center in Accra.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink/85">
              Through oral presentations and poster sessions, Fellows will share their work with researchers,
              universities, public institutions, industry and funders, opening it to critique, collaboration and new
              pathways for use. The Symposium will also recognise outstanding research from the inaugural cohort.
            </p>
            <p className="mt-6 font-medium text-ink">
              {symposium.date} · {symposium.time} · Accra
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href={symposium.registerUrl} variant="dark">
                Register
              </ButtonLink>
              <ButtonLink href="/symposium-2026" variant="outline">
                View Symposium
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* STORIES */}
      <Section tone="white" labelledBy="stories">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="md:order-2">
            <BrandPanel tone="forest" className="aspect-[4/3]" label="Ampe gameplay">
              <p className="text-sm font-semibold tracking-[0.14em] uppercase">Spotlight</p>
              <p className="mt-2 text-3xl font-medium tracking-tight text-white">Ampe-DB</p>
            </BrandPanel>
          </div>
          <div>
            <Eyebrow className="mb-4">Stories</Eyebrow>
            <h2 id="stories" className="text-balance text-3xl font-medium leading-tight tracking-tight text-forest md:text-4xl">
              Ampe-DB: When a Ghanaian Game Becomes Research Data
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/85">
              Ruth Biney Senior is helping turn one of Ghana’s best-known traditional games into data that can be
              studied, modelled and preserved.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink/85">
              Her work on Ampe-DB documents paired movement during gameplay, opening new questions about how African
              movement, culture and interaction can be represented in computational research.
            </p>
            <ButtonLink href="/stories/ampe-db-ghanaian-game-research-data" variant="dark" className="mt-7">
              Read Ruth’s story
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* PARTNERS */}
      <section aria-labelledby="partners" className="bg-lime py-12 md:py-14">
        <div className="container-site">
          <h2 id="partners" className="text-center text-xs font-semibold tracking-[0.14em] text-forest-deep uppercase">
            Partners
          </h2>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
            {partners.map((p) =>
              p.logo ? (
                <li key={p.name} className="overflow-hidden rounded-xl bg-black px-4 py-2">
                  <Image src={p.logo} alt={p.name} width={400} height={202} className="h-10 w-auto md:h-12" />
                </li>
              ) : (
                <li key={p.name} className="text-xl font-medium tracking-tight text-forest-deep/80 md:text-2xl">
                  {p.name}
                </li>
              ),
            )}
          </ul>
        </div>
      </section>

      {/* GET INVOLVED */}
      <Section labelledBy="get-involved">
        <SectionHeading id="get-involved" title="Get involved" />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {getInvolved.map((g) => (
            <li key={g.title} className="flex flex-col rounded-[var(--radius-card)] bg-white p-7 ring-1 ring-line">
              <h3 className="text-2xl font-medium tracking-tight text-forest">{g.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-ink/80">{g.body}</p>
              <ArrowLink href={g.href} className="mt-6 text-forest">
                {g.cta}
              </ArrowLink>
            </li>
          ))}
        </ul>
      </Section>

      <NewsletterBand />
    </>
  );
}
