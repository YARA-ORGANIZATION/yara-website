import type { Metadata } from "next";
import ThemePage from "@/components/ThemePage";
import { getTheme } from "@/lib/research";
import { fetchProjectsByTheme } from "@/lib/firebase-fetch";

const theme = getTheme("ai");

export const metadata: Metadata = {
  title: "Artificial Intelligence Research",
  description: theme.heroIntro,
  alternates: { canonical: "/research/artificial-intelligence" },
};

export default async function Page() {
  const projects = await fetchProjectsByTheme("ai");
  return <ThemePage theme="ai" projects={projects} />;
}
