import { ImageResponse } from "next/og";

export const alt = "Young Africans Research Academy — Building the research talent Africa needs for an evidence-driven future";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#3b4a2f",
          padding: 72,
          position: "relative",
        }}
      >
        <svg width="420" height="420" viewBox="0 0 100 100" style={{ position: "absolute", right: -40, top: -40 }}>
          <path d="M0 0a100 100 0 0 0 100 100v-16A84 84 0 0 1 16 0z" fill="#d9f46e" opacity="0.9" />
          <path d="M26 0a74 74 0 0 0 74 74V58A58 58 0 0 1 42 0z" fill="#d9f46e" opacity="0.9" />
          <path d="M52 0a48 48 0 0 0 48 48V32A32 32 0 0 1 68 0z" fill="#d9f46e" opacity="0.9" />
        </svg>
        <div style={{ color: "#d9f46e", fontSize: 30, letterSpacing: 4, textTransform: "uppercase" }}>
          Young Africans Research Academy
        </div>
        <div style={{ color: "#ffffff", fontSize: 72, lineHeight: 1.05, maxWidth: 900, letterSpacing: -2 }}>
          Building the research talent Africa needs for an evidence-driven future.
        </div>
      </div>
    ),
    size,
  );
}
