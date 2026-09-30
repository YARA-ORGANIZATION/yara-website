import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlurReveal, { BlurRevealItem } from "@/components/BlurReveal";
import ResearchExplorer from "@/components/ResearchExplorer";
import { themes, type ThemeKey } from "@/lib/research";
import { fetchAllProjects } from "@/lib/firebase-fetch";

const focusAreaImages: Record<ThemeKey, string> = {
  ai: "/images/focus-area-ai.png",
  climate: "/images/focus-area-climate.png",
  health: "/images/focus-area-health.png",
};

export const metadata: Metadata = {
  title: "Research",
  description:
    "YARA supports emerging researchers working on questions in artificial intelligence, climate and public health.",
  alternates: { canonical: "/research" },
};

export default async function ResearchPage() {
  const projects = await fetchAllProjects();

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
            <p className="text-sm font-semibold tracking-[0.14em] uppercase text-lime">Research</p>
          </BlurRevealItem>
          <BlurRevealItem delay={0.15}>
            <h1 className="primarymedium mt-6 max-w-3xl text-4xl leading-[1.05] tracking-tight text-white md:text-6xl">
              Research grounded in African realities.
            </h1>
          </BlurRevealItem>
          <BlurRevealItem delay={0.3}>
            <p className="primarynormal mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              YARA supports emerging researchers working on questions in artificial intelligence, climate and public health.
            </p>
          </BlurRevealItem>
        </BlurReveal>
      </section>

      {/* RESEARCH THEMES */}
      <section className="bg-white py-16 md:py-24">
        <BlurReveal className="container-site">
          <BlurRevealItem>
            <h2 className="primarymedium text-center text-3xl text-[#222222] md:text-4xl">
              Research themes
            </h2>
          </BlurRevealItem>
          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-6">
            {themes.map((t, i) => (
              <BlurRevealItem key={t.key} delay={0.1 + i * 0.15}>
                <Link href={t.href} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={focusAreaImages[t.key]}
                      alt={t.name}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="pt-4 pb-2 md:pr-8">
                    <h3 className="primarybold text-xl tracking-tight text-[#222222]">{t.name}</h3>
                    <p className="primarynormal mt-2 text-sm leading-relaxed text-neutral-600">{t.indexSummary}</p>
                  </div>
                </Link>
              </BlurRevealItem>
            ))}
          </div>
        </BlurReveal>
      </section>

      {/* ALL RESEARCH */}
      <section className="bg-cream py-16 md:py-24">
        <BlurReveal className="container-site">
          <BlurRevealItem>
            <h2 className="primarymedium mb-8 text-3xl text-[#222222] md:text-4xl">All research</h2>
          </BlurRevealItem>
          <BlurRevealItem delay={0.15}>
            <ResearchExplorer projects={projects} />
          </BlurRevealItem>
        </BlurReveal>
      </section>
    </>
  );
}
