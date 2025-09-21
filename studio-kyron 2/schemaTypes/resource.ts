import { defineType, defineField } from "sanity";

export default defineType({
  name: "resource",
  title: "Resource",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    }),
    defineField({
      name: "image",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "General Health", value: "general" },
          { title: "Colon Cancer", value: "colon-cancer" },
          { title: "IBD", value: "ibd" },
          { title: "Digestive Health", value: "digestive" },
        ],
      },
    }),
    defineField({
      name: "featured",
      title: "Featured Resource",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "image",
    },
  },
});
