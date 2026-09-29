import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YARA Studio",
  robots: { index: false, follow: false },
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-dvh">{children}</div>;
}
