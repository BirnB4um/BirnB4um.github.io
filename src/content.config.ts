import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const zDateDMY = z.string().transform((str) => {
  const [day, month, year] = str.split(".").map(Number);
  return new Date(year, month - 1, day);
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			pubDate: zDateDMY,
			updatedDate: zDateDMY.optional(),
			thumbnail: image().optional(),
		}),
});

export const collections = {  projects };
