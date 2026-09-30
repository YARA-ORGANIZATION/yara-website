import { filterStoriesApi, getStoryBySlugApi } from "@/backend/firebase/db/api/stories_api";
import { filterResearchProjectsApi, getProjectsByThemeApi } from "@/backend/firebase/db/api/research_projects_api";
import { getDBInfoSitemap } from "@/backend/firebase/db/_dbInfo";
import { ResponseIndicator } from "@/backend/models/_shared";
import type { StorySchema, StoryCardData } from "@/backend/models/stories";
import type { ResearchProjectSchema } from "@/backend/models/research_projects";
import type { ThemeKey } from "@/lib/research";

function serializeDate(d: Date | string): string {
  return d instanceof Date ? d.toISOString() : String(d);
}

function serializeStory(s: StorySchema): StorySchema {
  return {
    ...s,
    publishedAt: serializeDate(s.publishedAt) as unknown as Date,
    createdAt: serializeDate(s.createdAt) as unknown as Date,
    updatedAt: serializeDate(s.updatedAt) as unknown as Date,
  };
}

function serializeProject(p: ResearchProjectSchema): ResearchProjectSchema {
  return {
    ...p,
    createdAt: serializeDate(p.createdAt) as unknown as Date,
    updatedAt: serializeDate(p.updatedAt) as unknown as Date,
  };
}

export async function fetchAllStories(): Promise<StoryCardData[]> {
  try {
    const [response, status] = await filterStoriesApi({
      orderBy: "publishedAt",
      orderDirection: "desc",
      limit: 200,
    });
    if (status === ResponseIndicator.ERROR || typeof response === "string") return [];
    return response.data.map(serializeStory);
  } catch {
    return [];
  }
}

export async function fetchStoryBySlug(slug: string): Promise<StorySchema | null> {
  try {
    const [response, status] = await getStoryBySlugApi(slug);
    if (status === ResponseIndicator.ERROR || typeof response === "string") return null;
    return serializeStory(response.data);
  } catch {
    return null;
  }
}

export async function fetchStorySlugs(): Promise<string[]> {
  try {
    const [response, status] = await getDBInfoSitemap();
    if (status === ResponseIndicator.ERROR || typeof response === "string") return [];
    return (response as { data: { storySlugs: string[] } }).data.storySlugs ?? [];
  } catch {
    return [];
  }
}

export async function fetchAllProjects(): Promise<ResearchProjectSchema[]> {
  try {
    const [response, status] = await filterResearchProjectsApi({
      orderBy: "sortOrder",
      orderDirection: "asc",
      limit: 200,
    });
    if (status === ResponseIndicator.ERROR || typeof response === "string") return [];
    return response.data.map(serializeProject);
  } catch {
    return [];
  }
}

export async function fetchProjectsByTheme(theme: ThemeKey): Promise<ResearchProjectSchema[]> {
  try {
    const [response, status] = await getProjectsByThemeApi(theme);
    if (status === ResponseIndicator.ERROR || typeof response === "string") return [];
    return response.data.map(serializeProject);
  } catch {
    return [];
  }
}
