import type { ThemeKey } from "@/lib/research";
import type { FilterDataRequest, FetchMultiDataResponse, SuccessMessageResponse } from "./_shared";

export interface CreateResearchProjectSchema {
  question: string;
  questionSearch: string;
  researcher: string;
  themes: ThemeKey[];
  tags: string;
  summary: string;
  themeSummary: Partial<Record<ThemeKey, string>>;
  sortOrder: number;
  publishedAt: Date;
}

export interface ResearchProjectSchema extends CreateResearchProjectSchema {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export type UpdateResearchProjectSchema = Partial<CreateResearchProjectSchema>;

export interface UpdateResearchProjectWithIdSchema {
  id: string;
  data: UpdateResearchProjectSchema;
}

export interface FilterResearchProjectsSchema extends FilterDataRequest {
  questionSearch?: string;
}

export interface ResponseResearchProjectSchema extends SuccessMessageResponse {
  data: ResearchProjectSchema;
}

export interface ListResponseResearchProjectsSchema extends FetchMultiDataResponse {
  data: ResearchProjectSchema[];
}
