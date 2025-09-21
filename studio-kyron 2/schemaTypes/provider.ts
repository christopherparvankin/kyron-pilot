import { defineType, defineField } from "sanity";

export default defineType({
  name: "provider",
  title: "Provider",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Professional Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Photo",
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
      name: "bio",
      title: "Biography",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    }),
    defineField({
      name: "specialties",
      title: "Specialties",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "location",
      title: "Practice Location",
      type: "reference",
      to: [{ type: "location" }],
      description: "Select the location where this provider works",
    }),
    defineField({
      name: "education",
      title: "Education",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "degree",
              type: "string",
              title: "Degree",
            },
            {
              name: "institution",
              type: "string",
              title: "Institution",
            },
            {
              name: "year",
              type: "string",
              title: "Year",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "certifications",
      title: "Certifications",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "languages",
      title: "Languages Spoken",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title",
      media: "image",
    },
  },
});
