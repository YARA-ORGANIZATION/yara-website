"use client";

import { useState } from "react";
import { BlurRevealItem } from "@/components/BlurReveal";
import StoryCardHome from "@/components/StoryCardHome";

interface StoryCard {
  title: string;
  description: string;
  href: string;
  image?: string;
  cta?: string;
  category: string;
}

const categories = [
  { id: "all", label: "All" },
  { id: "spotlight", label: "Spotlights" },
  { id: "insight", label: "Insights" },
  { id: "press", label: "In the Press" },
];

export default function StoriesCategoryFilter({ cards }: { cards: StoryCard[] }) {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? cards : cards.filter((c) => c.category === active);

  return (
    <>
      {/* Filter chips */}
      <nav aria-label="Story categories" className="mb-10 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`primarymedium rounded-full px-5 py-2.5 text-sm transition-colors duration-200 ${
              active === cat.id
                ? "bg-[#222222] text-white"
                : "bg-[#F5F5F5] text-neutral-600 hover:bg-[#E8E8E8]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </nav>

      {/* Card grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((card, i) => (
            <BlurRevealItem key={card.href} delay={i * 0.05} className="flex">
              <StoryCardHome
                title={card.title}
                description={card.description}
                href={card.href}
                image={card.image}
                cta={card.cta}
              />
            </BlurRevealItem>
          ))}
        </div>
      ) : (
        <p className="primarynormal py-12 text-center text-lg text-neutral-400">
          No stories in this category yet. Check back soon.
        </p>
      )}
    </>
  );
}
