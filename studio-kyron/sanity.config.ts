import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "NY Oncologists - Content Studio",

  projectId: "oniivxbv",
  dataset: "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("About")
              .child(S.documentTypeList("about").title("About Content")),
            S.listItem()
              .title("Services")
              .child(S.documentTypeList("service").title("Services")),
            S.listItem()
              .title("Providers")
              .child(
                S.documentTypeList("provider").title("Healthcare Providers")
              ),
            S.listItem()
              .title("Locations")
              .child(S.documentTypeList("location").title("Office Locations")),
            S.listItem()
              .title("Resources")
              .child(S.documentTypeList("resource").title("Resources")),
            S.listItem()
              .title("Contact Info")
              .child(
                S.documentTypeList("contactInfo").title("Contact Information")
              ),
            S.listItem()
              .title("Contact Forms")
              .child(
                S.documentTypeList("contact").title("Contact Submissions")
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
