import { NewsletterForm } from "./Forms";

export default function NewsletterBand() {
  return (
    <section aria-labelledby="newsletter-heading" className="bg-forest py-16 md:py-20">
      <div className="container-site flex flex-col items-center text-center">
        <p className="mb-4 text-xs font-semibold tracking-[0.14em] text-lime uppercase">Newsletter</p>
        <h2 id="newsletter-heading" className="text-3xl font-medium tracking-tight text-white md:text-4xl">
          Updates from YARA
        </h2>
        <p className="mt-4 max-w-xl text-lg text-white/80">
          Research, programmes, opportunities and news from the annual YARA Research Symposium.
        </p>
        <div className="mt-8 flex w-full justify-center text-left">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
