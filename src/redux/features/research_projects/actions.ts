import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  filterResearchProjectsApi,
  createResearchProjectApi,
  updateResearchProjectApi,
  getResearchProjectApi,
  deleteResearchProjectApi,
} from "@/backend/firebase/db/api/research_projects_api";
import type {
  CreateResearchProjectSchema,
  FilterResearchProjectsSchema,
  UpdateResearchProjectWithIdSchema,
  ResearchProjectSchema,
} from "@/backend/models/research_projects";
import { ResponseIndicator } from "@/backend/models/_shared";
import type { AppDispatch, RootState } from "@/redux/app/store";

export const filterResearchProjectPersistAsync = createAsyncThunk(
  "researchProjects/filterPersist",
  async (requestData: FilterResearchProjectsSchema) => {
    const [response, status] = await filterResearchProjectsApi(requestData);
    if (status === ResponseIndicator.ERROR) throw new Error(response as string);
    return response;
  },
);

export const createResearchProjectAsync = createAsyncThunk(
  "researchProjects/create",
  async (requestData: CreateResearchProjectSchema) => {
    const [response, status] = await createResearchProjectApi(requestData);
    if (status === ResponseIndicator.ERROR) throw new Error(response as string);
    return response;
  },
);

export const updateResearchProjectAsync = createAsyncThunk(
  "researchProjects/update",
  async (requestData: UpdateResearchProjectWithIdSchema) => {
    const [response, status] = await updateResearchProjectApi(requestData);
    if (status === ResponseIndicator.ERROR) throw new Error(response as string);
    return response;
  },
);

export const getResearchProjectAsync = createAsyncThunk(
  "researchProjects/get",
  async (id: string) => {
    const [response, status] = await getResearchProjectApi(id);
    if (status === ResponseIndicator.ERROR) throw new Error(response as string);
    return response;
  },
);

export const deleteResearchProjectAsync = createAsyncThunk(
  "researchProjects/delete",
  async (data: ResearchProjectSchema) => {
    const [response, status] = await deleteResearchProjectApi(data);
    if (status === ResponseIndicator.ERROR) throw new Error(response as string);
    return response;
  },
);

type AppThunk = (dispatch: AppDispatch, getState: () => RootState) => void;

export function fetchResearchProjectWithFilters(): AppThunk {
  return (dispatch, getState) => {
    const { tableFilterOptions } = getState().researchProjects;
    dispatch(filterResearchProjectPersistAsync({ ...tableFilterOptions }));
  };
}

export function checkBeforeFilterResearchProject(): AppThunk {
  return (dispatch, getState) => {
    const { tableListData } = getState().researchProjects;
    if (!tableListData.data.length) {
      dispatch(fetchResearchProjectWithFilters() as unknown as ReturnType<typeof filterResearchProjectPersistAsync>);
    }
  };
}
