import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    pubDatetime: z.date(),
    modDatetime: z.date().optional(),
    description: z.string(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()),
    featured: z.boolean().optional(),
    ogImage: z.string().optional(),
    canonicalURL: z.string().optional(),
    hideEditPost: z.boolean().optional(),
    timezone: z.string().optional(),
  }),
});

export const collections = {
  blog,
};
