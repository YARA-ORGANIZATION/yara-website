import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlurReveal, { BlurRevealItem } from "@/components/BlurReveal";
import { ButtonLink, Monogram } from "@/components/ui";
import { fellows, getTheme, initials } from "@/lib/research";

const title = "Meet the Inaugural YARA Fellows and the Research They Are Pursuing";
const description =
  "Meet YARA's first Fellowship cohort and the original research they are beginning across artificial intelligence, climate and public health.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/stories/meet-the-inaugural-yara-fellows" },
  openGraph: { type: "article", title, description },
};

export default function FellowsStoryPage() {
  return (
    <article>
      {/* HERO — lime top */}
      <header className="bg-lime pt-32 pb-0 md:pt-40">
        <div className="container-site">
          <Link href="/stories" className="inline-flex items-center gap-2 text-sm text-forest-deep/50 hover:text-forest-deep">
            <ArrowRight aria-hidden className="size-4 rotate-180" /> Stories
          </Link>
          <p className="mt-8 text-sm font-semibold tracking-[0.14em] uppercase text-forest-deep">
            Spotlight · STEM Research Fellowship
          </p>
          <h1 className="primarymedium mt-4 max-w-4xl text-4xl leading-[1.05] tracking-tight text-forest-deep md:text-6xl">
            {title}
          </h1>
        </div>

        {/* Fellows strip — edge to edge, no spacing, no radius, taller */}
        <div className="mt-12 flex w-full overflow-hidden">
          {fellows.map((f) => (
            <div key={f.name} className="relative flex-1" style={{ aspectRatio: "3/4" }}>
              {f.image ? (
                <Image
                  src={f.image}
                  alt={f.name}
                  fill
                  sizes="10vw"
                  className="object-cover"
                />
              ) : (
                <Monogram
                  initials={initials(f.name)}
                  theme={f.theme}
                  className="absolute inset-0 text-lg"
                />
              )}
            </div>
          ))}
        </div>
      </header>

      {/* INTRO */}
      <section className="bg-[#222222] py-14 md:py-20">
        <BlurReveal className="container-site">
          <BlurRevealItem>
            <div className="max-w-3xl">
              <p className="primarynormal text-lg leading-relaxed text-white/80 md:text-xl">
                The Young Africans Research Academy was established to identify promising African researchers early and
                give them the training, mentorship and time required to pursue original research.
              </p>
            </div>
          </BlurRevealItem>
          <BlurRevealItem delay={0.15}>
            <div className="max-w-3xl">
              <p className="primarynormal mt-5 text-lg leading-relaxed text-white/80 md:text-xl">
                The STEM Research Fellowship is YARA&apos;s year-long programme for undergraduate researchers. Fellows build
                research skills through structured training, work with experienced mentors and develop an original project
                from question and proposal through analysis and presentation.
              </p>
            </div>
          </BlurRevealItem>
          <BlurRevealItem delay={0.3}>
            <div className="max-w-3xl">
              <p className="primarynormal mt-5 text-lg leading-relaxed text-white/80 md:text-xl">
                The inaugural cohort brings together ten researchers working across artificial intelligence, climate and
                public health. Their projects begin with different problems, but the Fellowship gives each researcher the
                same basic task: define a question carefully, choose a sound method, work with evidence and develop the
                project through sustained research.
              </p>
            </div>
          </BlurRevealItem>
          <BlurRevealItem delay={0.45}>
            <p className="primarymedium mt-6 text-xl text-lime md:text-2xl">
              Meet the inaugural YARA Fellows and the research they are pursuing.
            </p>
          </BlurRevealItem>
        </BlurReveal>
      </section>

      {/* FELLOWS LIST */}
      <section className="bg-[#1a1a1a] py-14 md:py-20">
        <BlurReveal className="container-site">
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {fellows.map((f, i) => (
              <BlurRevealItem key={f.name} delay={0.05 + i * 0.06} className="h-full">
                <li className="flex h-full gap-5 rounded-2xl bg-[#222222] p-6 md:p-7">
                  <div className="relative size-20 flex-none overflow-hidden rounded-xl md:size-24">
                    {f.image ? (
                      <Image
                        src={f.image}
                        alt={f.name}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    ) : (
                      <Monogram
                        initials={initials(f.name)}
                        theme={f.theme}
                        className="absolute inset-0 text-xl"
                      />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col">
                    <p className="text-xs font-semibold tracking-[0.12em] uppercase text-lime">
                      {getTheme(f.theme).name}
                    </p>
                    <h2 className="primarymedium mt-2 text-xl tracking-tight text-white">{f.name}</h2>
                    <h3 className="primarymedium mt-2 leading-snug text-lime/80 text-sm">{f.projectTitle}</h3>
                    <p className="primarynormal mt-3 flex-1 text-sm leading-relaxed text-white/60">{f.bio}</p>
                  </div>
                </li>
              </BlurRevealItem>
            ))}
          </ul>
        </BlurReveal>
      </section>

      {/* THE FELLOWSHIP */}
      <section className="bg-[#222222] py-16 md:py-20">
        <BlurReveal className="container-site grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <BlurRevealItem>
            <p className="text-sm font-semibold tracking-[0.14em] uppercase text-lime">
              The Fellowship
            </p>
          </BlurRevealItem>
          <BlurRevealItem delay={0.15}>
            <div>
              <p className="primarynormal text-xl leading-relaxed text-white/80">
                Over the course of the Fellowship, each researcher develops their project through training, mentorship,
                independent research and review. The programme is designed to give Fellows experience carrying an original
                question through a serious research process and to prepare them for further research, graduate study,
                publication and other routes their work may take.
              </p>
              <div className="mt-8">
                <ButtonLink href="/programmes/stem-research-fellowship" variant="lime">
                  Explore the STEM Research Fellowship
                </ButtonLink>
              </div>
            </div>
          </BlurRevealItem>
        </BlurReveal>
      </section>
    </article>
  );
}
