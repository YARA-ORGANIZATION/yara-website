import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

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

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: path === "" || path === "/opportunities" || path === "/symposium-2026" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.split("/").length === 2 ? 0.8 : 0.6,
  }));
}
