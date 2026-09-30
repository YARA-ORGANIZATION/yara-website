import type { Metadata } from "next";
import ThemePage from "@/components/ThemePage";
import { getTheme } from "@/lib/research";
import { fetchProjectsByTheme } from "@/lib/firebase-fetch";

const theme = getTheme("health");

export const metadata: Metadata = {
  title: "Public Health Research",
  description: theme.heroIntro,
  alternates: { canonical: "/research/public-health" },
};

export default async function Page() {
  const projects = await fetchProjectsByTheme("health");
  return <ThemePage theme="health" projects={projects} />;
}
