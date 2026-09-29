import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { sanityFetch } from "@/sanity/client";
import { storySlugsQuery } from "@/sanity/queries";

const routes = [
  "",
  "/about",
  "/about/team",
  "/strategy",
  "/research",
  "/research/artificial-intelligence",
  "/research/climate",
  "/research/public-health",
  "/programmes",
  "/programmes/stem-research-fellowship",
  "/programmes/ai-ethics-climate-governance",
  "/opportunities",
  "/symposium-2026",
  "/stories",
  "/stories/ampe-db-ghanaian-game-research-data",
  "/stories/meet-the-inaugural-yara-fellows",
  "/get-involved",
  "/get-involved/mentor",
  "/get-involved/partner",
  "/donate",
  "/contact",
  "/media",
  "/newsletter",
  "/accessibility",
  "/privacy",
  "/terms",
];

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date("2026-09-29");
  const slugs = await sanityFetch<string[]>(storySlugsQuery, {}, []);
  const all = [...routes, ...slugs.map((s) => `/stories/${s}`).filter((p) => !routes.includes(p))];
  return all.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: path === "" || path === "/opportunities" || path === "/symposium-2026" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.split("/").length === 2 ? 0.8 : 0.6,
  }));
}
