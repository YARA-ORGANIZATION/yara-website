import type { Metadata } from "next";
import Image from "next/image";
import { Monogram, PageHero, Section, SectionHeading } from "@/components/ui";
import { initials } from "@/lib/research";

export const metadata: Metadata = {
  title: "Team",
  description: "YARA’s team leads the Academy’s research, programmes and institutional development.",
  alternates: { canonical: "/about/team" },
};

type Person = { name: string; role: string; badge?: string; photo?: string };

const leadership: Person[] = [
  {
    name: "Isaac Aboah",
    role: "Co-founder & Executive Director",
    badge: "Co-founder",
    photo: "/images/team/isaac-aboah.jpg",
  },
  {
    name: "Dr. Isaac Baiden",
    role: "Co-founder & Director of Research",
    badge: "Co-founder",
    photo: "/images/team/isaac-baiden.jpg",
  },
];

const programmeTeam: Person[] = [
  { name: "Peter Ayea", role: "Programmes Associate", photo: "/images/team/peter-ayea.jpg" },
  { name: "Ruth Biney Junior", role: "Programmes Associate" },
];

function Portrait({
  person,
  className,
  sizes,
  small,
}: {
  person: Person;
  className: string;
  sizes: string;
  small?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {person.photo ? (
        <Image
          src={person.photo}
          alt={`Portrait of ${person.name}`}
          fill
          sizes={sizes}
          className={small ? "object-cover" : "object-cover object-top"}
        />
      ) : (
        <div className="absolute inset-0 flex">
          <Monogram initials={initials(person.name)} theme="ai" className="size-full text-3xl" />
        </div>
      )}
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="The people building YARA"
        lede={<p>YARA’s team leads the Academy’s research, programmes and institutional development.</p>}
      />

      <Section className="pt-0 md:pt-0" labelledBy="leadership">
        <SectionHeading id="leadership" eyebrow="Leadership" title="Co-Founders & Directors" className="mb-10" />
        <ul className="grid gap-6 md:grid-cols-2">
          {leadership.map((p) => (
            <li key={p.name} className="overflow-hidden rounded-[var(--radius-panel)] bg-white ring-1 ring-line">
              <Portrait person={p} className="aspect-[4/3]" sizes="(min-width: 768px) 50vw, 100vw" />
              <div className="flex items-start justify-between gap-4 p-6 md:p-8">
                <div>
                  <h3 className="text-2xl font-medium tracking-tight text-forest">{p.name}</h3>
                  <p className="mt-1 text-ink/70">{p.role}</p>
                </div>
                {p.badge && (
                  <span className="shrink-0 rounded-full bg-lime px-3 py-1 text-xs font-semibold tracking-[0.08em] text-forest-deep uppercase">
                    {p.badge}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="lime" labelledBy="programme-team">
        <SectionHeading
          id="programme-team"
          eyebrow="Academy coordination"
          title="Programme Team"
          align="center"
          className="mb-10 [&_h2]:text-forest-deep"
        />
        <ul className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
          {programmeTeam.map((p) => (
            <li key={p.name} className="flex items-center gap-5 rounded-[var(--radius-card)] bg-cream p-5">
              <Portrait person={p} className="size-24 shrink-0 rounded-2xl" sizes="96px" small />
              <div>
                <h3 className="text-xl font-medium tracking-tight text-forest">{p.name}</h3>
                <p className="mt-1 text-ink/70">{p.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
