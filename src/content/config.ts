import { z, defineCollection } from "astro:content";

// 1. The Weblog Schema
const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    published_at: z.date(),
    isDraft: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
  }),
});

// 2. The Cinema Schema
const filmsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    director: z.string(),
    format: z.string(), // e.g., 'Blu-Ray', 'VHS'
    cover_img: z.string(),
    rating: z.number().min(1).max(10).optional(), // 1-10 scale
    date_watched: z.date().optional(),
  }),
});

// 3. The Bookshelf Schema
const booksCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    format: z.string(), // e.g., 'Hardcover', 'Kindle'
    cover_img: z.string(),
    rating: z.number().min(1).max(10).optional(),
    date_read: z.date().optional(),
  }),
});

// 4. The Portfolio Schema (Your iOS Apps)
const appsCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    icon_url: z.string(),
    app_store_url: z.string().url().optional(), // Ensures it's a valid link!
    status: z.enum(["Active", "Archived", "In Development"]),
  }),
});

// 5. The Inventory Schema (Gear & Coffee)
const gearCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    maker: z.string(),
    category: z.string(),
    cover_img: z.string(),
    acquired_date: z.date().optional(),
  }),
});

const ideasCollection = defineCollection({
  type: "content",
  schema: z.object({
    date_published: z.date(),
  }),
});

// Export a single `collections` object to register your collections
export const collections = {
  posts: postsCollection,
  films: filmsCollection,
  books: booksCollection,
  apps: appsCollection,
  gear: gearCollection,
  ideas: ideasCollection,
};
