import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ButtonLink, Monogram, Prose } from "@/components/ui";
import { fellows, getTheme, initials } from "@/lib/research";

const title = "Meet the Inaugural YARA Fellows and the Research They Are Pursuing";
const description =
  "Meet YARA’s first Fellowship cohort and the original research they are beginning across artificial intelligence, climate and public health.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/stories/meet-the-inaugural-yara-fellows" },
  openGraph: { type: "article", title, description },
};

export default function FellowsStoryPage() {
  return (
    <article>
      <header className="bg-lime pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="container-site">
          <Link href="/stories" className="inline-flex items-center gap-2 text-sm text-forest-deep/75 hover:text-forest-deep">
            <ArrowLeft aria-hidden className="size-4" /> Stories
          </Link>
          <p className="mt-8 text-xs font-semibold tracking-[0.14em] text-forest-deep uppercase">
            Spotlight · STEM Research Fellowship
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-medium leading-[1.05] tracking-tight text-forest-deep md:text-6xl">
            {title}
          </h1>
          <ul aria-hidden className="mt-10 grid grid-cols-5 gap-2 sm:gap-3 md:grid-cols-10">
            {fellows.map((f) => (
              <li key={f.name}>
                <Monogram initials={initials(f.name)} theme={f.theme} className="aspect-square w-full rounded-xl text-lg md:text-xl" />
              </li>
            ))}
          </ul>
        </div>
      </header>

      <div className="bg-cream py-14 md:py-20">
        <div className="container-site">
          <Prose className="md:text-xl">
            <p>
              The Young Africans Research Academy was established to identify promising African researchers early and
              give them the training, mentorship and time required to pursue original research.
            </p>
            <p>
              The STEM Research Fellowship is YARA’s year-long programme for undergraduate researchers. Fellows build
              research skills through structured training, work with experienced mentors and develop an original project
              from question and proposal through analysis and presentation.
            </p>
            <p>
              The inaugural cohort brings together ten researchers working across artificial intelligence, climate and
              public health. Their projects begin with different problems, but the Fellowship gives each researcher the
              same basic task: define a question carefully, choose a sound method, work with evidence and develop the
              project through sustained research.
            </p>
            <p className="font-medium text-forest">Meet the inaugural YARA Fellows and the research they are pursuing.</p>
          </Prose>

          <ul className="mt-14 grid gap-5 md:grid-cols-2">
            {fellows.map((f) => (
              <li key={f.name} className="flex gap-5 rounded-[var(--radius-card)] bg-white p-6 ring-1 ring-line md:p-7">
                <Monogram initials={initials(f.name)} theme={f.theme} className="size-16 shrink-0 rounded-2xl text-xl md:size-20 md:text-2xl" />
                <div>
                  <p className="text-xs font-semibold tracking-[0.12em] text-forest uppercase">{getTheme(f.theme).name}</p>
                  <h2 className="mt-2 text-xl font-medium tracking-tight text-ink">{f.name}</h2>
                  <h3 className="mt-2 font-medium leading-snug text-forest">{f.projectTitle}</h3>
                  <p className="mt-3 leading-relaxed text-ink/75">{f.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section aria-labelledby="the-fellowship" className="bg-forest py-16 md:py-20">
        <div className="container-site grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <h2 id="the-fellowship" className="text-xs font-semibold tracking-[0.14em] text-lime uppercase">
            The Fellowship
          </h2>
          <div>
            <p className="text-xl leading-relaxed text-white/90">
              Over the course of the Fellowship, each researcher develops their project through training, mentorship,
              independent research and review. The programme is designed to give Fellows experience carrying an original
              question through a serious research process and to prepare them for further research, graduate study,
              publication and other routes their work may take.
            </p>
            <ButtonLink href="/programmes/stem-research-fellowship" variant="lime" className="mt-8">
              Explore the STEM Research Fellowship
            </ButtonLink>
          </div>
        </div>
      </section>
    </article>
  );
}
