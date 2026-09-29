import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ResearchExplorer from "@/components/ResearchExplorer";
import { PageHero, Section, SectionHeading, ThemeIcon } from "@/components/ui";
import { themes } from "@/lib/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "YARA supports emerging researchers working on questions in artificial intelligence, climate and public health.",
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Research grounded in African realities."
        lede={
          <p>YARA supports emerging researchers working on questions in artificial intelligence, climate and public health.</p>
        }
      />

      <Section className="pt-0 md:pt-0" labelledBy="themes">
        <h2 id="themes" className="mb-8 text-2xl font-medium tracking-tight text-forest md:text-3xl">
          Our Focus Sectors
        </h2>
        <ul className="grid gap-5 md:grid-cols-3">
          {themes.map((t) => (
            <li key={t.key}>
              <Link
                href={t.href}
                className="group flex h-full flex-col rounded-[var(--radius-card)] bg-lime p-7 text-forest-deep transition-transform hover:-translate-y-1"
              >
                <ThemeIcon theme={t.key} />
                <h3 className="mt-6 text-2xl font-medium tracking-tight">{t.name}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-forest-deep/85">{t.indexSummary}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 font-medium">
                  Explore {t.name}
                  <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="cream-deep" labelledBy="all-research">
        <SectionHeading id="all-research" eyebrow="All research" title="Explore All Research" className="mb-8" />
        <ResearchExplorer />
      </Section>
    </>
  );
}
