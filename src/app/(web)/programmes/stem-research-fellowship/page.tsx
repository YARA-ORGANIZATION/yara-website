import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlurReveal, { BlurRevealItem } from "@/components/BlurReveal";
import { ButtonLink } from "@/components/ui";

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
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#222222] pt-32 pb-16 md:pt-40 md:pb-24">
        <Image
          src="/vectors/web-vector.svg"
          alt=""
          fill
          aria-hidden
          className="object-cover opacity-30"
        />
        <BlurReveal className="container-site relative">
          <BlurRevealItem>
            <p className="text-sm font-semibold tracking-[0.14em] uppercase text-lime">STEM Research Fellowship</p>
          </BlurRevealItem>
          <BlurRevealItem delay={0.15}>
            <h1 className="primarymedium mt-6 max-w-3xl text-4xl leading-[1.05] tracking-tight text-white md:text-6xl">
              A year to learn how to do research by doing it.
            </h1>
          </BlurRevealItem>
          <BlurRevealItem delay={0.3}>
            <p className="primarynormal mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              The STEM Research Fellowship is YARA&apos;s year-long research programme for undergraduate researchers.
              Fellows receive structured research training, work with experienced mentors and develop an original
              research project from question and proposal through to analysis and presentation.
            </p>
          </BlurRevealItem>
        </BlurReveal>
      </section>

      {/* AT A GLANCE */}
      <section className="bg-white py-16 md:py-24">
        <BlurReveal className="container-site">
          <BlurRevealItem>
            <h2 className="primarymedium text-3xl text-[#222222] md:text-4xl">At a glance</h2>
          </BlurRevealItem>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {glance.map((g, i) => (
              <BlurRevealItem key={g.title} delay={0.1 + i * 0.1}>
                <li className="rounded-2xl bg-cream p-6">
                  <h3 className="primarymedium text-lg tracking-tight text-[#222222]">{g.title}</h3>
                  <p className="primarynormal mt-2 text-sm leading-relaxed text-neutral-600">{g.body}</p>
                </li>
              </BlurRevealItem>
            ))}
          </ul>
        </BlurReveal>
      </section>

      {/* HOW THE YEAR WORKS */}
      <section className="bg-[#222222] py-16 md:py-24">
        <BlurReveal className="container-site">
          <BlurRevealItem>
            <h2 className="primarymedium text-3xl text-white md:text-4xl">How the year works</h2>
          </BlurRevealItem>
          <ol className="mt-10 grid gap-4 md:grid-cols-4">
            {year.map((y, i) => (
              <BlurRevealItem key={y.phase} delay={0.1 + i * 0.12}>
                <li className="rounded-2xl bg-cream p-6">
                  <span className="inline-block rounded-full bg-lime px-3 py-1 text-xs font-semibold text-forest-deep">
                    {y.phase}
                  </span>
                  <h3 className="primarymedium mt-4 text-xl tracking-tight text-[#222222]">{y.title}</h3>
                  <p className="primarynormal mt-2 leading-relaxed text-neutral-600">{y.body}</p>
                </li>
              </BlurRevealItem>
            ))}
          </ol>
        </BlurReveal>
      </section>

      {/* DETAILS */}
      <section className="bg-white py-16 md:py-24">
        <BlurReveal className="container-site">
          <div className="grid gap-4 md:grid-cols-3">
            <BlurRevealItem>
              <div className="rounded-2xl bg-cream p-7">
                <p className="text-sm font-semibold tracking-[0.12em] uppercase text-[#222222]">Mentorship</p>
                <p className="primarynormal mt-4 leading-relaxed text-neutral-600">
                  Each Fellow works with a mentor who provides subject knowledge, reviews the work and helps the Fellow make
                  decisions as the project develops.
                </p>
              </div>
            </BlurRevealItem>
            <BlurRevealItem delay={0.15}>
              <div className="rounded-2xl bg-cream p-7">
                <p className="text-sm font-semibold tracking-[0.12em] uppercase text-[#222222]">Research</p>
                <p className="primarynormal mt-4 leading-relaxed text-neutral-600">Fellows currently pursue research across:</p>
                <p className="primarymedium mt-2 text-forest">Artificial Intelligence · Climate · Public Health</p>
                <Link href="/research" className="primarymedium mt-5 inline-flex items-center gap-1.5 text-sm text-lime hover:text-forest">
                  Explore current research <ArrowRight aria-hidden className="size-4" />
                </Link>
              </div>
            </BlurRevealItem>
            <BlurRevealItem delay={0.3}>
              <div className="rounded-2xl bg-[#222222] p-7 text-white">
                <p className="text-sm font-semibold tracking-[0.12em] uppercase text-lime">The Symposium</p>
                <p className="primarynormal mt-4 leading-relaxed text-white/75">
                  The Fellowship ends with the YARA Research Symposium, where Fellows present their work to researchers,
                  universities, public institutions, industry and funders.
                </p>
                <Link href="/symposium-2026" className="primarymedium mt-5 inline-flex items-center gap-1.5 text-sm text-lime hover:text-white">
                  Explore the Symposium <ArrowRight aria-hidden className="size-4" />
                </Link>
              </div>
            </BlurRevealItem>
          </div>
        </BlurReveal>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-lime py-12 md:py-16">
        <div className="container-site flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.12em] uppercase text-forest-deep">Applications</p>
            <p className="primarynormal mt-3 max-w-xl text-xl text-forest-deep">
              Applications for the next cohort will be announced through YARA&apos;s opportunities page.
            </p>
          </div>
          <ButtonLink href="/opportunities">View opportunities</ButtonLink>
        </div>
      </section>
    </>
  );
}
