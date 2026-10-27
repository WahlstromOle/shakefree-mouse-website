// The list of pages for search engines, with every published article added automatically.
// The activation page is left out on purpose (robots.txt also keeps it out of search results).
import { TOPICS } from "../topics";
import { publishedPosts } from "../posts";
import { isoDate } from "../dates";

const pages = ["/", "/blog", "/support", "/privacy", "/terms"];

export async function GET({ site }: { site: URL }) {
  const posts = await publishedPosts();
  const topics = TOPICS.filter((t) => posts.some((p) => p.data.topic === t.id));
  const urls = [
    ...pages.map((p) => `  <url><loc>${new URL(p, site).href}</loc></url>`),
    ...topics.map((t) => `  <url><loc>${new URL("/topics/" + t.id, site).href}</loc></url>`),
    ...posts.map((post) =>
      `  <url><loc>${new URL("/" + post.id, site).href}</loc><lastmod>${isoDate(post.data.updated ?? post.data.date)}</lastmod></url>`),
  ];
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml" } },
  );
}
