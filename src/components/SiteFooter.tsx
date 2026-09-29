import Image from "next/image";
import Link from "next/link";
import { footerNav, site, socials } from "@/lib/site";

function FooterCol({ title, links }: { title: string; links: { label: string; href: string; external?: boolean }[] }) {
  return (
    <div>
      <h2 className="mb-4 text-xs font-semibold tracking-[0.14em] text-lime uppercase">{title}</h2>
      <ul className="space-y-2.5">
        {links.map((l) =>
          l.external ? (
            <li key={l.href}>
              <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-white/75 transition-colors hover:text-white">
                {l.label}
              </a>
            </li>
          ) : (
            <li key={l.href}>
              <Link href={l.href} className="text-white/75 transition-colors hover:text-white">
                {l.label}
              </Link>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer>
      <div className="bg-charcoal py-16 text-white">
        <div className="container-site">
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <Link href="/" aria-label="YARA home" className="inline-block">
                <Image
                  src="/images/yara-logo-light.png"
                  alt="Young Africans Research Academy"
                  width={816}
                  height={387}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="mt-6 max-w-xs text-white/70">
                YARA
                <br />
                {site.name}
                <br />
                {site.location}
              </p>
              <a href={`mailto:${site.email}`} className="mt-4 inline-block text-lime hover:underline">
                {site.email}
              </a>
            </div>
            <FooterCol title="Explore" links={footerNav.explore} />
            <FooterCol title="Organisation" links={footerNav.organisation} />
            <FooterCol title="Follow" links={socials.map((s) => ({ ...s, external: true }))} />
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Young Africans Research Academy</p>
            <ul className="flex gap-5">
              {footerNav.legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
