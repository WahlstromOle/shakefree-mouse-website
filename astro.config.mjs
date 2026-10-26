import { defineConfig } from "astro/config";

// Pages are written out as privacy.html, terms.html … so every address stays exactly as before
// (/privacy, /terms, /activate, /mouse-hand-tremor).
export default defineConfig({
  site: "https://shakefreemouse.com",
  build: { format: "file" },
  trailingSlash: "never",
});
