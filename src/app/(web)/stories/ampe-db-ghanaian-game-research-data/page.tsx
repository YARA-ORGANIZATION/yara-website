import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BrandPanel } from "@/components/Art";
import { ArrowLink, Prose } from "@/components/ui";
import { site } from "@/lib/site";

const title = "Ampe-DB: When a Ghanaian Game Becomes Research Data";
const standfirst =
  "Ruth Biney Senior is documenting the movement, rhythm and interaction of Ampe in a form that computers can study.";

export const metadata: Metadata = {
  title,
  description: standfirst,
  alternates: { canonical: "/stories/ampe-db-ghanaian-game-research-data" },
  openGraph: { type: "article", title, description: standfirst },
};

const layers = [
  { name: "RGB video", body: "captures visible movement" },
  { name: "Audio", body: "records claps, steps and other timing cues" },
  { name: "2D pose data", body: "converts the players’ bodies into skeletal keypoints" },
  { name: "Annotations", body: "describe movement segments, synchronisation and round outcomes" },
];

export default function AmpeStoryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: standfirst,
    about: "Ampe Movement Dataset (Ampe-DB)",
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/stories/ampe-db-ghanaian-game-research-data`,
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="bg-forest pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="container-site">
          <Link href="/stories" className="inline-flex items-center gap-2 text-sm text-white/75 hover:text-white">
            <ArrowLeft aria-hidden className="size-4" /> Stories
          </Link>
          <p className="mt-8 text-xs font-semibold tracking-[0.14em] text-lime uppercase">
            Spotlight · Ruth Biney Senior · STEM Research Fellowship
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-medium leading-[1.05] tracking-tight text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-pretty text-xl leading-relaxed text-white/85 md:text-2xl">{standfirst}</p>
        </div>
      </header>

      <div className="bg-cream py-14 md:py-20">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-20">
          <Prose className="max-w-none md:text-xl">
            <p>
              Two players face one another. They jump at the same time, clap, land and put one foot forward. A point can
              turn on something that happens in less than a second: which leg each player chooses, how quickly they
              respond, and whether one player anticipates the other correctly.
            </p>
            <p className="text-2xl font-medium text-forest">That is Ampe.</p>
            <p>
              Ampe is a Ghanaian jumping and clapping game widely associated today with girls and school playgrounds, but
              its social history is older and broader. Historical research records organised Ampe competitions involving
              women in the early twentieth-century Gold Coast. The game requires almost nothing to play: no ball, no
              board and no equipment. What it does require is timing, rhythm, observation and another person.
            </p>
            <p>
              For YARA Fellow Ruth Biney Senior, those characteristics make Ampe more than a cultural practice worth
              documenting. They make it an unusually interesting research problem.
            </p>

            <h2>What does a computer see when two people play Ampe?</h2>
            <p>
              Many movement datasets reduce a person to a sequence of positions: a body walking, running, dancing or
              performing a defined action. Ampe is different. The movement of one player only makes sense in relation to
              the movement of the other.
            </p>
            <p>
              Two people jump together. They respond to one another. Their actions have rhythm. They make split-second
              choices. The outcome of an exchange depends on what both players do.
            </p>
            <p>
              Ruth’s work asks whether that interaction can be represented computationally. The result is the Ampe
              Movement Dataset, or Ampe-DB.
            </p>
            <p>
              Ampe-DB records paired gameplay using several forms of information at once: RGB video captures visible
              movement; audio records claps, steps and other timing cues; 2D pose data converts the players’ bodies into
              skeletal keypoints; and annotations describe movement segments, synchronisation and round outcomes.
            </p>
            <p>
              Together, those layers make Ampe-DB a multimodal human-movement dataset. Researchers can begin to ask how
              closely two people are synchronised, whether a model can recognise stages of an exchange, whether movement
              early in a round can help predict what happens next, and how two people change their movements in response
              to each other.
            </p>

            <h2>Why Ampe matters as data</h2>
            <p>
              The data available to researchers affects the questions they are able to study. Ampe-DB starts from a
              Ghanaian cultural practice and makes it possible to study human movement, interaction, rhythm and machine
              perception from that starting point.
            </p>
            <p>
              Its usefulness does not have to end with Ampe. Methods for representing pose, timing and coordination are
              relevant to wider research in human movement. Those methods can contribute to work in rehabilitation and
              biomechanics, where researchers study movement and recovery, and in robotics, where machines increasingly
              need to observe human motion, anticipate what a person may do next and coordinate safely around people.
            </p>
            <p>
              Ampe-DB itself is not a medical or robotics dataset. Its contribution is more fundamental: it gives
              researchers another setting in which to study paired, anticipatory human movement, where one person’s action
              is continuously shaped by another person’s movement.
            </p>

            <h2>A cultural game becomes a research instrument</h2>
            <p>
              Documenting Ampe computationally also creates a record of a cultural practice in a form that can be
              examined, reused and extended by future researchers.
            </p>
            <p>
              Turning culture into data creates responsibilities. Ampe-DB is intended for research, education and approved
              non-commercial use. Its documentation prohibits surveillance, biometric identification and individual
              profiling, and access to the underlying data is managed through a usage agreement.
            </p>
            <p>
              Preserving a cultural practice as data should not mean stripping it of the people, history or context from
              which it came.
            </p>
            <p>
              For Ruth, Ampe-DB begins with a Ghanaian game. The research question around it is larger: what can we learn
              about human movement and interaction when the datasets used to study them begin to include more of the ways
              people actually move, play and relate to one another?
            </p>
          </Prose>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <BrandPanel tone="lime" className="aspect-square" label="Ampe-DB" />
            <div className="rounded-[var(--radius-card)] bg-white p-6 ring-1 ring-line">
              <h2 className="text-xs font-semibold tracking-[0.14em] text-forest uppercase">Inside Ampe-DB</h2>
              <ul className="mt-4 space-y-3">
                {layers.map((l) => (
                  <li key={l.name} className="leading-snug">
                    <span className="font-medium text-ink">{l.name}</span>{" "}
                    <span className="text-ink/70">{l.body}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <div className="bg-lime py-12">
        <div className="container-site flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <ArrowLink href="/stories/meet-the-inaugural-yara-fellows" className="text-lg text-forest-deep">
            Meet the Fellows
          </ArrowLink>
          <ArrowLink href="/programmes/stem-research-fellowship" className="text-lg text-forest-deep">
            Explore the STEM Research Fellowship
          </ArrowLink>
        </div>
      </div>
    </article>
  );
}
