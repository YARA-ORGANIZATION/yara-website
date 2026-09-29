import Image from "next/image";
import type { ReactNode } from "react";
import { Arcs, cx } from "./ui";

/** The Symposium 2026 figure, captured from the Yara Website Figma file. */
export function SymposiumFigure({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src="/images/brand/symposium-figure.png"
      alt="YARA Research Symposium 2026 figure"
      width={1218}
      height={1310}
      sizes="(min-width: 768px) 420px, 80vw"
      priority={priority}
      className={cx("h-auto", className)}
    />
  );
}

/**
 * Branded image panel. Used where final photography is still to be supplied
 * (copy master: "final image files" remain an implementation item).
 */
export function BrandPanel({
  tone = "lime",
  className,
  label,
  children,
}: {
  tone?: "lime" | "forest" | "cream";
  className?: string;
  label?: string;
  children?: ReactNode;
}) {
  const tones = {
    lime: "bg-lime text-forest",
    forest: "bg-forest text-lime",
    cream: "bg-cream-deep text-forest",
  };
  return (
    <div
      role={label ? "img" : undefined}
      aria-label={label}
      className={cx("relative overflow-hidden rounded-[var(--radius-panel)]", tones[tone], className)}
    >
      <Arcs className="absolute -right-6 -top-6 h-3/4 w-auto opacity-25" />
      <Arcs className="absolute -bottom-10 -left-10 h-1/2 w-auto rotate-180 opacity-10" />
      {children && <div className="relative flex h-full flex-col justify-end p-6 md:p-8">{children}</div>}
    </div>
  );
}

/** Photograph in a rounded brand frame. Photos come from the YARA DESIGN Figma board. */
export function Photo({
  src,
  alt,
  className,
  sizes = "(min-width: 1024px) 40vw, 100vw",
  priority,
  rounded = true,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  rounded?: boolean;
}) {
  return (
    <div className={cx("relative overflow-hidden bg-cream-deep", rounded && "rounded-[var(--radius-panel)]", className)}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}

/** Four-petal pinwheel mark used for the AI, Ethics and Climate Governance Fellowship. */
export function FellowshipMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className}>
      {[0, 90, 180, 270].map((r) => (
        <path
          key={r}
          transform={`rotate(${r} 50 50)`}
          d="M50 50C50 30 60 14 78 10c4 18-6 34-28 40z"
          fill="currentColor"
        />
      ))}
    </svg>
  );
}
