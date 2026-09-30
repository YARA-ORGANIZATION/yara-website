import type { Metadata } from "next";
import ThemePage from "@/components/ThemePage";
import { getTheme } from "@/lib/research";
import { fetchProjectsByTheme } from "@/lib/firebase-fetch";

const theme = getTheme("climate");

export const metadata: Metadata = {
  title: "Climate Research",
  description: theme.heroIntro,
  alternates: { canonical: "/research/climate" },
};

export default async function Page() {
  const projects = await fetchProjectsByTheme("climate");
  return <ThemePage theme="climate" projects={projects} />;
}
