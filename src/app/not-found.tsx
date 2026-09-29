import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Arcs, ButtonLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
    <SiteHeader />
    <main id="main">
    <section className="relative overflow-hidden bg-cream pt-36 pb-24 md:pt-48 md:pb-32">
      <Arcs className="absolute -top-10 -right-10 h-80 w-auto text-lime md:h-[28rem]" />
      <div className="container-site relative">
        <p className="text-8xl font-medium tracking-tight text-forest md:text-9xl">404</p>
        <h1 className="mt-6 text-3xl font-medium tracking-tight text-ink md:text-5xl">We couldn’t find that page.</h1>
        <p className="mt-4 max-w-xl text-lg text-ink/75">The page may have moved or the address may be incorrect.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/">Return home</ButtonLink>
          <ButtonLink href="/research" variant="outline" className="text-forest">
            Explore research
          </ButtonLink>
        </div>
      </div>
    </section>
    </main>
    <SiteFooter />
    </>
  );
}
