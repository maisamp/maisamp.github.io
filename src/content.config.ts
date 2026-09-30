import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Anything with `draft: true` shows up in `npm run dev` but never on the live site.
const draft = z.boolean().default(false);

const blog = defineCollection({
	loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		draft,
	}),
});

const bio = defineCollection({
	loader: glob({ base: "./src/content/bio", pattern: "**/*.md" }),
	schema: z.object({ label: z.string(), order: z.number() }),
});

const projects = defineCollection({
	loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			summary: z.string(),
			date: z.coerce.date(),
			// Either a file next to the .md (./thumb.png) or a path in /public (/assets/x.gif — use this for GIFs so they stay animated)
			image: z.union([image(), z.string()]).optional(),
			imageAlt: z.string().default(""),
			links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
			tags: z.array(z.string()).default([]),
			draft,
		}),
});

const books = defineCollection({
	loader: glob({ base: "./src/content/books", pattern: "**/*.md" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			author: z.string(),
			// Cover is fetched from Open Library by ISBN unless you provide `cover`
			isbn: z.string().optional(),
			cover: image().optional(),
			rating: z.number().min(0).max(5),
			finished: z.coerce.date(),
			take: z.string(),
			draft,
		}),
});

const human = defineCollection({
	loader: glob({ base: "./src/content/human", pattern: "**/*.md" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			date: z.coerce.date(),
			photos: z.array(z.object({ src: image(), alt: z.string() })).min(1),
			draft,
		}),
});

const resume = defineCollection({
	loader: glob({ base: "./src/content/resume", pattern: "**/*.md" }),
	schema: z.object({ pdf: z.string().optional(), updated: z.coerce.date() }),
});

export const collections = { blog, bio, projects, books, human, resume };
