import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("posts");
  const films = await getCollection("films");
  const books = await getCollection("books");

  // Combine and sort by date
  const items = [...posts, ...films, ...books].sort((a, b) => {
    const dateA = new Date(
      a.data.published_at || a.data.date_watched || a.data.date_read,
    );
    const dateB = new Date(
      b.data.published_at || b.data.date_watched || b.data.date_read,
    );
    return dateB - dateA;
  });

  return rss({
    title: "imkdir. | Digital Museum",
    description: "A personal archive of thoughts, cinema, and gear.",
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      pubDate:
        item.data.published_at || item.data.date_watched || item.data.date_read,
      link: `/${item.collection}/${item.slug}/`,
    })),
  });
}
