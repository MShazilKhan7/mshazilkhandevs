    import { defineField, defineType } from "sanity";

    export const projecType = defineType({
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
        name: "title",
        title: "Title",
        type: "string",
        },
        {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
            source: "title",
            maxLength: 96,
        },
        },
        {
        name: "thumbnail",
        title: "Thumbnail",
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
        },
        {
        name: "tags",
        title: "Tags",
        type: "array",
        of: [{ type: "reference", to: { type: "tags" } }],
        },
        {
        name: "contribution",
        title: "Contribution",
        type: "text",
        },
        {
        name: "projectDetails",
        title: "Project Details",
        type: "array",
        of: [
            {
            type: "object",
            // how the object looks like
            fields: [
                {
                name: "image",
                title: "Image",
                type: "image",
                options: {
                    hotspot: true,
                },
                },
                {
                name: "text",
                title: "Description",
                type: "text",
                },
            ],
            },
        ],
        },
    ],
    });
