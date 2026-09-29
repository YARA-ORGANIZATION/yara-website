"use client";

import Link from "next/link";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="bg-cream pt-36 pb-24 md:pt-48 md:pb-32">
      <div className="container-site">
        <h1 className="text-3xl font-medium tracking-tight text-forest md:text-5xl">Something went wrong.</h1>
        <p className="mt-4 max-w-xl text-lg text-ink/75">Please try again, or return to the homepage.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-full bg-forest px-5 py-2.5 font-medium text-lime hover:bg-forest-deep"
          >
            Try again
          </button>
          <Link href="/" className="rounded-full border border-forest px-5 py-2.5 font-medium text-forest hover:bg-forest/5">
            Return home
          </Link>
        </div>
      </div>
    </section>
  );
}
