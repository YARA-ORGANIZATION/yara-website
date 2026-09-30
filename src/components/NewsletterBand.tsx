"use client";

import { Particles } from "@/components/Particles";
import { NewsletterForm } from "./Forms";

export default function NewsletterBand() {
  return (
    <section aria-labelledby="newsletter-heading" className="relative overflow-hidden bg-forest py-20 md:py-28">
      <Particles
        className="absolute inset-0 h-full w-full"
        quantity={80}
        color="#d9f46e"
        size={0.5}
        staticity={40}
        ease={60}
      />
      <div className="container-site relative text-center">
        <p className="mb-4 text-xs font-semibold tracking-[0.14em] text-lime uppercase">Newsletter</p>
        <h2 id="newsletter-heading" className="text-3xl font-medium tracking-tight text-lime md:text-4xl">
          Updates from YARA
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-white/80">
          Research, programmes, opportunities and news from the annual YARA Research Symposium.
        </p>
        <div className="mx-auto mt-8 flex justify-center">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
