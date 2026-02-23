import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    workInProgress: z.boolean().default(false),
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    repoUrl: z.string().url().optional(),
    image: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
  }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    workInProgress: z.boolean().default(false),
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
};
