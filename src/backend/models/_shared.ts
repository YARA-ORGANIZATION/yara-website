import type { QueryDocumentSnapshot } from "firebase/firestore";

export enum ComponentStateEnum {
  IDLE = "idle",
  LOADING = "loading",
  FAILED = "failed",
  DISABLED = "disabled",
}

export enum OrderDirectionEnum {
  ASC = "asc",
  DESC = "desc",
}

export const ResponseIndicator = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
} as const;

export type ResponseIndicatorValues = (typeof ResponseIndicator)[keyof typeof ResponseIndicator];

export interface PaginationFilterSchema {
  startAfterDocQueue?: QueryDocumentSnapshot[];
  limit?: number;
}

export interface SortingFilterSchema {
  orderBy?: string;
  orderDirection?: "asc" | "desc";
}

export interface FilterDataRequest extends PaginationFilterSchema, SortingFilterSchema {}

export const FiltersDefault: FilterDataRequest = {
  orderBy: "updatedAt",
  orderDirection: "desc",
  startAfterDocQueue: [],
  limit: 24,
};

export interface FetchMultiDataResponse {
  data: unknown[];
  recordsCount: number;
  message: string;
  lastDoc?: QueryDocumentSnapshot;
}

export interface SuccessMessageResponse {
  message: string;
}

export const fetchListDefaultResponse: FetchMultiDataResponse = {
  data: [],
  recordsCount: 0,
  message: "",
  lastDoc: undefined,
};
