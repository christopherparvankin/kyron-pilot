import { defineType, defineField } from "sanity";

export default defineType({
  name: "about",
  title: "About Us",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      description: "The main title for the About Us page",
      initialValue: "About GI Alliance",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description: "Subtitle that appears below the main title",
      initialValue:
        "Leading gastroenterologists in Florida providing expert care for all your GI needs",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      description: "Background image for the hero section",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "ourStoryTitle",
      title: "Our Story Section Title",
      type: "string",
      initialValue: "Our Story",
    }),
    defineField({
      name: "ourStoryContent",
      title: "Our Story Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Number", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                title: "URL",
                name: "link",
                type: "object",
                fields: [
                  {
                    title: "URL",
                    name: "href",
                    type: "url",
                  },
                ],
              },
            ],
          },
        },
      ],
      description: "The main content for the Our Story section",
    }),
    defineField({
      name: "whyChooseUsTitle",
      title: "Why Choose Us Section Title",
      type: "string",
      initialValue: "Why Choose Us?",
    }),
    defineField({
      name: "whyChooseUsItems",
      title: "Why Choose Us Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "item",
              title: "Item Text",
              type: "string",
            },
          ],
          preview: {
            select: {
              title: "item",
            },
          },
        },
      ],
      description: "List of reasons to choose your practice",
    }),
    defineField({
      name: "ctaTitle",
      title: "Call to Action Title",
      type: "string",
      initialValue: "Ready to Schedule Your Appointment?",
    }),
    defineField({
      name: "ctaAppointmentText",
      title: "Appointment Button Text",
      type: "string",
      initialValue: "Request Appointment",
    }),
    defineField({
      name: "ctaCallText",
      title: "Call Button Text",
      type: "string",
      initialValue: "Call Now",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
