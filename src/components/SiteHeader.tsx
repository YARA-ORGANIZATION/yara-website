"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { primaryNav } from "@/lib/site";
import { cx } from "./ui";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-50 bg-cream transition-shadow duration-300",
        (scrolled || open) && "shadow-[0_1px_0_var(--color-line)]",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-lime"
      >
        Skip to content
      </a>
      <div className="container-site flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label="YARA home" className="shrink-0">
          <Image
            src="/images/yara-logo-dark.png"
            alt="Young Africans Research Academy"
            width={816}
            height={388}
            priority
            className="h-10 w-auto md:h-11"
          />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cx(
                    "relative py-2 text-[0.9375rem] transition-colors hover:text-forest",
                    isActive(item.href)
                      ? "text-forest after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-forest"
                      : "text-ink/85",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/get-involved"
            className="hidden rounded-full bg-forest px-5 py-2.5 text-[0.9375rem] font-medium text-lime transition-colors hover:bg-forest-deep sm:inline-flex"
          >
            Get involved
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex size-11 items-center justify-center rounded-full text-forest hover:bg-forest/10 lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="h-[calc(100dvh-5rem)] overflow-y-auto border-t border-line bg-cream lg:hidden"
      >
        <nav aria-label="Mobile" className="container-site py-8">
          <ul className="space-y-1">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cx(
                    "block border-b border-line py-4 text-2xl tracking-tight",
                    isActive(item.href) ? "text-forest" : "text-ink",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/get-involved"
            className="mt-8 inline-flex rounded-full bg-forest px-6 py-3 text-lg font-medium text-lime"
          >
            Get involved
          </Link>
        </nav>
      </div>
    </header>
  );
}
