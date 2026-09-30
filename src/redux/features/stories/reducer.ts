import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { QueryDocumentSnapshot } from "firebase/firestore";
import type { ListResponseStoriesSchema, FilterStoriesSchema } from "@/backend/models/stories";
import { ComponentStateEnum, FiltersDefault, fetchListDefaultResponse } from "@/backend/models/_shared";
import { filterStoryPersistAsync, filterPageStoryPersistAsync } from "./actions";
import type { RootState } from "@/redux/app/store";

interface StoriesState {
  tableListData: ListResponseStoriesSchema;
  tableFilterOptions: FilterStoriesSchema;
  tableLoadingState: ComponentStateEnum;
  pageTableListData: ListResponseStoriesSchema;
  pageTableFilterOptions: FilterStoriesSchema;
  pageTableLoadingState: ComponentStateEnum;
}

const initialState: StoriesState = {
  tableListData: fetchListDefaultResponse as ListResponseStoriesSchema,
  tableFilterOptions: { ...FiltersDefault },
  tableLoadingState: ComponentStateEnum.IDLE,
  pageTableListData: fetchListDefaultResponse as ListResponseStoriesSchema,
  pageTableFilterOptions: { ...FiltersDefault, orderBy: "publishedAt" },
  pageTableLoadingState: ComponentStateEnum.IDLE,
};

const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {
    updateTableFilterOptions(state, action: PayloadAction<Partial<FilterStoriesSchema>>) {
      state.tableFilterOptions = { ...state.tableFilterOptions, ...action.payload };
    },
    updateTableFilterOptionsPagination(state, action: PayloadAction<QueryDocumentSnapshot[]>) {
      state.tableFilterOptions.startAfterDocQueue = action.payload;
    },
    updateTableFilterOptionsSorting(
      state,
      action: PayloadAction<{ orderBy: string; orderDirection: "asc" | "desc" }>,
    ) {
      state.tableFilterOptions.orderBy = action.payload.orderBy;
      state.tableFilterOptions.orderDirection = action.payload.orderDirection;
      state.tableFilterOptions.startAfterDocQueue = [];
    },
    updatePageTableFilterOptions(state, action: PayloadAction<Partial<FilterStoriesSchema>>) {
      state.pageTableFilterOptions = { ...state.pageTableFilterOptions, ...action.payload };
    },
    resetTableData(state) {
      state.tableListData = fetchListDefaultResponse as ListResponseStoriesSchema;
      state.tableFilterOptions = { ...FiltersDefault };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(filterStoryPersistAsync.pending, (state) => {
        state.tableLoadingState = ComponentStateEnum.LOADING;
      })
      .addCase(filterStoryPersistAsync.fulfilled, (state, action) => {
        state.tableLoadingState = ComponentStateEnum.IDLE;
        state.tableListData = action.payload as ListResponseStoriesSchema;
      })
      .addCase(filterStoryPersistAsync.rejected, (state) => {
        state.tableLoadingState = ComponentStateEnum.FAILED;
      })
      .addCase(filterPageStoryPersistAsync.pending, (state) => {
        state.pageTableLoadingState = ComponentStateEnum.LOADING;
      })
      .addCase(filterPageStoryPersistAsync.fulfilled, (state, action) => {
        state.pageTableLoadingState = ComponentStateEnum.IDLE;
        state.pageTableListData = action.payload as ListResponseStoriesSchema;
      })
      .addCase(filterPageStoryPersistAsync.rejected, (state) => {
        state.pageTableLoadingState = ComponentStateEnum.FAILED;
      });
  },
});

export const {
  updateTableFilterOptions,
  updateTableFilterOptionsPagination,
  updateTableFilterOptionsSorting,
  updatePageTableFilterOptions,
  resetTableData,
} = storiesSlice.actions;

export const selectTableListData = (state: RootState) => state.stories.tableListData;
export const selectTableFilterOptions = (state: RootState) => state.stories.tableFilterOptions;
export const selectTableLoadingState = (state: RootState) => state.stories.tableLoadingState;
export const selectPageTableListData = (state: RootState) => state.stories.pageTableListData;
export const selectPageTableFilterOptions = (state: RootState) => state.stories.pageTableFilterOptions;
export const selectPageTableLoadingState = (state: RootState) => state.stories.pageTableLoadingState;

export default storiesSlice.reducer;
