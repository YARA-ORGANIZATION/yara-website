import Image from "next/image";
import { useId, type ReactNode } from "react";
import { Arcs, cx } from "./ui";

/** Figure with raised arms used for the Symposium 2026 identity. */
export function SymposiumFigure({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-label="YARA Research Symposium 2026 figure">
      <defs>
        <linearGradient id={`${id}-a`} x1="120" y1="20" x2="300" y2="300" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff5f8f" />
          <stop offset="45%" stopColor="#ff8a4c" />
          <stop offset="100%" stopColor="#ffd84d" />
        </linearGradient>
        <linearGradient id={`${id}-b`} x1="60" y1="380" x2="340" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff5f8f" />
          <stop offset="55%" stopColor="#b46cff" />
          <stop offset="100%" stopColor="#35b8f0" />
        </linearGradient>
        <linearGradient id={`${id}-c`} x1="340" y1="40" x2="60" y2="380" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff4f7a" />
          <stop offset="100%" stopColor="#35b8f0" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="74" r="44" fill={`url(#${id}-a)`} />
      <g strokeLinecap="round" strokeWidth="46" fill="none">
        <path d="M188 176 L86 64" stroke={`url(#${id}-b)`} />
        <path d="M212 176 L314 64" stroke={`url(#${id}-c)`} />
        <path d="M200 170 V238" stroke={`url(#${id}-a)`} strokeWidth="64" />
        <path d="M188 240 L112 356" stroke={`url(#${id}-c)`} />
        <path d="M212 240 L288 356" stroke={`url(#${id}-b)`} />
      </g>
    </svg>
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
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={cx("relative overflow-hidden rounded-[var(--radius-panel)] bg-cream-deep", className)}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}
