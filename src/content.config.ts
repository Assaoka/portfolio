import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const papers = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/papers' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    super_tag: z.string(), // ex: "ENIAC 2026", "PROPOR 2026"
    venue: z.string(), // ex: "ENIAC", "PROPOR"
    year: z.number(),
    firstAuthor: z.boolean().default(false),
    tldr: z.string(),
    abstract: z.string().optional(),
    urls: z.record(z.string()).default({}),
    bibtex: z.string().optional(),
    citations: z.number().optional(),
    previewImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    role: z.string().optional(), // e.g., "Solo Developer", "Lead Architect"
    year: z.number(),
    super_tag: z.string(), // e.g., "Generative AI", "Educational AI", "Web"
    tags: z.array(z.string()).default([]),
    urls: z.record(z.string()).default({}),
    previewImage: z.string().optional(),
    featured: z.number().default(0),
    paperSlug: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      coverImage: image().optional(),
      canonicalUrl: z.string().url().optional(),
    }),
});

export const collections = {
  papers,
  projects,
  blog,
};
