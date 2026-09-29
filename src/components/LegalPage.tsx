import type { ReactNode } from "react";
import { PageHero, Prose } from "./ui";

export default function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <PageHero title={title} />
      <section className="bg-cream pb-20 md:pb-28">
        <div className="container-site">
          <Prose className="md:text-xl [&_a]:font-medium [&_a]:text-forest [&_a]:underline [&_a]:underline-offset-4">
            {children}
          </Prose>
        </div>
      </section>
    </>
  );
}
