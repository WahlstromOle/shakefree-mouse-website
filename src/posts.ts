// Published articles, newest first, shared by the Blog page, topic pages, Related guides and the sitemap
import { getCollection } from "astro:content";

export async function publishedPosts() {
  return (await getCollection("blog", ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
