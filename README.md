# ShakeFree Mouse website

The website for ShakeFree Mouse, at https://shakefreemouse.com. Built with [Astro](https://astro.build) and hosted free on GitHub Pages. Every change that reaches `main` on GitHub is built and published automatically within a couple of minutes (`.github/workflows/deploy.yml`).

## Where things are

| File | Address | What it is |
|---|---|---|
| `src/pages/index.astro` | `/` | Home: the story, how it helps, live demo, plans, Microsoft Store and Buy |
| `src/pages/activate.astro` | `/activate?key=...` | Lemon Squeezy's **Activate** button after buying links here; it opens the app with `shakefree://activate?key=...`, shows the key with a Copy button, and helps people who haven't installed the app yet |
| `src/pages/support.astro` | `/support` | Help & contact (for the Microsoft Store listing) |
| `src/pages/privacy.astro` | `/privacy` | Privacy policy (for the Microsoft Store listing) |
| `src/pages/terms.astro` | `/terms` | Terms & refunds (no refunds, because of the free trial) |
| `src/pages/blog.astro` | `/blog` | "Start here" (featured articles), then a shelf per topic with its 4 newest guides; filled in by itself |
| `src/pages/topics/[topic].astro` | `/topics/<id>` | One page per topic listing all its guides (only topics that have articles) |
| `src/topics.ts` | | The four topics: Computer setup, Tools and devices, About tremor, Everyday life |
| `src/content/blog/*.md` | `/<file name>` | The articles, one Markdown file each |
| `src/pages/[slug].astro` | | The page layout every article uses (topic link, photo, text, Download/Buy box, Related guides) |
| `src/pages/sitemap.xml.ts` | `/sitemap.xml` | The page list for search engines; articles are added by themselves |
| `src/layouts/Base.astro` | | The top menu, footer and `<head>` shared by every page: change them here only |
| `src/links.ts` | | The Microsoft Store and Lemon Squeezy checkout links used by every button |
| `public/style.css` | | Shared look (the app's blue on white, light mode only) |
| `public/anim.js` | | Calm entrance animations on the home page (off when Windows animations are off) |
| `public/images/` | | Photos; `share.jpg` is the picture shown when the site is shared |
| `public/icon.svg`, `public/fonts/` | | The logo and the Figtree font, hosted here so no outside files are loaded |
| `public/robots.txt`, `public/CNAME` | | Keeps `/activate` out of search results; tells GitHub Pages to use shakefreemouse.com |

## Adding an article

1. Add a Markdown file to `src/content/blog/`, e.g. `essential-tremor-computer.md`. The file name becomes the address: `shakefreemouse.com/essential-tremor-computer`.
2. Start it with the details between `---` lines, copied from `mouse-hand-tremor.md` (title, description, summary, keyword, topic, date, readTime, image and its size and description, lead). `topic` is one of `computer-setup`, `tools-and-devices`, `about-tremor`, `everyday-life`. `featured: true` puts it in "Start here" (keep that to about 3). `draft: true` keeps it unpublished. Put a title containing a colon in quotes.
3. Write the text in Markdown: `## Heading`, `- list item`, `**bold**`, `[link text](page.html)`.
4. Put its photo in `public/images/`.

The Blog page, its topic shelf and topic page, Related guides, the sitemap and the article's page are all made from that file. Don't put prices in articles; link to the home page's pricing instead.

## Trying it on this PC

- `npm run build` builds the site into `dist/`.
- `npm run dev` shows it at http://localhost:4321 and updates as files change.

## Things to change later

- **Microsoft Store link** and **live Lemon Squeezy checkout link**: change them in `src/links.ts`; every button on the site follows. Each plan can get its own checkout link once Lemon Squeezy is live.
- **Activation page must stay private**: it must never get analytics, outside fonts or other outside files, because the licence key is in its address. This is also why the font is hosted on the site.

## Domain settings (at GoDaddy)

- Four **A** records for `@` (the bare domain): `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- One **CNAME** record for `www`: `wahlstromole.github.io`
