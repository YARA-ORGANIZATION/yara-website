import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  filterStoriesApi,
  createStoryApi,
  updateStoryApi,
  getStoryApi,
  deleteStoryApi,
} from "@/backend/firebase/db/api/stories_api";
import type {
  CreateStoryWithFileSchema,
  FilterStoriesSchema,
  UpdateStoryWithFileSchema,
  StorySchema,
} from "@/backend/models/stories";
import { ResponseIndicator } from "@/backend/models/_shared";
import type { AppDispatch, RootState } from "@/redux/app/store";

export const filterStoryPersistAsync = createAsyncThunk(
  "stories/filterPersist",
  async (requestData: FilterStoriesSchema) => {
    const [response, status] = await filterStoriesApi(requestData);
    if (status === ResponseIndicator.ERROR) throw new Error(response as string);
    return response;
  },
);

export const filterPageStoryPersistAsync = createAsyncThunk(
  "stories/filterPagePersist",
  async (requestData: FilterStoriesSchema) => {
    const [response, status] = await filterStoriesApi(requestData);
    if (status === ResponseIndicator.ERROR) throw new Error(response as string);
    return response;
  },
);

export const createStoryAsync = createAsyncThunk(
  "stories/create",
  async (requestData: CreateStoryWithFileSchema) => {
    const [response, status] = await createStoryApi(requestData);
    if (status === ResponseIndicator.ERROR) throw new Error(response as string);
    return response;
  },
);

export const updateStoryAsync = createAsyncThunk(
  "stories/update",
  async (requestData: UpdateStoryWithFileSchema) => {
    const [response, status] = await updateStoryApi(requestData);
    if (status === ResponseIndicator.ERROR) throw new Error(response as string);
    return response;
  },
);

export const getStoryAsync = createAsyncThunk(
  "stories/get",
  async (id: string) => {
    const [response, status] = await getStoryApi(id);
    if (status === ResponseIndicator.ERROR) throw new Error(response as string);
    return response;
  },
);

export const deleteStoryAsync = createAsyncThunk(
  "stories/delete",
  async (data: StorySchema) => {
    const [response, status] = await deleteStoryApi(data);
    if (status === ResponseIndicator.ERROR) throw new Error(response as string);
    return response;
  },
);

type AppThunk = (dispatch: AppDispatch, getState: () => RootState) => void;

export function fetchStoryWithFilters(): AppThunk {
  return (dispatch, getState) => {
    const { tableFilterOptions } = getState().stories;
    const filters: FilterStoriesSchema = { ...tableFilterOptions };
    dispatch(filterStoryPersistAsync(filters));
  };
}

export function checkBeforeFilterStory(): AppThunk {
  return (dispatch, getState) => {
    const { tableListData } = getState().stories;
    if (!tableListData.data.length) {
      dispatch(fetchStoryWithFilters() as unknown as ReturnType<typeof filterStoryPersistAsync>);
    }
  };
}

export function fetchPageStoryWithFilters(): AppThunk {
  return (dispatch, getState) => {
    const { pageTableFilterOptions } = getState().stories;
    const filters: FilterStoriesSchema = { ...pageTableFilterOptions };
    dispatch(filterPageStoryPersistAsync(filters));
  };
}

export function checkBeforeFilterPageStory(): AppThunk {
  return (dispatch, getState) => {
    const { pageTableListData } = getState().stories;
    if (!pageTableListData.data.length) {
      dispatch(fetchPageStoryWithFilters() as unknown as ReturnType<typeof filterPageStoryPersistAsync>);
    }
  };
}
