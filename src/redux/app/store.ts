import { configureStore } from "@reduxjs/toolkit";
import storiesReducer from "../features/stories/reducer";
import researchProjectsReducer from "../features/research_projects/reducer";

export const store = configureStore({
  reducer: {
    stories: storiesReducer,
    researchProjects: researchProjectsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
