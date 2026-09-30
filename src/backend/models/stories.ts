import type { FilterDataRequest, FetchMultiDataResponse, SuccessMessageResponse } from "./_shared";

export type StoryCategory = "spotlight" | "insight" | "press";

export interface CreateStorySchema {
  title: string;
  titleSearch: string;
  slug: string;
  category: StoryCategory;
  excerpt: string;
  mainImageUrl: string | null;
  mainImageAlt: string | null;
  mainImageCaption: string | null;
  body: string;
  externalUrl: string | null;
  publication: string | null;
  author: string | null;
  people: string[];
  themes: string[];
  publishedAt: Date;
  seoTitle: string | null;
  seoDescription: string | null;
}

export interface CreateStoryWithFileSchema {
  data: CreateStorySchema;
  file: File | null;
}

export interface StorySchema extends CreateStorySchema {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export type StoryCardData = Pick<
  StorySchema,
  | "id"
  | "title"
  | "slug"
  | "category"
  | "excerpt"
  | "mainImageUrl"
  | "mainImageAlt"
  | "publishedAt"
  | "externalUrl"
  | "publication"
>;

export type UpdateStorySchema = Partial<CreateStorySchema>;

export interface UpdateStoryWithFileSchema {
  id: string;
  data: UpdateStorySchema;
  file: File | null;
}

export interface FilterStoriesSchema extends FilterDataRequest {
  titleSearch?: string;
  category?: string;
}

export interface ResponseStorySchema extends SuccessMessageResponse {
  data: StorySchema;
}

export interface ListResponseStoriesSchema extends FetchMultiDataResponse {
  data: StorySchema[];
}
