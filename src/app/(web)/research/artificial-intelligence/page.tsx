import type { Metadata } from "next";
import ThemePage from "@/components/ThemePage";
import { getTheme } from "@/lib/research";

const theme = getTheme("ai");

export const metadata: Metadata = {
  title: "Artificial Intelligence Research",
  description: theme.heroIntro,
  alternates: { canonical: "/research/artificial-intelligence" },
};

export default function Page() {
  return <ThemePage theme="ai" />;
}
