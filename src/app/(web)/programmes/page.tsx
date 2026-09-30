import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FlaskConical, Scale, ArrowRight } from "lucide-react";
import BlurReveal, { BlurRevealItem } from "@/components/BlurReveal";
import { ButtonLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "YARA develops programmes that help emerging African researchers build research capability, pursue original questions and produce work that can travel further.",
  alternates: { canonical: "/programmes" },
};

const programmes = [
  {
    title: "STEM Research Fellowship",
    body: "A year-long programme for emerging researchers to develop an original research project through structured training and sustained mentorship.",
    href: "/programmes/stem-research-fellowship",
    Icon: FlaskConical,
  },
  {
    title: "AI, Ethics and Climate Governance Fellowship",
    body: "An eight-week online fellowship from YARA and Emerging Climate Frontiers for early-career Africans working across climate, technology and governance.",
    href: "/programmes/ai-ethics-climate-governance",
    Icon: Scale,
  },
];

export default function ProgrammesPage() {
  return (
    <>
      {/* HERO — blue gradient theme */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24" style={{ background: "linear-gradient(135deg, #0a1628 0%, #112240 40%, #1a3a5c 100%)" }}>
        {/* Decorative circles */}
        <div className="absolute -right-20 -top-20 size-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #5596c2 0%, transparent 70%)" }} />
        <div className="absolute -left-32 -bottom-32 size-[500px] rounded-full opacity-8" style={{ background: "radial-gradient(circle, #87c7f2 0%, transparent 70%)" }} />

        <BlurReveal className="container-site relative">
          <BlurRevealItem>
            <p className="text-sm font-semibold tracking-[0.14em] uppercase" style={{ color: "#87c7f2" }}>Programmes</p>
          </BlurRevealItem>
          <BlurRevealItem delay={0.15}>
            <h1 className="primarymedium mt-6 max-w-4xl text-4xl leading-[1.05] tracking-tight text-white md:text-6xl">
              Building research capability, one programme at a time.
            </h1>
          </BlurRevealItem>
          <BlurRevealItem delay={0.3}>
            <p className="primarynormal mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              YARA develops programmes that help emerging African researchers build research capability, pursue original
              questions and produce work that can travel further.
            </p>
          </BlurRevealItem>
        </BlurReveal>
      </section>

      {/* PROGRAMME LIST */}
      <section className="bg-white py-16 md:py-24">
        <BlurReveal className="container-site">
          <BlurRevealItem>
            <h2 className="primarymedium text-center text-3xl text-[#222222] md:text-4xl">
              Our programmes
            </h2>
          </BlurRevealItem>
          <ul className="mt-12 space-y-5">
            {programmes.map((p, i) => (
              <BlurRevealItem key={p.href} delay={0.15 + i * 0.2}>
                <li
                  className="grid gap-8 rounded-2xl p-8 text-white md:grid-cols-[auto_1fr] md:items-center md:p-12"
                  style={{ background: i === 0 ? "linear-gradient(135deg, #112240 0%, #1a3a5c 100%)" : "#222222" }}
                >
                  <span
                    aria-hidden
                    className="flex size-24 items-center justify-center rounded-2xl md:size-32"
                    style={{ backgroundColor: i === 0 ? "#87c7f2" : "#D5F673", color: i === 0 ? "#0a1628" : "#222222" }}
                  >
                    <p.Icon className="size-10 md:size-12" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="primarymedium text-3xl tracking-tight" style={{ color: i === 0 ? "#87c7f2" : "#D5F673" }}>
                      {p.title}
                    </h3>
                    <p className="primarynormal mt-4 max-w-2xl text-lg leading-relaxed text-white/75">
                      {p.body}
                    </p>
                    <Link
                      href={p.href}
                      className="primarymedium mt-6 inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
                      style={{ color: i === 0 ? "#87c7f2" : "#D5F673" }}
                    >
                      Explore the Fellowship
                      <ArrowRight aria-hidden className="size-4" />
                    </Link>
                  </div>
                </li>
              </BlurRevealItem>
            ))}
          </ul>
        </BlurReveal>
      </section>
    </>
  );
}
