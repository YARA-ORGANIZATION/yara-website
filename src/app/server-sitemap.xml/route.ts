import { getServerSideSitemap } from "next-sitemap";
import { site } from "@/lib/site";
import { fetchStorySlugs } from "@/lib/firebase-fetch";
import { getDBInfoSitemap } from "@/backend/firebase/db/_dbInfo";
import { ResponseIndicator } from "@/backend/models/_shared";

export async function GET() {
  const siteUrl = site.url;

  const storySlugs = await fetchStorySlugs();

  let projectIDs: string[] = [];
  try {
    const [response, status] = await getDBInfoSitemap();
    if (status === ResponseIndicator.SUCCESS && typeof response !== "string") {
      projectIDs = (response as { data: { researchProjectIDs: string[] } }).data.researchProjectIDs ?? [];
    }
  } catch {
    // continue with empty list
  }

  const fields = [
    ...storySlugs.map((slug) => ({
      loc: `${siteUrl}/stories/${slug}`,
      lastmod: new Date().toISOString(),
      changefreq: "daily" as const,
      priority: 0.7,
    })),
  ];

  return getServerSideSitemap(fields);
}
