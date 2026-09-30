import type { Metadata } from "next";
import Image from "next/image";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import BlurReveal, { BlurRevealItem } from "@/components/BlurReveal";
import { ArrowLink, ButtonLink, Eyebrow, ThemeIcon } from "@/components/ui";
import { symposium } from "@/lib/site";
import type { ThemeKey } from "@/lib/research";

export const metadata: Metadata = {
  title: "YARA Inaugural Research Symposium 2026",
  description:
    "Indigenous Research Renaissance: From Inquiry to Impact. 30 September 2026, Google AI Community Center, Accra.",
  alternates: { canonical: "/symposium-2026" },
};

// Re-render hourly so the page switches to its archive state after the event.
export const revalidate = 3600;

const researchInView: { theme: ThemeKey; title: string; body: string }[] = [
  {
    theme: "ai",
    title: "Artificial Intelligence",
    body: "Research includes credit-risk modelling using mobile financial-service histories, few-shot agricultural AI, offline pneumonia screening and machine-readable movement data from the Ghanaian game Ampe.",
  },
  {
    theme: "climate",
    title: "Climate",
    body: "Research includes projected dry-day patterns over Ghana and long-term sea-surface temperature change in Ghana's Exclusive Economic Zone.",
  },
  {
    theme: "health",
    title: "Public Health",
    body: "Research includes lead exposure, maternal mental health and child development, integrated HIV-TB care, and ageing, obesity and related health risks.",
  },
];

const programme = [
  {
    time: "Morning",
    title: "Opening & Research in Context",
    body: "Welcome, opening remarks and the first Fellow research presentations.",
  },
  {
    time: "Midday",
    title: "Research Exchange",
    body: "Poster exhibition, moderated discussion and direct engagement between Fellows, mentors and delegates.",
  },
  {
    time: "Afternoon",
    title: "From Research to Application",
    body: "Further Fellow presentations and discussion about how research moves into academia, policy, institutions, industry and practice.",
  },
  {
    time: "Closing",
    title: "Recognition & Next Connections",
    body: "Recognition of the inaugural cohort, closing reflections and networking.",
  },
];

/** Add confirmed speakers and chairs here; the section stays hidden until the list has entries. */
const speakers: { name: string; role: string; part: string }[] = [];

const archive = [
  { id: "watch", label: "Watch the presentations" },
  { id: "research", label: "View the research", href: "/research" },
  { id: "photographs", label: "Symposium photographs" },
  { id: "report", label: "Read the Symposium report" },
];

function EventFacts({ className }: { className?: string }) {
  return (
    <ul className={className}>
      <li className="flex items-center gap-3">
        <CalendarDays aria-hidden className="size-5 shrink-0 text-[#D5F673]" />
        {symposium.date}
      </li>
      <li className="flex items-center gap-3">
        <Clock aria-hidden className="size-5 shrink-0 text-[#D5F673]" />
        {symposium.time}
      </li>
      <li className="flex items-center gap-3">
        <MapPin aria-hidden className="size-5 shrink-0 text-[#D5F673]" />
        {symposium.venue}
      </li>
    </ul>
  );
}

export default function SymposiumPage() {
  const isPast = Date.now() > symposium.endsAt.getTime();

  return (
    <div className="bg-[#111111]">
      {/* ── HERO ── */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden" style={{ backgroundColor: "#111111" }}>
        {/* Desktop decorative vector */}
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
          <div className="px-5 pt-32 pb-20 md:container-site md:grid md:min-h-[85vh] md:items-center md:grid-cols-[3fr_2fr] md:pt-40 md:pb-24">
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

              <BlurRevealItem delay={0.1}>
                <Eyebrow tone="lime" className="mt-8">YARA Inaugural Research Symposium</Eyebrow>
              </BlurRevealItem>

              <BlurRevealItem delay={0.2}>
                <h1
                  id="hero-title"
                  className="primarybold mt-5 text-3xl leading-tight tracking-tight text-white uppercase md:text-5xl"
                >
                  Indigenous Research Renaissance: From Inquiry to Impact
                </h1>
              </BlurRevealItem>

              <BlurRevealItem delay={0.3}>
                <p className="primarynormal mt-6 text-base leading-relaxed text-white/75 md:text-lg">
                  The inaugural YARA Fellows will present the research they are pursuing and bring it into conversation
                  with researchers, universities, public institutions, industry and funders.
                </p>
              </BlurRevealItem>

              <BlurRevealItem delay={0.4}>
                <EventFacts className="mt-6 space-y-2 text-base primarymedium text-white" />
              </BlurRevealItem>

              <BlurRevealItem delay={0.5}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {isPast ? (
                    <ButtonLink href="#watch" variant="lime">Watch the presentations</ButtonLink>
                  ) : (
                    <>
                      <ButtonLink href={symposium.registerUrl} variant="lime">Register to attend</ButtonLink>
                      <p className="text-sm text-white/50">
                        Registration closes Friday, {symposium.registrationDeadline}.
                      </p>
                    </>
                  )}
                </div>
              </BlurRevealItem>
            </div>
          </div>

          {/* Mobile decorative vector */}
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

      {/* ── WHY THE SYMPOSIUM ── */}
      <section aria-labelledby="why" className="py-16 md:py-24" style={{ backgroundColor: "#111111" }}>
        <div className="container-site">
          <BlurReveal>
            <div className="grid gap-10 md:grid-cols-2 md:gap-16">
              <div>
                <BlurRevealItem>
                  <Eyebrow tone="lime" className="mb-4">Why the Symposium</Eyebrow>
                  <h2 id="why" className="sr-only">Why the Symposium</h2>
                </BlurRevealItem>
                <BlurRevealItem delay={0.1}>
                  <p className="primarynormal text-pretty text-xl leading-relaxed text-white md:text-2xl">
                    The Symposium brings YARA&apos;s first Research Fellowship cohort into public view. Ten Fellows are
                    developing original work with structured training and mentor support. On 30 September, they will
                    present that work, respond to questions and meet people and institutions that may be able to
                    strengthen, publish, use or extend it.
                  </p>
                </BlurRevealItem>
              </div>

              <BlurRevealItem delay={0.2}>
                <div className="rounded-2xl bg-[#1a1a1a] p-7 ring-1 ring-white/10 md:p-9">
                  <Eyebrow tone="lime">The theme</Eyebrow>
                  <h3 className="primarymedium mt-4 text-2xl tracking-tight text-[#D5F673]">
                    Indigenous Research Renaissance: From Inquiry to Impact
                  </h3>
                  <p className="primarynormal mt-4 leading-relaxed text-white/75">
                    The theme starts with a simple proposition: African researchers should be able to ask questions from
                    within the societies they know, work with evidence relevant to those settings and contribute to the
                    knowledge used to understand them.
                  </p>
                  <p className="primarynormal mt-4 leading-relaxed text-white/75">
                    &ldquo;From Inquiry to Impact&rdquo; asks what can happen when a research question becomes credible
                    work. Some research may lead to further study. Some may inform policy or institutional decisions. Some
                    may find applications in technology or industry. The Symposium creates a place for those next
                    conversations to begin.
                  </p>
                </div>
              </BlurRevealItem>
            </div>
          </BlurReveal>
        </div>
      </section>

      {/* ── RESEARCH IN PUBLIC VIEW ── */}
      <section aria-labelledby="in-view" className="py-16 md:py-24" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="container-site">
          <BlurReveal>
            <BlurRevealItem>
              <div className="max-w-3xl">
                <Eyebrow tone="lime" className="mb-4">Research</Eyebrow>
                <h2
                  id="in-view"
                  className="primarymedium text-balance text-3xl leading-[1.1] tracking-tight text-white md:text-5xl"
                >
                  Research in public view
                </h2>
              </div>
            </BlurRevealItem>

            <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {researchInView.map((r, i) => (
                <BlurRevealItem key={r.title} delay={0.1 + i * 0.1} className="h-full">
                  <li className="flex h-full flex-col rounded-2xl bg-[#1a1a1a] p-7 ring-1 ring-white/10">
                    <ThemeIcon theme={r.theme} tone="lime" />
                    <h3 className="primarymedium mt-5 text-xl tracking-tight text-white">{r.title}</h3>
                    <p className="primarynormal mt-3 flex-1 leading-relaxed text-white/70">{r.body}</p>
                  </li>
                </BlurRevealItem>
              ))}
            </ul>

            <BlurRevealItem delay={0.5}>
              <ArrowLink href="/research" className="mt-10 text-[#D5F673]">
                Explore the research
              </ArrowLink>
            </BlurRevealItem>
          </BlurReveal>
        </div>
      </section>

      {/* ── PROGRAMME ── */}
      <section aria-labelledby="programme" className="py-16 md:py-24" style={{ backgroundColor: "#111111" }}>
        <div className="container-site">
          <BlurReveal>
            <BlurRevealItem>
              <div className="max-w-3xl">
                <Eyebrow tone="lime" className="mb-4">Schedule</Eyebrow>
                <h2
                  id="programme"
                  className="primarymedium text-balance text-3xl leading-[1.1] tracking-tight text-white md:text-5xl"
                >
                  Programme
                </h2>
              </div>
            </BlurRevealItem>

            <ol className="mt-10 divide-y divide-white/10 overflow-hidden rounded-2xl bg-[#1a1a1a] ring-1 ring-white/10">
              {programme.map((p, i) => (
                <BlurRevealItem key={p.time} delay={0.1 + i * 0.1}>
                  <li className="grid gap-2 p-6 md:grid-cols-[10rem_1fr] md:gap-8 md:p-8">
                    <span className="primarybold text-sm tracking-[0.12em] text-[#D5F673] uppercase">{p.time}</span>
                    <div>
                      <h3 className="primarymedium text-xl tracking-tight text-white">{p.title}</h3>
                      <p className="primarynormal mt-2 leading-relaxed text-white/70">{p.body}</p>
                    </div>
                  </li>
                </BlurRevealItem>
              ))}
            </ol>
          </BlurReveal>
        </div>
      </section>

      {/* ── SPEAKERS (hidden until populated) ── */}
      {speakers.length > 0 && (
        <section aria-labelledby="speakers" className="py-16 md:py-24" style={{ backgroundColor: "#0d0d0d" }}>
          <div className="container-site">
            <BlurReveal>
              <BlurRevealItem>
                <div className="max-w-3xl">
                  <Eyebrow tone="lime" className="mb-4">People</Eyebrow>
                  <h2
                    id="speakers"
                    className="primarymedium text-balance text-3xl leading-[1.1] tracking-tight text-white md:text-5xl"
                  >
                    Speakers &amp; Chairs
                  </h2>
                  <p className="primarynormal mt-5 text-pretty text-lg leading-relaxed text-white/75">
                    Researchers, institutional leaders and practitioners will join the inaugural Fellows in conversations
                    throughout the day.
                  </p>
                </div>
              </BlurRevealItem>

              <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {speakers.map((s, i) => (
                  <BlurRevealItem key={s.name} delay={0.1 + i * 0.1}>
                    <li className="rounded-2xl bg-[#1a1a1a] p-6 ring-1 ring-white/10">
                      <p className="primarybold text-xs tracking-[0.12em] text-[#D5F673] uppercase">{s.part}</p>
                      <h3 className="primarymedium mt-3 text-lg text-white">{s.name}</h3>
                      <p className="primarynormal mt-1 text-white/60">{s.role}</p>
                    </li>
                  </BlurRevealItem>
                ))}
              </ul>
            </BlurReveal>
          </div>
        </section>
      )}

      {/* ── WHO SHOULD ATTEND ── */}
      <section aria-labelledby="attend" className="py-16 md:py-24" style={{ backgroundColor: "#111111" }}>
        <div className="container-site">
          <BlurReveal>
            <div className="grid gap-10 md:grid-cols-2 md:gap-16">
              <div>
                <BlurRevealItem>
                  <Eyebrow tone="lime" className="mb-4">Who should attend</Eyebrow>
                  <h2 id="attend" className="sr-only">Who should attend</h2>
                </BlurRevealItem>
                <BlurRevealItem delay={0.1}>
                  <p className="primarynormal text-pretty text-xl leading-relaxed text-white md:text-2xl">
                    Researchers and academics, public institutions, industry and technical teams, funders and development
                    organisations, students and emerging researchers.
                  </p>
                </BlurRevealItem>
              </div>

              {!isPast && (
                <BlurRevealItem delay={0.2}>
                  <div className="rounded-2xl bg-[#D5F673] p-7 text-[#111111] md:p-9">
                    <span className="primarybold inline-block text-xs tracking-[0.14em] uppercase">Register</span>
                    <p className="primarymedium mt-4 text-xl">Registration is required.</p>
                    <EventFacts className="mt-5 space-y-2 primarynormal text-[#111111]/85 [&_svg]:!text-[#111111]" />
                    <ButtonLink href={symposium.registerUrl} variant="dark" className="mt-7">
                      Register to attend
                    </ButtonLink>
                    <p className="primarynormal mt-4 text-sm text-[#111111]/60">
                      Registration deadline: {symposium.registrationDeadline}.
                    </p>
                  </div>
                </BlurRevealItem>
              )}
            </div>
          </BlurReveal>
        </div>
      </section>

      {/* ── AFTER THE SYMPOSIUM ── */}
      <section id="after" aria-labelledby="after-heading" className="py-16 md:py-24" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="container-site">
          <BlurReveal>
            <BlurRevealItem>
              <div className="max-w-3xl">
                <Eyebrow tone="lime" className="mb-4">After the Symposium</Eyebrow>
                <h2
                  id="after-heading"
                  className="primarymedium text-balance text-3xl leading-[1.1] tracking-tight text-white md:text-5xl"
                >
                  Event archive
                </h2>
                <p className="primarynormal mt-5 text-pretty text-lg leading-relaxed text-white/75">
                  After 30 September, this page becomes the permanent home for the event archive.
                </p>
              </div>
            </BlurRevealItem>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {archive.map((a, i) => (
                <BlurRevealItem key={a.id} delay={0.1 + i * 0.1}>
                  <li
                    id={a.href ? undefined : a.id}
                    className="rounded-2xl bg-[#1a1a1a] p-6 ring-1 ring-white/10"
                  >
                    <h3 className="primarymedium text-lg tracking-tight text-white">{a.label}</h3>
                    {a.href ? (
                      <ArrowLink href={a.href} className="mt-4 text-[#D5F673]">
                        View
                      </ArrowLink>
                    ) : (
                      <p className="primarynormal mt-3 text-sm text-white/40">Available after the event.</p>
                    )}
                  </li>
                </BlurRevealItem>
              ))}
            </ul>
          </BlurReveal>
        </div>
      </section>
    </div>
  );
}
