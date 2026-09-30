"use client";

import { useAppSelector } from "@/redux/app/hooks";
import { selectTableListData as selectStoriesData } from "@/redux/features/stories/reducer";
import { selectTableListData as selectResearchProjectsData } from "@/redux/features/research_projects/reducer";

export default function DashboardViewOverview() {
  const storiesData = useAppSelector(selectStoriesData);
  const researchProjectsData = useAppSelector(selectResearchProjectsData);

  const sections = [
    { label: "Stories", count: storiesData?.data?.length ?? 0 },
    { label: "Research Projects", count: researchProjectsData?.data?.length ?? 0 },
  ];

  return (
    <div className="relative flex h-full w-full flex-col">
      <div className="flex h-full flex-1 flex-col p-6">
        <div className="flex h-[55px] flex-none flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-3 font-medium text-black">
            Overview
          </div>
        </div>

        <div className="w-full flex-1">
          <div className="grid grid-cols-3 gap-4">
            {sections.map((section) => (
              <div
                key={section.label}
                className="flex h-[150px] flex-col justify-between rounded-xl bg-white p-6"
              >
                <h6 className="font-medium text-black">{section.label}</h6>
                <p className="line-clamp-1 text-5xl text-black">{section.count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
