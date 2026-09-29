import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { apiVersion, dataset, projectId } from "./src/sanity/env";

export default defineConfig({
  name: "default",
  title: "YARA",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Stories")
              .child(S.documentTypeList("post").title("Stories").defaultOrdering([{ field: "publishedAt", direction: "desc" }])),
            S.divider(),
            S.listItem()
              .title("Legacy (old site, not shown)")
              .child(
                S.list()
                  .title("Legacy")
                  .items([S.documentTypeListItem("blog").title("Old blog posts"), S.documentTypeListItem("newsAnnouncement").title("Old news")]),
              ),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: { types: schemaTypes },
  document: {
    // Only Stories can be created from the "new document" menu.
    newDocumentOptions: (prev, { creationContext }) =>
      creationContext.type === "global" ? prev.filter((t) => t.templateId === "post") : prev,
  },
});
