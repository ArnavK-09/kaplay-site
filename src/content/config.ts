import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    type: "content", // v2.5.0 and later
    schema: z.object({
        title: z.string(),
        description: z.string(),
        author: z.string(),
        image: z.optional(z.string()),
        date: z.string(),
        hidde: z.optional(z.boolean()),
        version: z.optional(z.string()),
    }),
});

const guideCollection = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./guides/",
    }),
    schema: z.object({
        url: z.optional(z.string()),
        title: z.string(),
        description: z.string(),
        order: z.number(),
        image: z.optional(z.string()),
        category: z.optional(z.string()),
        version: z.optional(z.string()),
    }),
});

const booksCollection = defineCollection({
    type: "content", // v2.5.0 and later
    schema: z.object({
        title: z.string(),
        description: z.string(),
        chapter: z.number(),
        version: z.optional(z.string()),
    }),
});

const miscCollection = defineCollection({
    type: "content", // v2.5.0 and later
    schema: z.object({
        title: z.string(),
        description: z.string(),
        version: z.optional(z.string()),
    }),
});

export const collections = {
    blog: blogCollection,
    guides: guideCollection,
    books: booksCollection,
    misc: miscCollection,
};
