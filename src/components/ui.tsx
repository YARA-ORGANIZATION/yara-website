import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Cpu, CloudSun, HeartPulse } from "lucide-react";
import type { ThemeKey } from "@/lib/research";

export function cx(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const isExternal = (href: string) => /^(https?:|mailto:)/.test(href);

type LinkishProps = { href: string; children: ReactNode; className?: string };

function Linkish({ href, children, className, ...rest }: LinkishProps & Omit<ComponentProps<"a">, "href">) {
  if (isExternal(href)) {
    const newTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={className}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}

const buttonStyles = {
  primary: "bg-forest text-lime hover:bg-forest-deep",
  dark: "bg-ink text-white hover:bg-black",
  lime: "bg-lime text-forest-deep hover:bg-[#cdeb57]",
  outline: "border border-current text-current hover:bg-ink/5",
  "outline-light": "border border-white/60 text-white hover:bg-white/10",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  arrow = true,
}: LinkishProps & { variant?: keyof typeof buttonStyles; arrow?: boolean }) {
  const external = href.startsWith("http");
  const Icon = external ? ArrowUpRight : ArrowRight;
  return (
    <Linkish
      href={href}
      className={cx(
        "group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[0.9375rem] font-medium transition-colors",
        buttonStyles[variant],
        className,
      )}
    >
      {children}
      {arrow && (
        <Icon aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
      )}
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </Linkish>
  );
}

export function ArrowLink({ href, children, className }: LinkishProps) {
  const external = href.startsWith("http");
  return (
    <Linkish
      href={href}
      className={cx(
        "group inline-flex items-center gap-1.5 font-medium underline decoration-current/30 underline-offset-4 transition-colors hover:decoration-current",
        className,
      )}
    >
      {children}
      <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </Linkish>
  );
}

export function Eyebrow({
  children,
  tone = "forest",
  className,
}: {
  children: ReactNode;
  tone?: "forest" | "lime" | "pill" | "pill-dark";
  className?: string;
}) {
  const tones = {
    forest: "text-forest",
    lime: "text-lime",
    pill: "bg-lime text-forest-deep px-3 py-1 rounded-full",
    "pill-dark": "bg-forest text-lime px-3 py-1 rounded-full",
  };
  return (
    <span
      className={cx(
        "inline-block text-xs font-semibold tracking-[0.14em] uppercase",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Section({
  children,
  tone = "cream",
  className,
  id,
  labelledBy,
}: {
  children: ReactNode;
  tone?: "cream" | "white" | "forest" | "lime" | "cream-deep";
  className?: string;
  id?: string;
  labelledBy?: string;
}) {
  const tones = {
    cream: "bg-cream text-ink",
    "cream-deep": "bg-cream-deep text-ink",
    white: "bg-white text-ink",
    forest: "bg-forest text-white",
    lime: "bg-lime text-forest-deep",
  };
  return (
    <section id={id} aria-labelledby={labelledBy} className={cx("py-16 md:py-24", tones[tone], className)}>
      <div className="container-site">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  align = "left",
  tone = "default",
  className,
}: {
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  id?: string;
  align?: "left" | "center";
  tone?: "default" | "light";
  className?: string;
}) {
  return (
    <div className={cx("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <div className="mb-4" id={title ? undefined : id}>
          <Eyebrow tone={tone === "light" ? "lime" : "forest"}>{eyebrow}</Eyebrow>
        </div>
      )}
      {title && (
        <h2
          id={id}
          className={cx(
            "text-balance text-3xl font-medium leading-[1.1] tracking-tight md:text-5xl",
            tone === "light" ? "text-white" : "text-forest",
          )}
        >
          {title}
        </h2>
      )}
      {intro && (
        <div
          className={cx(
            "mt-5 text-pretty text-lg leading-relaxed",
            tone === "light" ? "text-white/80" : "text-muted",
          )}
        >
          {intro}
        </div>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
  tone = "cream",
  aside,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
  tone?: "cream" | "lime" | "forest";
  aside?: ReactNode;
}) {
  const tones = {
    cream: { wrap: "bg-cream", h: "text-forest", p: "text-ink/80", eb: "pill" as const },
    lime: { wrap: "bg-lime", h: "text-forest-deep", p: "text-forest-deep/85", eb: "pill-dark" as const },
    forest: { wrap: "bg-forest", h: "text-lime", p: "text-white/85", eb: "pill" as const },
  }[tone];
  return (
    <header className={cx("relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24", tones.wrap)}>
      <div className="container-site relative">
        <div className={cx("grid gap-10", Boolean(aside) && "lg:grid-cols-[1.4fr_1fr] lg:items-end")}>
          <div className="max-w-4xl">
            {eyebrow && (
              <div className="mb-6">
                <Eyebrow tone={tones.eb}>{eyebrow}</Eyebrow>
              </div>
            )}
            <h1
              className={cx(
                "text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl",
                tones.h,
              )}
            >
              {title}
            </h1>
            {lede && (
              <div className={cx("mt-6 max-w-2xl space-y-4 text-pretty text-lg leading-relaxed md:text-xl", tones.p)}>
                {lede}
              </div>
            )}
            {children && <div className="mt-8 flex flex-wrap items-center gap-3">{children}</div>}
          </div>
          {aside}
        </div>
      </div>
    </header>
  );
}

export function Card({
  children,
  className,
  tone = "white",
}: {
  children: ReactNode;
  className?: string;
  tone?: "white" | "lime" | "forest" | "cream";
}) {
  const tones = {
    white: "bg-white text-ink ring-1 ring-line",
    lime: "bg-lime text-forest-deep",
    forest: "bg-forest text-white",
    cream: "bg-cream text-ink ring-1 ring-line",
  };
  return <div className={cx("rounded-[var(--radius-card)] p-6 md:p-8", tones[tone], className)}>{children}</div>;
}

const themeIcons: Record<ThemeKey, typeof Cpu> = {
  ai: Cpu,
  climate: CloudSun,
  health: HeartPulse,
};

const iconTones = {
  white: "bg-white text-forest",
  lime: "bg-lime text-forest",
  forest: "bg-forest text-lime",
};

export function ThemeIcon({
  theme,
  tone = "white",
  className,
}: {
  theme: ThemeKey;
  tone?: keyof typeof iconTones;
  className?: string;
}) {
  const Icon = themeIcons[theme];
  return (
    <span
      aria-hidden
      className={cx("inline-flex size-11 items-center justify-center rounded-full", iconTones[tone], className)}
    >
      <Icon className="size-5" strokeWidth={1.75} />
    </span>
  );
}

const avatarTones: Record<ThemeKey, string> = {
  ai: "bg-lime text-forest-deep",
  climate: "bg-forest text-lime",
  health: "bg-cream-deep text-forest",
};

export function Monogram({
  initials,
  theme,
  className,
}: {
  initials: string;
  theme: ThemeKey;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cx(
        "relative inline-flex items-center justify-center overflow-hidden font-medium tracking-tight",
        avatarTones[theme],
        className,
      )}
    >
      <Arcs className="absolute -right-[20%] -top-[20%] h-[80%] w-auto opacity-15" />
      <span className="relative">{initials}</span>
    </span>
  );
}

/** The three arcs from the YARA mark, used as a decorative motif. */
export function Arcs({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden className={className}>
      <path d="M0 0a100 100 0 0 0 100 100v-16A84 84 0 0 1 16 0z" fill="currentColor" />
      <path d="M26 0a74 74 0 0 0 74 74V58A58 58 0 0 1 42 0z" fill="currentColor" />
      <path d="M52 0a48 48 0 0 0 48 48V32A32 32 0 0 1 68 0z" fill="currentColor" />
    </svg>
  );
}

export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx("prose-yara max-w-2xl text-lg", className)}>{children}</div>;
}
