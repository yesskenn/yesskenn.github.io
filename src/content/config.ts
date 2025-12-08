import { defineCollection, z } from "astro:content"

const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
})


const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    demoUrl: z.string().nullable().optional(),
    repoUrl: z.string().nullable().optional(),
  }),
})

const legal = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
})

export const collections = { blog, projects, legal, services }
