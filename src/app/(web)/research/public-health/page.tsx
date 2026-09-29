import type { Metadata } from "next";
import ThemePage from "@/components/ThemePage";
import { getTheme } from "@/lib/research";

const theme = getTheme("health");

export const metadata: Metadata = {
  title: "Public Health Research",
  description: theme.heroIntro,
  alternates: { canonical: "/research/public-health" },
};

export default function Page() {
  return <ThemePage theme="health" />;
}
