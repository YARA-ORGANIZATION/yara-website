"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { themes } from "@/lib/research";

function useBlurReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("blurRevealActive");
          }
        });
      },
      { threshold: 0.15 },
    );

    el.querySelectorAll(".blurReveal").forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return ref;
}

const WORDS = [
  "YARA", "identifies", "promising", "researchers", "early", "and", "gives",
  "them", "rigorous", "training", "and", "sustained", "mentorship", "to",
  "produce", "evidence", "that", "can", "inform", "policy", "and",
  "strengthen", "institutions.",
];

const THEME_IMAGES = [
  { src: "/images/focus-area-ai.png", alt: "AI research" },
  { src: "/images/focus-area-climate.png", alt: "Climate research" },
  { src: "/images/focus-area-health.png", alt: "Public health research" },
];

const SCROLL_HEIGHT_VH = WORDS.length * 5 + 50;

export default function ScrollRevealText() {
  const stickyRef = useRef<HTMLDivElement>(null);
  const revealRef = useBlurReveal();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = stickyRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      setProgress(Math.max(0, Math.min(1, scrolled / scrollable)));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Words highlight from 0–80% of scroll, button at 85%+
  const textProgress = Math.min(progress / 0.8, 1);
  const activeIndex = Math.floor(textProgress * WORDS.length);
  const ctaVisible = progress > 0.85;

  return (
    <div className="relative">
      {/* Sticky text reveal — ref only on this part for progress tracking */}
      <div ref={stickyRef} style={{ height: `${SCROLL_HEIGHT_VH}vh` }}>
        <div className="sticky top-0 flex min-h-screen items-center justify-center">
          <div className="px-6 text-center md:px-12 lg:px-20" style={{ maxWidth: "56rem" }}>
            <p className="text-[clamp(2.25rem,5vw,3.75rem)] font-bold italic leading-[1.15] tracking-tight">
              {WORDS.map((word, i) => (
                <span
                  key={i}
                  className="inline transition-colors duration-300 ease-out"
                  style={{
                    color: i < activeIndex
                      ? "var(--color-ink)"
                      : "rgba(27, 27, 24, 0.15)",
                  }}
                >
                  {word}{" "}
                </span>
              ))}
            </p>

            <div
              className="mt-10 transition-all duration-700"
              style={{
                opacity: ctaVisible ? 1 : 0,
                filter: ctaVisible ? "blur(0px)" : "blur(12px)",
                transform: ctaVisible ? "translateY(0)" : "translateY(8px)",
              }}
            >
              <Link
                href="/about"
                className="inline-flex rounded-xl bg-lime px-6 py-3 text-base font-medium text-forest-deep transition-colors hover:bg-lime-soft"
              >
                Learn about YARA
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Long gradient — starts behind the sticky text, stretches far down */}
      <div
        ref={revealRef}
        style={{
          marginTop: "-80vh",
          background: "linear-gradient(to bottom, transparent 0%, rgba(142,200,212,0.08) 10%, rgba(142,200,212,0.2) 20%, rgba(142,200,212,0.4) 35%, rgba(142,200,212,0.65) 50%, #8ec8d4 65%, #6fb5c4 100%)",
        }}
      >
        <div style={{ height: "120vh" }} />

        {/* Our Key Areas of Focus */}
        <div className="pb-12 md:pb-16">
          <div className="container-site text-center mb-8 md:mb-16">
            <h2
              className="blurReveal text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-tight text-[#2D6175] md:text-[#D5F673] md:drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)]"
              style={{ animationDelay: "0ms" }}
            >
              Our Key Areas of Focus
            </h2>
            <p
              className="blurReveal mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink md:text-lg md:text-white/80"
              style={{ animationDelay: "150ms" }}
            >
              YARA concentrates its research and programmes in three areas where stronger local evidence and research capacity will shape consequential decisions across the continent.
            </p>
          </div>

          <div className="container-site">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0">
              {THEME_IMAGES.map((img, i) => (
                <div key={i}>
                  <div
                    className="blurReveal relative aspect-[4/3] overflow-hidden rounded-2xl"
                    style={{ animationDelay: `${300 + i * 150}ms` }}
                  >
                    <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
                  </div>
                  <div className="pt-4 pb-2 md:py-4 md:pr-8">
                    <h3
                      className="blurReveal text-xl font-bold tracking-tight text-forest-deep md:text-white"
                      style={{ animationDelay: `${400 + i * 150}ms` }}
                    >
                      {themes[i].name}
                    </h3>
                    <p
                      className="blurReveal mt-2 text-sm leading-relaxed text-ink md:text-white/75"
                      style={{ animationDelay: `${500 + i * 150}ms` }}
                    >
                      {themes[i].homeSummary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
