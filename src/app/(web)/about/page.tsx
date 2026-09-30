import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlurReveal, { BlurRevealItem } from "@/components/BlurReveal";
import { ButtonLink, Eyebrow } from "@/components/ui";

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
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#222222] pt-32 pb-16 md:pt-40 md:pb-24">
        <BlurReveal className="container-site relative">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="max-w-3xl">
            <BlurRevealItem>
              <Eyebrow className="mb-4 text-white/60">About YARA</Eyebrow>
            </BlurRevealItem>
            <BlurRevealItem delay={0.1}>
              <h1 className="primarymedium text-balance text-4xl leading-tight tracking-tight text-white md:text-6xl">
                Building stronger pathways for African research talent.
              </h1>
            </BlurRevealItem>
            <BlurRevealItem delay={0.2}>
              <p className="primarynormal mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
                Young Africans Research Academy (YARA) is a pan-African research institution developing the next
                generation of African researchers and building pathways through which their work can move from inquiry
                to application.
              </p>
            </BlurRevealItem>
            <BlurRevealItem delay={0.3}>
              <p className="primarynormal mt-4 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
                We identify promising researchers early, develop their capacity through rigorous training and sustained
                mentorship, and support them to pursue original questions grounded in African realities. We then create
                pathways for that work to move into publication, further research, policy, innovation and
                commercialisation.
              </p>
            </BlurRevealItem>
            <BlurRevealItem delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href="/about/team" variant="lime">
                  Meet the team
                </ButtonLink>
                <ButtonLink href="/strategy" variant="outline-light">
                  YARA 2031
                </ButtonLink>
              </div>
            </BlurRevealItem>
          </div>
          <BlurRevealItem delay={0.3} className="hidden lg:block">
            <div className="relative aspect-[4/5] max-h-[28rem] overflow-hidden rounded-2xl">
              <Image
                src="/images/brand/students-group.jpg"
                alt="Young African students smiling together"
                fill
                priority
                className="object-cover"
              />
            </div>
          </BlurRevealItem>
          </div>
        </BlurReveal>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="bg-white py-20 md:py-28">
        <BlurReveal className="container-site">
          <BlurRevealItem>
            <h2 className="sr-only">Mission and vision</h2>
          </BlurRevealItem>
          <div className="grid gap-5 md:grid-cols-2">
            <BlurRevealItem delay={0.1}>
              <div className="flex h-full flex-col rounded-2xl bg-[#222222] p-8 md:p-10">
                <Eyebrow className="mb-4 text-white/60">Our mission</Eyebrow>
                <p className="primarynormal text-pretty text-xl leading-relaxed text-white md:text-2xl">
                  To identify promising African researchers early, develop their capacity to produce rigorous original
                  research, and create pathways for their work to advance knowledge, inform policy and drive innovation.
                </p>
              </div>
            </BlurRevealItem>
            <BlurRevealItem delay={0.2}>
              <div className="flex h-full flex-col rounded-2xl bg-[#222222] p-8 md:p-10">
                <Eyebrow className="mb-4" tone="lime">Our vision for African research</Eyebrow>
                <p className="primarynormal text-pretty text-xl leading-relaxed text-white md:text-2xl">
                  To build an Africa where African researchers generate the knowledge, technologies and evidence that
                  shape the continent&apos;s future.
                </p>
              </div>
            </BlurRevealItem>
          </div>
        </BlurReveal>
      </section>

      {/* ── Core Values ── */}
      <section className="bg-cream py-20 md:py-28">
        <BlurReveal className="container-site">
          <BlurRevealItem>
            <Eyebrow className="mb-2">Our core values</Eyebrow>
          </BlurRevealItem>
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <BlurRevealItem key={v.title} delay={0.1 + i * 0.15}>
                <li className="rounded-2xl bg-white p-7 ring-1 ring-black/5">
                  <span className="primarymedium text-sm" style={{ color: "#D5F673" }}>
                    0{i + 1}
                  </span>
                  <h3 className="primarymedium mt-4 text-2xl tracking-tight text-[#222222]">{v.title}</h3>
                  <p className="primarynormal mt-3 leading-relaxed text-[#222222]/70">{v.body}</p>
                </li>
              </BlurRevealItem>
            ))}
          </ul>
        </BlurReveal>
      </section>

      {/* ── Why YARA exists ── */}
      <section className="bg-[#111111] py-20 md:py-28">
        <BlurReveal className="container-site">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <BlurRevealItem>
                <Eyebrow className="mb-4" tone="lime">Why YARA exists</Eyebrow>
              </BlurRevealItem>
              <BlurRevealItem delay={0.1}>
                <h2 className="primarymedium text-balance text-3xl leading-tight tracking-tight text-white md:text-5xl">
                  African research should have greater influence over Africa&apos;s future.
                </h2>
              </BlurRevealItem>
              <BlurRevealItem delay={0.2}>
                <div className="mt-10 rounded-2xl bg-[#222222] p-7">
                  <p className="primarymedium text-5xl tracking-tight text-white md:text-6xl">
                    18% <span className="text-2xl text-white/40">vs</span>{" "}
                    <span style={{ color: "#D5F673" }}>&lt;2%</span>
                  </p>
                  <p className="primarynormal mt-3 leading-relaxed text-white/70">
                    Africa is home to about 18% of the world&apos;s population, yet produces less than 2% of global
                    research output.
                  </p>
                </div>
              </BlurRevealItem>
            </div>
            <div className="space-y-5">
              <BlurRevealItem delay={0.15}>
                <p className="primarynormal leading-relaxed text-white/80">
                  Behind those numbers are longstanding constraints in research investment, training, mentorship,
                  infrastructure and access to the environments in which researchers can develop serious work.
                </p>
              </BlurRevealItem>
              <BlurRevealItem delay={0.25}>
                <p className="primarynormal leading-relaxed text-white/80">
                  But those figures do not capture the full challenge. They tell us something about how much research is
                  produced, not what happens to the research that already exists.
                </p>
              </BlurRevealItem>
              <BlurRevealItem delay={0.35}>
                <p className="primarynormal leading-relaxed text-white/80">
                  Across the continent, African researchers are already generating important knowledge and evidence. The
                  challenge is also whether that work has the pathways to influence what happens next: what policymakers
                  decide, how institutions respond, what industries build, and which ideas have the opportunity to
                  develop into technologies, products and new ventures.
                </p>
              </BlurRevealItem>
              <BlurRevealItem delay={0.45}>
                <p className="primarynormal leading-relaxed text-white/80">
                  For emerging researchers, the gap can begin early. Access to sustained mentorship, rigorous research
                  training, data, research communities and opportunities to pursue original questions remains uneven.
                  Without those conditions, promising researchers may never have the opportunity to develop their
                  potential fully.
                </p>
              </BlurRevealItem>
              <BlurRevealItem delay={0.55}>
                <p className="primarybold leading-relaxed text-white">
                  YARA exists to strengthen that pathway from the beginning.
                </p>
              </BlurRevealItem>
              <BlurRevealItem delay={0.6}>
                <p className="primarynormal leading-relaxed text-white/80">
                  We identify promising researchers early, support them to develop rigorous original work, and create
                  routes through which that work can move into publication, further research, policy, innovation and
                  commercialisation.
                </p>
              </BlurRevealItem>
            </div>
          </div>
        </BlurReveal>
      </section>

      {/* ── Beyond publication ── */}
      <section className="bg-white py-20 md:py-28">
        <BlurReveal className="container-site">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <BlurRevealItem>
                <Eyebrow className="mb-4">Beyond publication</Eyebrow>
              </BlurRevealItem>
              <BlurRevealItem delay={0.1}>
                <h2 className="primarymedium text-balance text-3xl leading-tight tracking-tight text-[#222222] md:text-4xl">
                  Publication is an important milestone in research, but it is not always its final destination.
                </h2>
              </BlurRevealItem>
            </div>
            <div className="space-y-5">
              <BlurRevealItem delay={0.15}>
                <p className="primarynormal leading-relaxed text-[#222222]/80">
                  Good research can become the basis for another discovery, a better policy, a different institutional
                  decision, a new technology, a product or a practical solution.
                </p>
              </BlurRevealItem>
              <BlurRevealItem delay={0.25}>
                <p className="primarynormal leading-relaxed text-[#222222]/80">
                  YARA therefore treats what happens after the research as part of the research pathway itself. We want
                  emerging African researchers not only to produce credible work, but to have stronger routes through
                  which that work can reach the people and institutions positioned to use, test, extend or build on it.
                </p>
              </BlurRevealItem>
              <BlurRevealItem delay={0.35}>
                <p className="primarynormal leading-relaxed text-[#222222]/80">
                  For research with clear potential for further application, our ambition goes further. YARA intends to
                  provide an environment in which selected projects can continue to develop within the institution,
                  moving from research towards prototypes, programmes, technologies, products or ventures.
                </p>
              </BlurRevealItem>
              <BlurRevealItem delay={0.45}>
                <p className="primarynormal leading-relaxed text-[#222222]/80">
                  This allows promising research to keep developing with continued access to the expertise, partnerships
                  and resources required for its next stage. YARA can support that progression from early research
                  through to testing, application and commercial development, while keeping the research and what grows
                  from it connected within the same institutional environment.
                </p>
              </BlurRevealItem>
            </div>
          </div>

          {/* ── Bottom links ── */}
          <BlurRevealItem delay={0.3}>
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              <Link
                href="/about/team"
                className="group rounded-2xl bg-[#222222] p-8 text-white transition-colors hover:bg-[#111111]"
              >
                <p className="primarymedium text-xs tracking-[0.14em] uppercase" style={{ color: "#D5F673" }}>
                  Team
                </p>
                <p className="primarymedium mt-3 text-2xl tracking-tight">The people building YARA</p>
              </Link>
              <Link
                href="/strategy"
                className="group rounded-2xl p-8 transition-colors"
                style={{ backgroundColor: "#D5F673" }}
              >
                <p className="primarymedium text-xs tracking-[0.14em] text-[#222222] uppercase">YARA 2031</p>
                <p className="primarymedium mt-3 text-2xl tracking-tight text-[#222222]">
                  Building Stronger Research Pathways
                </p>
              </Link>
            </div>
          </BlurRevealItem>
        </BlurReveal>
      </section>
    </>
  );
}
