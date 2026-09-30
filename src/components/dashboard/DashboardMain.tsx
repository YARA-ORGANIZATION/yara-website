"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { dashboardViews } from "./constants";

export default function DashboardMain() {
  const [tabIndex, setTabIndex] = useState(0);
  const { logOut } = useAuth();
  const router = useRouter();

  async function handleLogout() {
    await logOut();
    router.push("/dashboard");
  }

  return (
    <div className="mx-5 flex h-dvh max-w-7xl flex-col justify-between gap-4 py-4 pt-[70px] xl:mx-auto">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-2xl font-medium">Dashboard</h3>
        <button
          onClick={handleLogout}
          type="button"
          className="rounded-full bg-neutral-600 px-4 py-1 text-xs text-white"
        >
          Log out
        </button>
      </div>

      <div className="flex h-full w-full flex-row overflow-hidden rounded-xl bg-neutral-50 p-4">
        <div className="flex h-full w-[230px] flex-none flex-col">
          {dashboardViews.map((view, idx) => (
            <div
              key={idx}
              className={`${
                idx === tabIndex ? "bg-neutral-200" : "bg-transparent hover:bg-neutral-100"
              } flex cursor-pointer flex-row overflow-hidden rounded-l-lg text-sm font-medium text-black`}
              onClick={() => setTabIndex(idx)}
            >
              <div
                className={`${
                  idx === tabIndex ? "bg-neutral-900" : "bg-transparent"
                } h-full w-[5px]`}
              />
              <h4 className="flex h-full w-full flex-1 flex-row items-center p-4">
                {view.pageName}
              </h4>
            </div>
          ))}
        </div>

        <div className="h-full flex-1 overflow-hidden rounded-b-lg rounded-r-lg bg-neutral-200">
          {dashboardViews[tabIndex].view}
        </div>
      </div>
    </div>
  );
}
