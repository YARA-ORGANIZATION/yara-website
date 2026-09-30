"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Monogram } from "@/components/ui";
import { initials, themes, type Fellow } from "@/lib/research";

export default function FellowsGrid({ fellows }: { fellows: Fellow[] }) {
  const ref = useRef<HTMLUListElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <ul ref={ref} className="relative mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
      {fellows.map((f, i) => (
        <li
          key={f.name}
          className={i >= 8 ? "md:col-span-2 lg:col-span-1" : ""}
          style={{
            opacity: 0,
            filter: "blur(12px)",
            transform: "translateY(12px)",
            ...(visible
              ? {
                  animation: `blurRevealIn 700ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 100}ms both`,
                }
              : {}),
          }}
        >
          <Link
            href="/stories/meet-the-inaugural-yara-fellows"
            className="group relative block overflow-hidden aspect-[3/4]"
          >
            {f.image ? (
              <Image
                src={f.image}
                alt={f.name}
                fill
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, 50vw"
              />
            ) : (
              <Monogram
                initials={initials(f.name)}
                theme={f.theme}
                className="absolute inset-0 w-full h-full text-5xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            )}
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <span className="absolute bottom-0 left-0 right-0 p-4">
              <span className="block text-[0.9375rem] leading-snug font-medium text-white">
                {f.name}
              </span>
              <span className="mt-1 block text-xs tracking-[0.1em] uppercase text-lime">
                {themes.find((t) => t.key === f.theme)!.name}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
