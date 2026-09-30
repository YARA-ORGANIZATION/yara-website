"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import {
  selectTableListData,
  selectTableFilterOptions,
  selectTableLoadingState,
  updateTableFilterOptions,
  updateTableFilterOptionsPagination,
} from "@/redux/features/research_projects/reducer";
import {
  fetchResearchProjectWithFilters,
  checkBeforeFilterResearchProject,
} from "@/redux/features/research_projects/actions";
import DashboardTable, { type DashboardTableCol } from "../DashboardTable";
import DashboardFormModal, { type DashboardFormModalRef } from "../DashboardFormModal";
import CreateResearchProjectForm from "../forms/research_projects/CreateResearchProjectForm";
import UpdateResearchProjectForm from "../forms/research_projects/UpdateResearchProjectForm";
import ResearchProjectDetails from "../forms/research_projects/ResearchProjectDetails";
import type { ResearchProjectSchema } from "@/backend/models/research_projects";
import type { QueryDocumentSnapshot } from "firebase/firestore";

const columns: DashboardTableCol[] = [
  { accessor: "researcher", header: "Researcher" },
  { accessor: "question", header: "Question" },
  { accessor: "tags", header: "Tags" },
  { accessor: "sortOrder", header: "Order" },
];

export default function DashboardViewResearchProjects() {
  const dispatch = useAppDispatch();
  const tableData = useAppSelector(selectTableListData);
  const filterOptions = useAppSelector(selectTableFilterOptions);
  const loadingState = useAppSelector(selectTableLoadingState);
  const [searchQuery, setSearchQuery] = useState("");
  const searchTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const createModalRef = useRef<DashboardFormModalRef>(null);

  const fetchData = useCallback(
    (force?: boolean) => {
      if (force) {
        dispatch(fetchResearchProjectWithFilters() as never);
      } else {
        dispatch(checkBeforeFilterResearchProject() as never);
      }
    },
    [dispatch],
  );

  useEffect(() => {
    fetchData(false);
  }, [fetchData]);

  useEffect(() => {
    if (searchTimeout.current) clearTimeout(searchTimeout.current);
    searchTimeout.current = setTimeout(() => {
      dispatch(
        updateTableFilterOptions({
          questionSearch: searchQuery || undefined,
          startAfterDocQueue: [],
        }),
      );
      fetchData(true);
    }, 500);
    return () => {
      if (searchTimeout.current) clearTimeout(searchTimeout.current);
    };
  }, [searchQuery, dispatch, fetchData]);

  function handlePaginationChange(queue: QueryDocumentSnapshot[]) {
    dispatch(updateTableFilterOptionsPagination(queue));
    fetchData(true);
  }

  return (
    <div className="relative flex h-full w-full flex-col">
      <div className="h-[5px] w-full">
        {loadingState === "loading" && (
          <div className="h-full w-full animate-pulse bg-black" />
        )}
      </div>

      <div className="flex h-full flex-1 flex-col p-6">
        <div className="flex h-[55px] flex-none flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-3 font-medium text-black">
            Research Projects
            <DashboardFormModal
              ref={createModalRef}
              triggerTitle="Create new"
              modalSize="large"
            >
              <CreateResearchProjectForm
                onSuccess={() => {
                  createModalRef.current?.closeModal();
                  fetchData(true);
                }}
              />
            </DashboardFormModal>
          </div>

          <div className="w-[250px]">
            <div className="relative flex flex-row items-center rounded-full border border-transparent bg-white px-3 py-1 focus-within:border-neutral-300">
              <input
                type="text"
                placeholder="Search by question"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoComplete="off"
                className="ml-3 w-full border-transparent text-base tracking-[0px] placeholder:text-neutral-400 focus:border-transparent focus:ring-transparent md:text-sm lg:text-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  type="button"
                  className="absolute inset-y-0 right-0 mx-2.5 my-1.5 flex size-5 items-center justify-center rounded-full bg-neutral-600"
                >
                  <span className="text-[10px] text-white">✕</span>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="h-full w-full flex-1">
          <DashboardTable<ResearchProjectSchema>
            columns={columns}
            data={tableData.data}
            paginationData={{ startAfterDocQueue: filterOptions.startAfterDocQueue }}
            lastDoc={tableData.lastDoc}
            onPaginationChange={handlePaginationChange}
            limit={filterOptions.limit}
            onLimitChange={(limit) => {
              dispatch(updateTableFilterOptions({ limit, startAfterDocQueue: [] }));
              fetchData(true);
            }}
            formComponentList={[
              {
                buttonTitle: "Details",
                component: ({ data }) => <ResearchProjectDetails data={data} />,
              },
              {
                buttonTitle: "Edit",
                component: ({ data, dashboardModalRef }) => (
                  <UpdateResearchProjectForm
                    data={data}
                    onSuccess={() => {
                      dashboardModalRef.current?.closeModal();
                      fetchData(true);
                    }}
                  />
                ),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
