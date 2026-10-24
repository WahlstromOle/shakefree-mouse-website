# ShakeFree Mouse website

The website for ShakeFree Mouse, at https://shakefreemouse.com (hosted free on GitHub Pages). Plain HTML and CSS, nothing to build.

| File | Address | What it is |
|---|---|---|
| `index.html` | `/` | Home: what the app does, trial, plans, Buy |
| `activate.html` | `/activate?key=...` | Lemon Squeezy's **Activate** button after buying links here; it opens the app with `shakefree://activate?key=...` and shows the key with a Copy button |
| `privacy.html` | `/privacy` | Privacy policy (for the Microsoft Store listing) |
| `support.html` | `/support` | Help & contact (for the Microsoft Store listing) |
| `style.css`, `icon.svg` | | Shared look and the blue pointer icon |
| `CNAME` | | Tells GitHub Pages to use shakefreemouse.com |

## Things to change later

- **Microsoft Store link**: in `index.html`, replace the “Coming soon to the Microsoft Store” line with a link to the Store listing once the app is published.
- **Live Lemon Squeezy link**: the two “Buy a key” links in `index.html` point to the *test mode* checkout. Replace them with the live checkout link before release.
- **Activation page must stay private**: `activate.html` must never get analytics, outside fonts or other outside files, because the licence key is in its address.

## Domain settings (at the company you bought shakefreemouse.com from)

Add these DNS records, then GitHub can switch on HTTPS:

- Four **A** records for `@` (the bare domain): `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- One **CNAME** record for `www`: `wahlstromole.github.io`
