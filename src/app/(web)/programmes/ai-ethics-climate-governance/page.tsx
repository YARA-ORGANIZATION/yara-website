import type { Metadata } from "next";
import Image from "next/image";
import BlurReveal, { BlurRevealItem } from "@/components/BlurReveal";
import { ButtonLink } from "@/components/ui";

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
            <p className="text-sm font-semibold tracking-[0.14em] uppercase text-lime">
              AI, Ethics and Climate Governance Fellowship
            </p>
          </BlurRevealItem>
          <BlurRevealItem delay={0.15}>
            <h1 className="primarymedium mt-6 max-w-4xl text-4xl leading-[1.05] tracking-tight text-white md:text-6xl">
              African perspectives on the governance of emerging climate technologies.
            </h1>
          </BlurRevealItem>
          <BlurRevealItem delay={0.3}>
            <p className="primarynormal mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              The AI, Ethics and Climate Governance Fellowship is an eight-week online fellowship from the Young Africans
              Research Academy and Emerging Climate Frontiers. It brings together early-career Africans to examine how
              artificial intelligence and other frontier climate technologies are being developed, governed and used.
            </p>
          </BlurRevealItem>
        </BlurReveal>
      </section>

      {/* AT A GLANCE */}
      <section className="bg-lime py-8">
        <div className="container-site">
          <ul className="grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-5">
            {glance.map((g) => (
              <li key={g} className="text-sm font-semibold tracking-[0.08em] uppercase text-forest-deep">
                {g}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHAT FELLOWS STUDY */}
      <section className="bg-white py-16 md:py-24">
        <BlurReveal className="container-site">
          <BlurRevealItem>
            <h2 className="primarymedium text-3xl text-[#222222] md:text-4xl">What Fellows study</h2>
          </BlurRevealItem>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {study.map((s, i) => (
              <BlurRevealItem key={s.title} delay={0.1 + i * 0.12}>
                <li className="rounded-2xl bg-cream p-7">
                  <h3 className="primarymedium text-xl tracking-tight text-[#222222]">{s.title}</h3>
                  <p className="primarynormal mt-3 leading-relaxed text-neutral-600">{s.body}</p>
                </li>
              </BlurRevealItem>
            ))}
          </ul>
        </BlurReveal>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#222222] py-16 md:py-24">
        <BlurReveal className="container-site">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <BlurRevealItem>
              <h2 className="primarymedium text-3xl tracking-tight text-lime md:text-4xl">
                How the Fellowship works
              </h2>
            </BlurRevealItem>
            <BlurRevealItem delay={0.15}>
              <div className="space-y-4 text-lg leading-relaxed text-white/75">
                <p>
                  The programme moves from foundations into ethics and governance before Fellows apply what they have learned
                  to a real question.
                </p>
                <p>
                  Fellows work in small groups to produce a governance policy brief grounded in a country, field or policy
                  problem. Their work is developed through discussion, peer review and written feedback.
                </p>
              </div>
            </BlurRevealItem>
          </div>
        </BlurReveal>
      </section>

      {/* WHO IT IS FOR */}
      <section className="bg-white py-16 md:py-24">
        <BlurReveal className="container-site">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <BlurRevealItem>
              <h2 className="primarymedium text-3xl tracking-tight text-[#222222] md:text-4xl">
                Who it is for
              </h2>
            </BlurRevealItem>
            <BlurRevealItem delay={0.15}>
              <div className="space-y-4 text-lg leading-relaxed text-neutral-600">
                <p>
                  The Fellowship is intended for early-career Africans whose study or work touches climate, technology or
                  governance.
                </p>
                <p>
                  This includes researchers and graduate students, people working in policy or civil society, and
                  journalists or advocates working on these questions.
                </p>
                <p className="primarymedium text-[#222222]">No previous technical training in artificial intelligence is required.</p>
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
              Applications for each cohort are published through YARA&apos;s opportunities page.
            </p>
          </div>
          <ButtonLink href="/opportunities">View opportunities</ButtonLink>
        </div>
      </section>
    </>
  );
}
