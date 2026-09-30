import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Photo, SymposiumFigure } from "@/components/Art";
import HeroText from "@/components/HeroText";
import ScrollRevealText from "@/components/ScrollRevealText";
import BlurReveal, { BlurRevealItem } from "@/components/BlurReveal";
import { DotPattern } from "@/components/DotPattern";
import FellowsGrid from "@/components/FellowsGrid";
import NewsletterBand from "@/components/NewsletterBand";
import StoryCardHome from "@/components/StoryCardHome";
import { ButtonLink, Eyebrow, SectionHeading } from "@/components/ui";
import { fellows } from "@/lib/research";
import { partners, symposium } from "@/lib/site";
import { fetchAllStories } from "@/lib/firebase-fetch";

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

export default async function Home() {
  const allStories = await fetchAllStories();
  const homeStories = allStories.slice(0, 3).map((s) => ({
    title: s.title,
    description: s.excerpt,
    href: s.category === "press" && s.externalUrl ? s.externalUrl : `/stories/${s.slug}`,
    image: s.mainImageUrl ?? undefined,
    cta: s.category === "press" ? "Read the coverage" : "Read the story",
  }));

  return (
    <>
      {/* HERO */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden bg-cream">
        <Image
          src="/images/partners/home-header-mobile.png"
          alt=""
          width={750}
          height={1334}
          priority
          className="absolute inset-0 h-full w-full object-cover md:hidden"
        />
        <Image
          src="/images/home-header.png"
          alt=""
          width={1440}
          height={710}
          priority
          className="absolute inset-x-0 top-0 hidden w-full object-cover md:block"
        />
        <div className="relative flex min-h-screen flex-col pb-6 md:min-h-screen md:pb-28 md:grid md:grid-cols-[1.2fr_1fr] md:items-center md:pt-0">
          <div className="container-site pt-32 md:pt-16 md:pl-20 lg:pl-32 md:max-w-[900px] lg:max-w-[1000px] md:self-center">
            <HeroText />
          </div>
          <Image
            src="/vectors/home-hero-side-vector.svg"
            alt=""
            width={500}
            height={647}
            className="mt-auto ml-auto w-2/3 max-w-[280px] md:mt-0 md:ml-0 md:max-h-[650px] md:w-full md:max-w-none md:object-contain md:object-right lg:max-h-[750px]"
            aria-hidden
          />
        </div>
      </section>

      {/* SCROLL REVEAL TEXT */}
      <ScrollRevealText />

      {/* FEATURED RESEARCH */}
      <section aria-labelledby="featured-research" className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "#222222" }}>
        <div className="relative grid min-h-screen md:grid-cols-[1fr_1fr] space-x-0 md:space-x-12">
          {/* Left: SVG background + image (60%) */}
          <div className="relative">
            {/* Decorative SVG background */}
            <Image
              src="/vectors/web-vector.svg"
              alt=""
              fill
              aria-hidden
              className="object-cover opacity-90"
            />
            {/* Image — stretched, object-cover, centered, with overlay */}
            <div className="relative z-10 mx-5 my-12 md:mx-10 md:my-16 aspect-[4/5] md:aspect-auto md:min-h-[calc(100vh-8rem)] overflow-hidden">
              <Image
                src="/images/fellows/brianna.png"
                alt="Brianna Ama Nyarkowaa Donkoh, YARA Fellow"
                fill
                className="object-cover object-top"
                sizes="(min-width: 768px) 50vw, 90vw"
              />
              {/* Bottom gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              {/* Name + title */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-xl font-medium text-white md:text-2xl">Brianna Ama Nyarkowaa Donkoh</p>
                <p className="mt-1 text-sm tracking-[0.1em] uppercase" style={{ color: "#D5F673" }}>YARA Fellow</p>
              </div>
            </div>
          </div>

          {/* Right: Text (40%) — "Research" at top, title+body+button at bottom */}
          <BlurReveal className="relative z-10 flex flex-col justify-between px-6 py-12 md:px-16 md:py-16">
            <BlurRevealItem>
              <p className="text-sm font-semibold tracking-[0.14em] uppercase" style={{ color: "#8ec8d4" }}>
                Research
              </p>
            </BlurRevealItem>

            <div>
              <BlurRevealItem delay={0.15}>
                <h2
                  id="featured-research"
                  className="text-balance text-3xl font-medium leading-tight tracking-tight md:text-4xl"
                  style={{ color: "#D5F673" }}
                >
                  Brianna is investigating who is most at risk of lead exposure.
                </h2>
              </BlurRevealItem>
              <BlurRevealItem delay={0.3}>
                <p className="mt-5 text-base leading-relaxed text-white/80 md:text-base">
                  In Kintampo, Ghana, Brianna Ama Nyarkowaa Donkoh is analysing blood lead levels alongside factors such as
                  age, occupation, water source and household practices to understand how exposure differs across
                  population groups.
                </p>
              </BlurRevealItem>
              <BlurRevealItem delay={0.45}>
                <p className="mt-4 text-base leading-relaxed text-white/80 md:text-base">
                  Her research could help identify which groups should be prioritised for lead-exposure prevention and
                  further investigation.
                </p>
              </BlurRevealItem>
              <BlurRevealItem delay={0.6}>
                <Link
                  href="/research/public-health"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-lime px-5 py-2.5 text-[0.9375rem] font-medium text-forest-deep transition-colors hover:bg-lime-soft"
                >
                  Explore public health research
                  <ArrowRight aria-hidden className="size-4" />
                </Link>
              </BlurRevealItem>
            </div>
          </BlurReveal>
        </div>
      </section>

      {/* FELLOWS */}
      <section aria-labelledby="fellows" className="relative overflow-hidden bg-forest pt-20 text-white md:pt-28">
        <DotPattern
          width={24}
          height={24}
          cr={1}
          className="text-white/[0.07]"
        />
        <BlurReveal className="container-site relative">
          <SectionHeading
            id="fellows"
            eyebrow="Meet the inaugural Fellows"
            align="center"
            tone="light"
            title={<BlurRevealItem><span>Meet the researchers beginning YARA&apos;s first Fellowship year.</span></BlurRevealItem>}
            intro={<BlurRevealItem delay={0.15}><span>Ten emerging researchers are pursuing original work across artificial intelligence, climate and public health, supported by structured training and sustained mentorship.</span></BlurRevealItem>}
          />
        </BlurReveal>
        <div className="container-site relative mt-8 text-center">
          <ButtonLink href="/stories/meet-the-inaugural-yara-fellows" variant="lime">Meet the Fellows</ButtonLink>
        </div>
        <div className="relative mx-auto mt-12 max-w-[1440px]">
          <FellowsGrid fellows={fellows} />
        </div>
      </section>

      {/* PROGRAMMES */}
      <section aria-labelledby="programmes" className="py-16 md:py-24" style={{ backgroundColor: "#FFF9EE" }}>
        <BlurReveal className="container-site">
          <BlurRevealItem>
            <h2
              id="programmes"
              className="text-center primarymedium text-3xl text-forest-deep md:text-4xl"
            >
              Programmes
            </h2>
          </BlurRevealItem>
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
            ].map((p, i) => (
              <BlurRevealItem key={p.href} delay={0.15 + i * 0.2}>
                <article className="flex h-full flex-col rounded-[var(--radius-card)] bg-cream p-7 md:p-9">
                  <h3 className="text-2xl font-medium tracking-tight text-forest">{p.title}</h3>
                  <p className="mt-4 flex-1 leading-relaxed text-ink/85">{p.body}</p>
                  <ButtonLink href={p.href} variant="outline" className="mt-7 self-start text-forest">
                    Learn more<span className="sr-only"> about the {p.title}</span>
                  </ButtonLink>
                </article>
              </BlurRevealItem>
            ))}
          </div>
          <BlurRevealItem delay={0.55}>
            <div className="mt-10 text-center">
              <ButtonLink href="/programmes" variant="dark">
                View all programmes
              </ButtonLink>
            </div>
          </BlurRevealItem>
        </BlurReveal>
      </section>

      {/* SYMPOSIUM */}
      <section aria-labelledby="symposium" className="relative overflow-hidden md:min-h-screen" style={{ backgroundColor: "#111111" }}>
        {/* Desktop vector — absolute behind text */}
        <div className="absolute right-0 top-0 bottom-0 hidden w-2/5 md:block">
          <Image
            src="/vectors/syposium-vector.svg"
            alt=""
            fill
            aria-hidden
            className="object-cover object-left"
          />
        </div>
        <BlurReveal className="relative grid grid-cols-[80%_20%] md:block">
          <div className="px-5 py-16 md:container-site md:grid md:min-h-screen md:items-center md:grid-cols-[3fr_2fr] md:py-0">
            <div className="max-w-2xl">
            <BlurRevealItem>
              <Image
                src="/vectors/syposium-text.svg"
                alt="Symposium 2026"
                width={400}
                height={120}
                className="h-auto w-56 md:w-72"
              />
            </BlurRevealItem>

            <BlurRevealItem delay={0.15}>
              <h2
                id="symposium"
                className="mt-8 text-3xl font-bold leading-tight tracking-tight text-white uppercase md:text-5xl"
              >
                A year of research, brought into public view.
              </h2>
            </BlurRevealItem>

            <BlurRevealItem delay={0.3}>
              <p className="mt-6 text-base leading-relaxed text-white/75">
                On 30 September 2026, YARA&apos;s inaugural Fellows will present the research they have developed over the
                past year at the Google AI Community Center in Accra.
              </p>
            </BlurRevealItem>
            <BlurRevealItem delay={0.4}>
              <p className="mt-4 text-base leading-relaxed text-white/75">
                Through oral presentations and poster sessions, Fellows will share their work with researchers,
                universities, public institutions, industry and funders, opening it to critique, collaboration and new
                pathways for use. The Symposium will also recognise outstanding research from the inaugural cohort.
              </p>
            </BlurRevealItem>

            <BlurRevealItem delay={0.5}>
              <p className="mt-6 text-base font-medium text-white">
                {symposium.date} · {symposium.time} · Accra
              </p>
            </BlurRevealItem>

            <BlurRevealItem delay={0.6}>
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href={symposium.registerUrl} variant="lime">
                  Register
                </ButtonLink>
                <ButtonLink href="/symposium-2026" variant="outline" className="text-white border-white/30 hover:bg-white/10">
                  View Symposium
                </ButtonLink>
              </div>
            </BlurRevealItem>
            </div>
          </div>
          <div className="relative overflow-hidden md:hidden">
            <Image
              src="/vectors/syposium-vector.svg"
              alt=""
              fill
              aria-hidden
              className="object-cover object-left"
            />
          </div>
        </BlurReveal>
      </section>

      {/* STORIES */}
      <section aria-labelledby="stories" className="bg-white">
        <BlurReveal className="container-site flex flex-col gap-8 py-16 md:py-24">
          <BlurRevealItem>
            <div className="flex flex-row items-center justify-between">
              <h2 id="stories" className="primarymedium text-3xl text-black md:text-4xl">
                Stories
              </h2>
              <div className="hidden md:block">
                <ButtonLink href="/stories">View all stories</ButtonLink>
              </div>
            </div>
          </BlurRevealItem>

          <div className="grid gap-4 md:grid-cols-3">
            {homeStories.map((s, idx) => (
              <BlurRevealItem key={idx} delay={0.1 + idx * 0.15} className="h-full">
                <StoryCardHome title={s.title} description={s.description} href={s.href} image={s.image} cta={s.cta} />
              </BlurRevealItem>
            ))}
          </div>

          <div className="mt-2 text-center md:hidden">
            <ButtonLink href="/stories">View all stories</ButtonLink>
          </div>
        </BlurReveal>
      </section>

      {/* PARTNERS */}
      <section aria-labelledby="partners" className="bg-white py-12 md:py-14">
        <div className="container-site">
          <h2 id="partners" className="text-center primarymedium text-3xl text-black md:text-4xl">
            Partners
          </h2>
          <ul className="mt-8 grid grid-cols-3 items-center justify-items-center gap-y-6 md:flex md:flex-wrap md:justify-center md:gap-x-14">
            {partners.map((p) =>
              p.logo ? (
                <li key={p.name} className="overflow-hidden px-4 py-2">
                  <Image src={p.logo} alt={p.name} width={400} height={202} className="h-14 w-auto md:h-20 mix-blend-multiply" />
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
      <section aria-labelledby="get-involved" className="bg-white py-16 md:py-24">
        <BlurReveal className="container-site">
          <BlurRevealItem>
            <h2 id="get-involved" className="primarymedium text-center text-3xl text-[#222222] md:text-4xl">
              Get involved
            </h2>
          </BlurRevealItem>
          <ul className="mt-10 grid gap-4 grid-cols-1 lg:grid-cols-2">
            {getInvolved.map((g, i) => (
              <BlurRevealItem key={g.title} delay={0.1 + i * 0.12}>
                <li className="flex h-full flex-col rounded-2xl bg-[#222222] p-6">
                  <h3 className="primarymedium text-xl tracking-tight text-white">{g.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">{g.body}</p>
                  <Link
                    href={g.href}
                    className="primarymedium mt-5 inline-flex items-center gap-1.5 text-sm text-lime transition-colors hover:text-white"
                  >
                    {g.cta}
                    <ArrowRight aria-hidden className="size-4" />
                  </Link>
                </li>
              </BlurRevealItem>
            ))}
          </ul>
        </BlurReveal>
      </section>

      <NewsletterBand />
    </>
  );
}
