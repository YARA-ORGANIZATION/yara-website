import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { QueryDocumentSnapshot } from "firebase/firestore";
import type {
  ListResponseResearchProjectsSchema,
  FilterResearchProjectsSchema,
} from "@/backend/models/research_projects";
import { ComponentStateEnum, FiltersDefault, fetchListDefaultResponse } from "@/backend/models/_shared";
import { filterResearchProjectPersistAsync } from "./actions";
import type { RootState } from "@/redux/app/store";

interface ResearchProjectsState {
  tableListData: ListResponseResearchProjectsSchema;
  tableFilterOptions: FilterResearchProjectsSchema;
  tableLoadingState: ComponentStateEnum;
}

const initialState: ResearchProjectsState = {
  tableListData: fetchListDefaultResponse as ListResponseResearchProjectsSchema,
  tableFilterOptions: { ...FiltersDefault },
  tableLoadingState: ComponentStateEnum.IDLE,
};

const researchProjectsSlice = createSlice({
  name: "researchProjects",
  initialState,
  reducers: {
    updateTableFilterOptions(state, action: PayloadAction<Partial<FilterResearchProjectsSchema>>) {
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
    resetTableData(state) {
      state.tableListData = fetchListDefaultResponse as ListResponseResearchProjectsSchema;
      state.tableFilterOptions = { ...FiltersDefault };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(filterResearchProjectPersistAsync.pending, (state) => {
        state.tableLoadingState = ComponentStateEnum.LOADING;
      })
      .addCase(filterResearchProjectPersistAsync.fulfilled, (state, action) => {
        state.tableLoadingState = ComponentStateEnum.IDLE;
        state.tableListData = action.payload as ListResponseResearchProjectsSchema;
      })
      .addCase(filterResearchProjectPersistAsync.rejected, (state) => {
        state.tableLoadingState = ComponentStateEnum.FAILED;
      });
  },
});

export const {
  updateTableFilterOptions,
  updateTableFilterOptionsPagination,
  updateTableFilterOptionsSorting,
  resetTableData,
} = researchProjectsSlice.actions;

export const selectTableListData = (state: RootState) => state.researchProjects.tableListData;
export const selectTableFilterOptions = (state: RootState) => state.researchProjects.tableFilterOptions;
export const selectTableLoadingState = (state: RootState) => state.researchProjects.tableLoadingState;

export default researchProjectsSlice.reducer;
