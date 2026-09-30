import DashboardViewOverview from "./views/DashboardViewOverview";
import DashboardViewStories from "./views/DashboardViewStories";
import DashboardViewResearchProjects from "./views/DashboardViewResearchProjects";

export const dashboardViews = [
  { pageName: "Overview", view: <DashboardViewOverview /> },
  { pageName: "Stories", view: <DashboardViewStories /> },
  { pageName: "Research Projects", view: <DashboardViewResearchProjects /> },
];
