import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow, Monogram, PageHero, Section } from "@/components/ui";
import { initials } from "@/lib/research";

export const metadata: Metadata = {
  title: "Team",
  description: "YARA’s team leads the Academy’s research, programmes and institutional development.",
  alternates: { canonical: "/about/team" },
};

type Person = { name: string; role: string; photo?: string };

const leadership: Person[] = [
  { name: "Isaac Aboah", role: "Co-founder & Executive Director", photo: "/images/team/isaac-aboah.jpg" },
  { name: "Dr. Isaac Baiden", role: "Co-founder & Director of Research", photo: "/images/team/isaac-baiden.jpg" },
];

const programmeTeam: Person[] = [
  { name: "Peter Ayea", role: "Programmes Associate", photo: "/images/team/peter-ayea.jpg" },
  { name: "Ruth Biney Junior", role: "Programmes Associate" },
];

function PersonCard({ person, large }: { person: Person; large?: boolean }) {
  return (
    <li className="overflow-hidden rounded-[var(--radius-card)] bg-white ring-1 ring-line">
      <div className={large ? "relative aspect-[4/5]" : "relative aspect-square"}>
        {person.photo ? (
          <Image
            src={person.photo}
            alt={`Portrait of ${person.name}`}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <Monogram
            initials={initials(person.name)}
            theme="ai"
            className="absolute inset-0 text-6xl"
          />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium tracking-tight text-forest">{person.name}</h3>
        <p className="mt-1 text-ink/70">{person.role}</p>
      </div>
    </li>
  );
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="The people building YARA"
        lede={<p>YARA’s team leads the Academy’s research, programmes and institutional development.</p>}
      />
      <Section className="pt-0 md:pt-0" labelledBy="leadership">
        <h2 id="leadership">
          <Eyebrow>Leadership</Eyebrow>
        </h2>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:max-w-4xl">
          {leadership.map((p) => (
            <PersonCard key={p.name} person={p} large />
          ))}
        </ul>
      </Section>
      <Section tone="lime" labelledBy="programme-team">
        <h2 id="programme-team">
          <Eyebrow className="text-forest-deep">Programme team</Eyebrow>
        </h2>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programmeTeam.map((p) => (
            <PersonCard key={p.name} person={p} />
          ))}
        </ul>
      </Section>
    </>
  );
}
