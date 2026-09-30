"use client";

import { TextAnimate } from "@/components/TextAnimate";

export default function HeroText() {
  return (
    <>
      <h1
        id="hero-title"
        className="primarymedium text-[1.75rem] leading-[1.1] tracking-[-0.02em] text-forest sm:text-4xl md:text-5xl lg:text-[3.5rem]"
      >
        <TextAnimate
          as="span"
          by="word"
          animation="fadeIn"
          delay={2.5}
          duration={0.6}
          startOnView={false}
          once
        >
          Building the research talent Africa needs for an
        </TextAnimate>{" "}
        <em className="primarynormal text-ink italic">
          <TextAnimate
            as="span"
            by="word"
            animation="fadeIn"
            delay={3.0}
            duration={0.4}
            startOnView={false}
            once
          >
            evidence-driven future
          </TextAnimate>
        </em>
      </h1>
      <p
        className="primarynormal mt-6 max-w-lg text-pretty text-base leading-relaxed text-ink md:text-lg"
        style={{
          opacity: 0,
          filter: "blur(12px)",
          transform: "translateY(12px)",
          animation: "blurRevealIn 700ms cubic-bezier(0.22, 1, 0.36, 1) 3.5s both",
        }}
      >
        Africa&apos;s future will be shaped by decisions about emerging technologies, a changing climate and
        persistent health challenges. Those decisions need rigorous research and evidence grounded in African
        realities.
      </p>
    </>
  );
}
