import type { Metadata } from "next";
import ThemePage from "@/components/ThemePage";
import { getTheme } from "@/lib/research";

const theme = getTheme("climate");

export const metadata: Metadata = {
  title: "Climate Research",
  description: theme.heroIntro,
  alternates: { canonical: "/research/climate" },
};

export default function Page() {
  return <ThemePage theme="climate" />;
}
