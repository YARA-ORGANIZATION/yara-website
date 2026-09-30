"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

export default function IntroAnimation() {
  const pathname = usePathname();
  const [playing, setPlaying] = useState(true);
  const [key, setKey] = useState(0);

  const play = useCallback(() => {
    setKey((k) => k + 1);
    setPlaying(true);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => setPlaying(false), 2400);
    return () => clearTimeout(t);
  }, [playing, key]);

  useEffect(() => {
    play();
  }, [pathname, play]);

  if (!playing) return null;

  return (
    <>
      <style>{`
        .intro-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: #D5F673;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          opacity: 1;
          animation: overlayOut 600ms ease-out 1800ms forwards;
        }

        @keyframes overlayOut {
          0%   { opacity: 1; }
          100% { opacity: 0; }
        }

        .intro-logo {
          width: min(70vw, 70vh);
          height: auto;
          opacity: 0;
          animation:
            logoIn 500ms ease-out 400ms forwards,
            logoZoom 1400ms cubic-bezier(0.25, 1, 0.5, 1) 900ms forwards,
            logoBlur 500ms ease-out 1600ms forwards;
        }

        @keyframes logoIn {
          0%   { opacity: 0; transform: scale(0.92); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes logoZoom {
          0%   { transform: scale(1); filter: blur(0px); }
          100% { transform: scale(3); filter: blur(16px); }
        }

        @keyframes logoBlur {
          0%   { opacity: 1; }
          100% { opacity: 0; }
        }

      `}</style>

      <div className="intro-overlay" key={key} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/vectors/init-page.svg"
          alt=""
          className="intro-logo"
          aria-hidden="true"
        />
      </div>
    </>
  );
}
