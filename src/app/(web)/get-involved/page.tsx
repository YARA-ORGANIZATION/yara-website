import type { Metadata } from "next";
import { GraduationCap, Handshake, HeartHandshake, Users } from "lucide-react";
import { ArrowLink, PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "There are four main ways to take part in YARA’s work: apply, mentor, partner or donate.",
  alternates: { canonical: "/get-involved" },
};

const ways = [
  { title: "Apply", body: "Join a YARA research programme.", cta: "See opportunities", href: "/opportunities", Icon: GraduationCap },
  {
    title: "Mentor",
    body: "Work with an emerging researcher as they develop and pursue an original research question.",
    cta: "Mentor with YARA",
    href: "/get-involved/mentor",
    Icon: Users,
  },
  {
    title: "Partner",
    body: "Work with YARA on research, data, expertise, institutional access or opportunities to test and use research.",
    cta: "Partner with YARA",
    href: "/get-involved/partner",
    Icon: Handshake,
  },
  {
    title: "Donate",
    body: "Support YARA’s researchers, programmes and the costs of doing the work.",
    cta: "Donate",
    href: "/donate",
    Icon: HeartHandshake,
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        tone="lime"
        title="There are four main ways to take part in YARA’s work."
      />
      <Section labelledBy="ways">
        <h2 id="ways" className="sr-only">
          Ways to take part
        </h2>
        <ul className="grid gap-5 md:grid-cols-2">
          {ways.map(({ title, body, cta, href, Icon }) => (
            <li key={title} className="flex flex-col rounded-[var(--radius-card)] bg-white p-8 ring-1 ring-line md:p-10">
              <span aria-hidden className="flex size-12 items-center justify-center rounded-full bg-lime text-forest">
                <Icon className="size-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 text-3xl font-medium tracking-tight text-forest">{title}</h3>
              <p className="mt-3 flex-1 text-lg leading-relaxed text-ink/80">{body}</p>
              <ArrowLink href={href} className="mt-7 text-forest">
                {cta}
              </ArrowLink>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
