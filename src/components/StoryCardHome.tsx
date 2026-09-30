"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface StoryCardHomeProps {
  title: string;
  description: string;
  href: string;
  image?: string;
  cta?: string;
}

export default function StoryCardHome({ title, description, href, image, cta = "Read the story" }: StoryCardHomeProps) {
  const [hovered, setHovered] = useState(false);
  const external = href.startsWith("http");

  const inner = (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex h-full flex-1 cursor-pointer flex-col overflow-hidden rounded-2xl transition-all duration-300"
      style={{
        backgroundColor: hovered ? "#222222" : "#FFF9EE",
      }}
    >
      {/* Images hidden for now */}

      <div className="flex flex-1 flex-col justify-between p-8 min-h-[360px] md:min-h-[420px]">
        <div className="flex flex-col gap-3">
          <h3
            className="primarymedium text-2xl leading-tight line-clamp-3 transition-colors duration-300"
            style={{ color: hovered ? "#ffffff" : "#000000" }}
          >
            {title}
          </h3>
          <p
            className="primarynormal text-sm leading-relaxed line-clamp-3 transition-colors duration-300"
            style={{ color: hovered ? "rgba(255,255,255,0.7)" : "rgb(115,115,115)" }}
          >
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-row items-center justify-between">
          <div
            className="flex flex-row items-center gap-2 rounded-full px-4 py-2 transition-all duration-300"
            style={{
              opacity: hovered ? 1 : 0,
              backgroundColor: hovered ? "#D5F673" : "transparent",
            }}
          >
            <p className="text-sm text-black">{cta}</p>
          </div>
          <div
            className="flex size-10 flex-none items-center justify-center rounded-full transition-all duration-300"
            style={{
              backgroundColor: hovered ? "#D5F673" : "#222222",
              transform: hovered ? "rotate(90deg)" : "rotate(0deg)",
            }}
          >
            <ArrowUpRight
              className="size-5 transition-colors duration-300"
              style={{ color: hovered ? "#000000" : "#ffffff" }}
            />
          </div>
        </div>
      </div>
    </div>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="flex h-full">
        {inner}
      </a>
    );
  }

  return <Link href={href} className="flex h-full">{inner}</Link>;
}
