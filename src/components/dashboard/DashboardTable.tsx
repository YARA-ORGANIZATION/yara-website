"use client";

import { useRef, Fragment, type ReactNode } from "react";
import type { QueryDocumentSnapshot } from "firebase/firestore";
import dayjs from "dayjs";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import DashboardFormModal, { type DashboardFormModalRef } from "./DashboardFormModal";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

export interface DashboardTableCol {
  accessor: string;
  header: string;
}

interface FormComponent<T> {
  buttonTitle: string;
  modalSize?: "medium" | "large";
  component: (props: { data: T; dashboardModalRef: React.RefObject<DashboardFormModalRef | null> }) => ReactNode;
}

interface Props<T> {
  columns: DashboardTableCol[];
  data: T[];
  formComponentList?: FormComponent<T>[];
  paginationData?: { startAfterDocQueue?: QueryDocumentSnapshot[] };
  lastDoc?: QueryDocumentSnapshot;
  onPaginationChange?: (queue: QueryDocumentSnapshot[]) => void;
  limit?: number;
  onLimitChange?: (limit: number) => void;
}

function formatCellValue(value: unknown): string {
  if (value == null) return "";
  if (value instanceof Date) return dayjs(value).format("DD - MM - YYYY");
  if (typeof value === "boolean") return value ? "TRUE" : "";
  if (Array.isArray(value)) return value.join(", ");
  return String(value);
}

export default function DashboardTable<T extends object>({
  columns,
  data,
  formComponentList,
  paginationData,
  lastDoc,
  onPaginationChange,
  limit = 24,
  onLimitChange,
}: Props<T>) {
  const queue = paginationData?.startAfterDocQueue ?? [];

  function handleNext() {
    if (lastDoc && onPaginationChange) {
      onPaginationChange([...queue, lastDoc]);
    }
  }

  function handlePrev() {
    if (queue.length > 0 && onPaginationChange) {
      onPaginationChange(queue.slice(0, -1));
    }
  }

  return (
    <div className="overflow-hidden rounded-lg text-sm">
      <div className="h-[calc(100vh-321px)] overflow-y-auto overflow-x-auto bg-white">
        <table className="min-w-full border-collapse">
          <thead className="sticky top-0 bg-neutral-800">
            <tr>
              {columns.map((col) => (
                <th key={col.accessor} className="px-2 py-1.5 text-left text-white">
                  <p className="line-clamp-1">{col.header}</p>
                </th>
              ))}
              {formComponentList && formComponentList.length > 0 && (
                <th className="w-[200px] px-4 py-2 text-left text-white" />
              )}
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length + (formComponentList?.length ? 1 : 0)}
                  className="px-4 py-8 text-center text-neutral-400"
                >
                  No records found
                </td>
              </tr>
            )}
            {data.map((row, i) => (
              <tr key={i} className="border border-gray-200">
                {columns.map((col) => (
                  <td key={col.accessor} className="px-2 py-2 text-gray-700">
                    <p className="line-clamp-1">
                      {formatCellValue((row as Record<string, unknown>)[col.accessor])}
                    </p>
                  </td>
                ))}
                {formComponentList && formComponentList.length > 0 && (
                  <td className="flex w-[200px] flex-row justify-end gap-1 px-4 py-1.5 text-gray-700">
                    {formComponentList.map((form) => (
                      <RowAction key={form.buttonTitle} form={form} row={row} />
                    ))}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex h-[40px] w-full flex-row items-center justify-between bg-neutral-400 px-2">
        <div className="relative flex flex-row items-center gap-2 pl-2 text-sm text-black">
          Showing
          <Menu as="div" className="relative">
            <MenuButton className="flex w-[70px] flex-row items-center justify-between gap-1 rounded-lg bg-neutral-800 px-2 py-1 text-sm text-white">
              {limit} <ChevronDown className="size-3" />
            </MenuButton>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="absolute -top-[13px] mt-2 w-[70px] origin-top-left -translate-y-full divide-y divide-gray-100 rounded-md bg-white shadow-lg focus:outline-none">
                <div className="px-1 py-1">
                  {[100, 75, 50, 24].map((n) => (
                    <MenuItem key={n}>
                      {({ active }) => (
                        <button
                          type="button"
                          onClick={() => onLimitChange?.(n)}
                          className={`${
                            active ? "bg-neutral-200 text-black" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {n}
                        </button>
                      )}
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Transition>
          </Menu>
          items
        </div>

        <div className="flex flex-row gap-1.5">
          <button
            type="button"
            onClick={handlePrev}
            disabled={queue.length === 0}
            className={`${
              queue.length === 0 ? "cursor-not-allowed opacity-30" : ""
            } flex w-[80px] flex-row items-center justify-between gap-2 rounded-full bg-neutral-800 px-3 py-1 text-sm text-white`}
          >
            <ChevronLeft className="size-4" /> Prev
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={!lastDoc || data.length < limit}
            className={`${
              !lastDoc || data.length < limit ? "cursor-not-allowed opacity-30" : ""
            } flex w-[80px] flex-row items-center justify-between gap-2 rounded-full bg-neutral-800 px-3 py-1 text-sm text-white`}
          >
            Next <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function RowAction<T extends object>({
  form,
  row,
}: {
  form: FormComponent<T>;
  row: T;
}) {
  const modalRef = useRef<DashboardFormModalRef>(null);
  return (
    <DashboardFormModal
      ref={modalRef}
      triggerTitle={form.buttonTitle}
      modalSize={form.modalSize}
      triggerClassName="rounded-full bg-neutral-700 px-5 py-2 text-xs text-white"
    >
      {form.component({ data: row, dashboardModalRef: modalRef })}
    </DashboardFormModal>
  );
}
