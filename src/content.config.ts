import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { topicIds } from "./topics";

// Blog articles: one Markdown file each in src/content/blog. The file name becomes the address,
// e.g. mouse-hand-tremor.md → shakefreemouse.com/mouse-hand-tremor
const blog = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),   // for Google's result snippet
    summary: z.string(),       // one line on the Blog page
    keyword: z.string(),       // the search phrase the article targets (not shown)
    topic: z.enum(topicIds),   // one of the ids in src/topics.ts
    featured: z.boolean().default(false), // true = in "Start here" on the Blog page (keep it to about 3)
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    readTime: z.number(),      // minutes
    image: z.string(),         // a photo in public/images
    imageWidth: z.number(),
    imageHeight: z.number(),
    imageAlt: z.string(),
    lead: z.string(),          // the larger opening paragraph
    draft: z.boolean().default(false), // true = not published yet
  }),
});

export const collections = { blog };
