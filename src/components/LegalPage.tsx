import type { ReactNode } from "react";
import { PageHero, Prose } from "./ui";

export default function LegalPage({
  title,
  lede,
  aside,
  children,
}: {
  title: string;
  lede?: ReactNode;
  aside?: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero tone="lime" title={title} lede={lede} />
      <section className="bg-cream py-14 md:py-20">
        <div className={aside ? "container-site grid gap-6 lg:grid-cols-[1.6fr_1fr] lg:items-start" : "container-site"}>
          <div className="rounded-[var(--radius-panel)] bg-white p-7 ring-1 ring-line md:p-12">
            <Prose className="md:text-lg [&_a]:font-medium [&_a]:text-forest [&_a]:underline [&_a]:underline-offset-4">
              {children}
            </Prose>
          </div>
          {aside}
        </div>
      </section>
    </>
  );
}
