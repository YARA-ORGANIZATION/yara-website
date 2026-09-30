"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { primaryNav } from "@/lib/site";
import { cx } from "./ui";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 2400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!open) setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (open && headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const compact = isMobile || scrolled;
  const showFullNav = !compact && !open;

  return (
    <header
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 md:px-6"
      onMouseEnter={() => compact && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-lime"
      >
        Skip to content
      </a>

      <div
        ref={headerRef}
        className="w-full"
        style={{
          maxWidth: compact ? "28rem" : "72rem",
          transition: "max-width 900ms cubic-bezier(0.22,1,0.36,1)",
          ...(compact
            ? {
                transform: `scale(${hovered ? 1.04 : 1})`,
                transition: hovered
                  ? "transform 200ms ease-out, max-width 900ms cubic-bezier(0.22,1,0.36,1)"
                  : "transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1), max-width 900ms cubic-bezier(0.22,1,0.36,1)",
              }
            : {}),
        }}
      >
        <div
          className="rounded-2xl backdrop-blur-xl overflow-hidden bg-cream/80 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.04)]"
        >
          {/* Top bar — same height always */}
          <div
            onClick={() => compact && !open && setOpen(true)}
            role={compact && !open ? "button" : undefined}
            tabIndex={compact && !open ? 0 : undefined}
            className={cx(
              "flex items-center justify-between px-4 py-2.5 md:px-5",
              compact && !open && "cursor-pointer",
            )}
          >
            {/* Logo — same size always */}
            <Link
              href="/"
              aria-label="YARA home"
              className="shrink-0"
              onClick={(e) => compact && e.stopPropagation()}
            >
              <Image
                src="/images/yara-logo-dark.png"
                alt="Young Africans Research Academy"
                width={816}
                height={388}
                priority
                className="h-9 w-auto md:h-10"
              />
            </Link>

            {/* Desktop nav links — only when full width, not scrolled */}
            {showFullNav && (
              <nav aria-label="Primary" className="hidden lg:block">
                <ul className="flex items-center gap-7">
                  {primaryNav.map((item, i) => (
                    <li
                      key={item.href}
                      style={
                        !mounted
                          ? {
                              animation: `navItemIn 500ms cubic-bezier(0.22,1,0.36,1) ${2400 + i * 60}ms both`,
                            }
                          : undefined
                      }
                    >
                      <Link
                        href={item.href}
                        aria-current={isActive(item.href) ? "page" : undefined}
                        className={cx(
                          "relative py-1.5 text-[0.875rem] transition-colors hover:text-forest",
                          isActive(item.href)
                            ? "text-forest after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-forest"
                            : "text-ink/80",
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {/* Right side */}
            <div className="flex items-center gap-2.5">
              {/* CTA — only when full nav showing */}
              {showFullNav && (
                <Link
                  href="/get-involved"
                  onClick={(e) => e.stopPropagation()}
                  className="hidden sm:inline-flex rounded-xl bg-forest px-4 py-2 text-[0.875rem] font-medium text-lime transition-colors hover:bg-forest-deep"
                  style={
                    !mounted
                      ? {
                          animation: `navItemIn 500ms cubic-bezier(0.22,1,0.36,1) ${2400 + primaryNav.length * 60}ms both`,
                        }
                      : undefined
                  }
                >
                  Get involved
                </Link>
              )}

              {/* Compact / open: stripes morph to X */}
              {(compact || open) && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpen((v) => !v);
                  }}
                  aria-expanded={open}
                  aria-controls="nav-menu"
                  className="flex items-center gap-2.5 text-forest cursor-pointer"
                >
                  {!open && (
                    <span className="text-sm font-medium">Menu</span>
                  )}
                  <div className="relative flex size-6 flex-col items-center justify-center gap-[4px]">
                    <span
                      className={cx(
                        "block h-[2px] w-[18px] rounded-full bg-current transition-all duration-300 origin-center",
                        open ? "absolute translate-y-0 rotate-45" : "",
                      )}
                    />
                    <span
                      className={cx(
                        "block h-[2px] w-[18px] rounded-full bg-current transition-all duration-300",
                        open ? "opacity-0 w-0" : "",
                      )}
                    />
                    <span
                      className={cx(
                        "block h-[2px] w-[18px] rounded-full bg-current transition-all duration-300 origin-center",
                        open ? "absolute translate-y-0 -rotate-45" : "",
                      )}
                    />
                  </div>
                  <span className="sr-only">
                    {open ? "Close menu" : "Open menu"}
                  </span>
                </button>
              )}

              {/* Mobile hamburger when full nav (not scrolled, not open) */}
              {showFullNav && (
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  aria-expanded={false}
                  aria-controls="nav-menu"
                  className="inline-flex size-10 items-center justify-center rounded-full text-forest hover:bg-forest/10 lg:hidden"
                >
                  <div className="flex flex-col justify-center gap-[4px]">
                    <span className="block h-[2px] w-[18px] rounded-full bg-current" />
                    <span className="block h-[2px] w-[18px] rounded-full bg-current" />
                    <span className="block h-[2px] w-[18px] rounded-full bg-current" />
                  </div>
                  <span className="sr-only">Open menu</span>
                </button>
              )}
            </div>
          </div>

          {/* Menu — drops from bottom at same width */}
          <div
            id="nav-menu"
            style={{
              maxHeight: open ? "70vh" : "0",
              opacity: open ? 1 : 0,
              transition: open
                ? "max-height 600ms cubic-bezier(0.34, 1.3, 0.64, 1), opacity 400ms ease-out"
                : "max-height 400ms cubic-bezier(0.22, 1, 0.36, 1), opacity 250ms ease-in",
            }}
            className="overflow-hidden"
          >
            <div className="border-t border-line/30 px-4 py-5 md:px-5">
              <p className="mb-2 text-[0.6875rem] font-medium text-muted uppercase tracking-widest">
                Menu
              </p>
              <nav aria-label="Menu">
                <ul>
                  {primaryNav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={isActive(item.href) ? "page" : undefined}
                        onMouseEnter={() => setHoveredItem(item.href)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className={cx(
                          "block py-1 text-2xl font-medium tracking-tight transition-all duration-300",
                          hoveredItem && hoveredItem !== item.href
                            ? "text-ink/45 blur-[3px]"
                            : "text-ink blur-0",
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/get-involved"
                      onMouseEnter={() => setHoveredItem("get-involved")}
                      onMouseLeave={() => setHoveredItem(null)}
                      className={cx(
                        "block py-1 text-2xl font-medium tracking-tight transition-all duration-300",
                        hoveredItem && hoveredItem !== "get-involved"
                          ? "text-ink/45 blur-[3px]"
                          : "text-ink blur-0",
                      )}
                    >
                      Get involved
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes navItemIn {
          0%   { opacity: 0; filter: blur(8px); transform: translateY(4px); }
          100% { opacity: 1; filter: blur(0px); transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}
