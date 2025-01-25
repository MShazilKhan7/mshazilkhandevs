import { defineField, defineType } from "sanity";

export const legalType = defineType({
  name: "legal",
  title: "Legal",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "meta_description",
      title: "Meta Description",
      type: "text",
    }),

    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],
});
