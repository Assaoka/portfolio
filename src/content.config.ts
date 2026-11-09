import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const papers = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/papers' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(), // ex: "NeurIPS 2025", "ICLR 2026", "arXiv preprint"
    year: z.number(),
    abstract: z.string(),
    arxivUrl: z.string().url().optional(),
    pdfUrl: z.string().url().optional(),
    codeUrl: z.string().url().optional(),
    bibtex: z.string().optional(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    role: z.string(), // ex: "Lead Architect", "Solo Developer"
    date: z.coerce.date(),
    techStack: z.array(z.string()), // ex: ["PyTorch", "vLLM", "Triton", "TypeScript"]
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    paperSlug: z.string().optional(), // Vincula o projeto ao paper correspondente
    featured: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    canonicalUrl: z.string().url().optional(),
  }),
});

export const collections = {
  papers,
  projects,
  blog,
};
