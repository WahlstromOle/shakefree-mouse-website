# ShakeFree Mouse website

The website for ShakeFree Mouse, at https://shakefreemouse.com (hosted free on GitHub Pages). Plain HTML and CSS, nothing to build.

| File | Address | What it is |
|---|---|---|
| `index.html` | `/` | Home: how it works, features, live demo, plans, Microsoft Store and Buy |
| `activate.html` | `/activate?key=...` | Lemon Squeezy's **Activate** button after buying links here; it opens the app with `shakefree://activate?key=...` and shows the key with a Copy button |
| `privacy.html` | `/privacy` | Privacy policy (for the Microsoft Store listing) |
| `support.html` | `/support` | Help & contact (for the Microsoft Store listing) |
| `style.css` | | Shared look (the app's blue on white, light mode only) |
| `icon.svg` | | The app's blue pointer icon, used as the logo and the browser tab icon |
| `fonts/` | | The Figtree font, hosted here so no outside files are loaded (licence in `OFL.txt`) |
| `robots.txt`, `sitemap.xml` | | For search engines; keeps `/activate` out of search results |
| `CNAME` | | Tells GitHub Pages to use shakefreemouse.com |

## Things to change later

- **Microsoft Store link**: the “Download from Microsoft Store” buttons (also on the activation page) and the “Try it free” button in every page's top menu point to `https://apps.microsoft.com/` for now. Replace that address with the app's own Store listing once it is published.
- **Live Lemon Squeezy link**: the “Buy a key” and “Choose …” plan buttons (five in `index.html`, one at the end of each blog guide) point to the *test mode* checkout. Replace them with the live checkout link before release.
- **Activation page must stay private**: `activate.html` must never get analytics, outside fonts or other outside files, because the licence key is in its address. This is also why the font is hosted on the site instead of loaded from Google Fonts.

## Domain settings (at the company you bought shakefreemouse.com from)

Add these DNS records, then GitHub can switch on HTTPS:

- Four **A** records for `@` (the bare domain): `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- One **CNAME** record for `www`: `wahlstromole.github.io`
