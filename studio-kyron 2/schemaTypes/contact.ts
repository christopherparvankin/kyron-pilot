import { defineType, defineField } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact Information",
  type: "document",
  fields: [
    defineField({
      name: "practiceName",
      title: "Practice Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainPhone",
      title: "Main Phone Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainEmail",
      title: "Main Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "address",
      title: "Main Address",
      type: "object",
      fields: [
        {
          name: "street",
          type: "string",
          title: "Street Address",
        },
        {
          name: "suite",
          type: "string",
          title: "Suite/Unit",
        },
        {
          name: "city",
          type: "string",
          title: "City",
        },
        {
          name: "state",
          type: "string",
          title: "State",
        },
        {
          name: "zipCode",
          type: "string",
          title: "ZIP Code",
        },
      ],
    }),
    defineField({
      name: "hours",
      title: "Office Hours",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "day",
              type: "string",
              title: "Day",
              options: {
                list: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
              },
            },
            {
              name: "open",
              type: "string",
              title: "Open Time",
            },
            {
              name: "close",
              type: "string",
              title: "Close Time",
            },
            {
              name: "closed",
              type: "boolean",
              title: "Closed",
              initialValue: false,
            },
          ],
        },
      ],
    }),
    defineField({
      name: "emergencyPhone",
      title: "Emergency Phone",
      type: "string",
    }),
    defineField({
      name: "website",
      title: "Website URL",
      type: "url",
    }),
    defineField({
      name: "socialMedia",
      title: "Social Media",
      type: "object",
      fields: [
        {
          name: "facebook",
          type: "url",
          title: "Facebook URL",
        },
        {
          name: "twitter",
          type: "url",
          title: "Twitter URL",
        },
        {
          name: "linkedin",
          type: "url",
          title: "LinkedIn URL",
        },
        {
          name: "instagram",
          type: "url",
          title: "Instagram URL",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "practiceName",
      subtitle: "mainPhone",
    },
  },
});
