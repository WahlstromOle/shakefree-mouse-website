// Published articles, newest first, shared by the Blog page, topic pages, Related guides and the sitemap.
// An article dated in the future (Swedish time) stays hidden until the daily build on its date
// (.github/workflows/scheduled-articles.yml).
import { getCollection } from "astro:content";
import { isoDate } from "./dates";

export async function publishedPosts() {
  const today = new Date().toLocaleDateString("sv-SE", { timeZone: "Europe/Stockholm" }); // e.g. "2026-11-03"
  return (await getCollection("blog", ({ data }) => !data.draft && isoDate(data.date) <= today))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
