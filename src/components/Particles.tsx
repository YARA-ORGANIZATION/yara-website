"use client";

import React, { useEffect, useRef, useState, type ComponentPropsWithoutRef } from "react";
import { cx } from "@/components/ui";

interface ParticlesProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  size?: number;
  refresh?: boolean;
  color?: string;
  vx?: number;
  vy?: number;
}

function hexToRgb(hex: string): number[] {
  hex = hex.replace("#", "");
  if (hex.length === 3) {
    hex = hex.split("").map((c) => c + c).join("");
  }
  const n = parseInt(hex, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

type Circle = {
  x: number; y: number;
  translateX: number; translateY: number;
  size: number; alpha: number; targetAlpha: number;
  dx: number; dy: number; magnetism: number;
};

export const Particles: React.FC<ParticlesProps> = ({
  className = "",
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const ctx = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<Circle[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const canvasSize = useRef({ w: 0, h: 0 });
  const raf = useRef<number | null>(null);
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;
  const rgb = hexToRgb(color);

  const circleParams = (): Circle => ({
    x: Math.floor(Math.random() * canvasSize.current.w),
    y: Math.floor(Math.random() * canvasSize.current.h),
    translateX: 0, translateY: 0,
    size: Math.floor(Math.random() * 2) + size,
    alpha: 0,
    targetAlpha: parseFloat((Math.random() * 0.6 + 0.1).toFixed(1)),
    dx: (Math.random() - 0.5) * 0.1,
    dy: (Math.random() - 0.5) * 0.1,
    magnetism: 0.1 + Math.random() * 4,
  });

  const drawCircle = (c: Circle) => {
    if (!ctx.current) return;
    ctx.current.translate(c.translateX, c.translateY);
    ctx.current.beginPath();
    ctx.current.arc(c.x, c.y, c.size, 0, 2 * Math.PI);
    ctx.current.fillStyle = `rgba(${rgb.join(", ")}, ${c.alpha})`;
    ctx.current.fill();
    ctx.current.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const remap = (v: number, s1: number, e1: number, s2: number, e2: number) =>
    Math.max(0, ((v - s1) * (e2 - s2)) / (e1 - s1) + s2);

  useEffect(() => {
    if (canvasRef.current) ctx.current = canvasRef.current.getContext("2d");

    const init = () => {
      if (!containerRef.current || !canvasRef.current || !ctx.current) return;
      canvasSize.current.w = containerRef.current.offsetWidth;
      canvasSize.current.h = containerRef.current.offsetHeight;
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      ctx.current.scale(dpr, dpr);
      circles.current = [];
      for (let i = 0; i < quantity; i++) {
        const c = circleParams();
        circles.current.push(c);
        drawCircle(c);
      }
    };

    const animate = () => {
      if (!ctx.current) return;
      ctx.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
      circles.current.forEach((c, i) => {
        const edges = [
          c.x + c.translateX - c.size,
          canvasSize.current.w - c.x - c.translateX - c.size,
          c.y + c.translateY - c.size,
          canvasSize.current.h - c.y - c.translateY - c.size,
        ];
        const closest = Math.min(...edges);
        const r = parseFloat(remap(closest, 0, 20, 0, 1).toFixed(2));
        if (r > 1) {
          c.alpha = Math.min(c.alpha + 0.02, c.targetAlpha);
        } else {
          c.alpha = c.targetAlpha * r;
        }
        c.x += c.dx + vx;
        c.y += c.dy + vy;
        c.translateX += (mouse.current.x / (staticity / c.magnetism) - c.translateX) / ease;
        c.translateY += (mouse.current.y / (staticity / c.magnetism) - c.translateY) / ease;
        drawCircle(c);
        if (c.x < -c.size || c.x > canvasSize.current.w + c.size || c.y < -c.size || c.y > canvasSize.current.h + c.size) {
          circles.current.splice(i, 1);
          const nc = circleParams();
          circles.current.push(nc);
          drawCircle(nc);
        }
      });
      raf.current = requestAnimationFrame(animate);
    };

    const onMove = (e: MouseEvent) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const { w, h } = canvasSize.current;
      const x = e.clientX - rect.left - w / 2;
      const y = e.clientY - rect.top - h / 2;
      if (Math.abs(x) < w / 2 && Math.abs(y) < h / 2) {
        mouse.current = { x, y };
      }
    };

    init();
    animate();
    window.addEventListener("mousemove", onMove);
    let resizeTimer: NodeJS.Timeout;
    const onResize = () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(init, 200); };
    window.addEventListener("resize", onResize);

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimer);
    };
  }, [color, refresh]);

  return (
    <div ref={containerRef} className={cx("pointer-events-none", className)} aria-hidden {...props}>
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
};
