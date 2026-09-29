import type { Metadata } from "next";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { SymposiumFigure } from "@/components/Art";
import { ArrowLink, ButtonLink, Eyebrow, PageHero, Section, SectionHeading, ThemeIcon } from "@/components/ui";
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
    body: "Research includes projected dry-day patterns over Ghana and long-term sea-surface temperature change in Ghana’s Exclusive Economic Zone.",
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
        <CalendarDays aria-hidden className="size-5 shrink-0" />
        {symposium.date}
      </li>
      <li className="flex items-center gap-3">
        <Clock aria-hidden className="size-5 shrink-0" />
        {symposium.time}
      </li>
      <li className="flex items-center gap-3">
        <MapPin aria-hidden className="size-5 shrink-0" />
        {symposium.venue}
      </li>
    </ul>
  );
}

export default function SymposiumPage() {
  const isPast = Date.now() > symposium.endsAt.getTime();

  return (
    <>
      <PageHero
        eyebrow="YARA Inaugural Research Symposium 2026"
        tone="lime"
        title="Indigenous Research Renaissance: From Inquiry to Impact"
        lede={
          <>
            <EventFacts className="space-y-2 text-base font-medium md:text-lg" />
            <p>
              The inaugural YARA Fellows will present the research they are pursuing and bring it into conversation with
              researchers, universities, public institutions, industry and funders.
            </p>
          </>
        }
        aside={
          <div className="hidden rounded-[var(--radius-panel)] bg-cream p-10 lg:block">
            <SymposiumFigure className="mx-auto w-full max-w-xs" />
          </div>
        }
      >
        {isPast ? (
          <ButtonLink href="#watch">Watch the presentations</ButtonLink>
        ) : (
          <>
            <ButtonLink href={symposium.registerUrl}>Register to attend</ButtonLink>
            <p className="text-sm text-forest-deep/80">Registration closes Friday, {symposium.registrationDeadline}.</p>
          </>
        )}
      </PageHero>

      <Section labelledBy="why">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <Eyebrow className="mb-4">Why the Symposium</Eyebrow>
            <h2 id="why" className="sr-only">
              Why the Symposium
            </h2>
            <p className="text-pretty text-xl leading-relaxed text-ink md:text-2xl">
              The Symposium brings YARA’s first Research Fellowship cohort into public view. Ten Fellows are developing
              original work with structured training and mentor support. On 30 September, they will present that work,
              respond to questions and meet people and institutions that may be able to strengthen, publish, use or
              extend it.
            </p>
          </div>
          <div className="rounded-[var(--radius-card)] bg-white p-7 ring-1 ring-line md:p-9">
            <Eyebrow>The theme</Eyebrow>
            <h3 className="mt-4 text-2xl font-medium tracking-tight text-forest">
              Indigenous Research Renaissance: From Inquiry to Impact
            </h3>
            <p className="mt-4 leading-relaxed text-ink/85">
              The theme starts with a simple proposition: African researchers should be able to ask questions from within
              the societies they know, work with evidence relevant to those settings and contribute to the knowledge
              used to understand them.
            </p>
            <p className="mt-4 leading-relaxed text-ink/85">
              “From Inquiry to Impact” asks what can happen when a research question becomes credible work. Some research
              may lead to further study. Some may inform policy or institutional decisions. Some may find applications in
              technology or industry. The Symposium creates a place for those next conversations to begin.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="forest" labelledBy="in-view">
        <SectionHeading id="in-view" tone="light" title="Research in public view" />
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {researchInView.map((r) => (
            <li key={r.title} className="rounded-[var(--radius-card)] bg-lime p-7 text-forest-deep">
              <ThemeIcon theme={r.theme} />
              <h3 className="mt-5 text-xl font-medium tracking-tight">{r.title}</h3>
              <p className="mt-3 leading-relaxed text-forest-deep/85">{r.body}</p>
            </li>
          ))}
        </ul>
        <ArrowLink href="/research" className="mt-10 text-lime">
          Explore the research
        </ArrowLink>
      </Section>

      <Section labelledBy="programme">
        <SectionHeading id="programme" title="Programme" />
        <ol className="mt-10 divide-y divide-line overflow-hidden rounded-[var(--radius-card)] bg-white ring-1 ring-line">
          {programme.map((p) => (
            <li key={p.time} className="grid gap-2 p-6 md:grid-cols-[10rem_1fr] md:gap-8 md:p-8">
              <span className="text-sm font-semibold tracking-[0.12em] text-forest uppercase">{p.time}</span>
              <div>
                <h3 className="text-xl font-medium tracking-tight text-ink">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/75">{p.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {speakers.length > 0 && (
        <Section tone="white" labelledBy="speakers">
          <SectionHeading
            id="speakers"
            title="Speakers & Chairs"
            intro="Researchers, institutional leaders and practitioners will join the inaugural Fellows in conversations throughout the day."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {speakers.map((s) => (
              <li key={s.name} className="rounded-[var(--radius-card)] bg-cream p-6 ring-1 ring-line">
                <p className="text-xs font-semibold tracking-[0.12em] text-forest uppercase">{s.part}</p>
                <h3 className="mt-3 text-lg font-medium text-ink">{s.name}</h3>
                <p className="mt-1 text-ink/70">{s.role}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section tone="cream-deep" labelledBy="attend">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <Eyebrow className="mb-4">Who should attend</Eyebrow>
            <h2 id="attend" className="sr-only">
              Who should attend
            </h2>
            <p className="text-pretty text-xl leading-relaxed text-ink md:text-2xl">
              Researchers and academics, public institutions, industry and technical teams, funders and development
              organisations, students and emerging researchers.
            </p>
          </div>
          {!isPast && (
            <div className="rounded-[var(--radius-card)] bg-forest p-7 text-white md:p-9">
              <Eyebrow tone="lime">Register</Eyebrow>
              <p className="mt-4 text-xl font-medium">Registration is required.</p>
              <EventFacts className="mt-5 space-y-2 text-white/85" />
              <ButtonLink href={symposium.registerUrl} variant="lime" className="mt-7">
                Register to attend
              </ButtonLink>
              <p className="mt-4 text-sm text-white/70">Registration deadline: {symposium.registrationDeadline}.</p>
            </div>
          )}
        </div>
      </Section>

      <Section id="after" labelledBy="after-heading">
        <SectionHeading
          id="after-heading"
          eyebrow="After the Symposium"
          intro="After 30 September, this page becomes the permanent home for the event archive."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {archive.map((a) => (
            <li key={a.id} id={a.href ? undefined : a.id} className="rounded-[var(--radius-card)] bg-white p-6 ring-1 ring-line">
              <h3 className="text-lg font-medium tracking-tight text-forest">{a.label}</h3>
              {a.href ? (
                <ArrowLink href={a.href} className="mt-4 text-forest">
                  View
                </ArrowLink>
              ) : (
                <p className="mt-3 text-sm text-muted">Available after the event.</p>
              )}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
