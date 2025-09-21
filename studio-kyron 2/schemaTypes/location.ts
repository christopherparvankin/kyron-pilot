import { defineType, defineField } from "sanity";

export default defineType({
  name: "location",
  title: "Location",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Location Name",
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
      name: "address",
      title: "Address",
      type: "object",
      fields: [
        {
          name: "street",
          type: "string",
          title: "Street Address",
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
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
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
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "address.city",
      media: "image",
    },
  },
});
