import { defineType, defineField } from "sanity";

export const galleryType = defineType({
  name: "gallery",
  type: "document",
  title: "Content Gallery",
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
      name: "thumbnail",
      title: "thumbnail image",
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
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tags" } }],
    }),
    defineField({
      name: "isSeries",
      title: "Is Series",
      type: "boolean",
      options: {
        layout: "checkbox",
      },
    }),
    defineField({
      name: "youtube",
      title: "Youtube Video",
      type: "url",
    }),
    defineField({
      name: "series",
      title: "Series",
      type: "reference",
      to: { type: "series" },
    }),

    {
      name: "zoom",
      type: "boolean",
      title: "Zoom enabled",
      description: "Should we enable zooming of images?",
    },
  ],
});
