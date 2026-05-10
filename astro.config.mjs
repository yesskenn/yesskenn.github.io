import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

import { SITE } from "./src/consts";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: SITE.URL,
  vite: {
    root: process.cwd(),
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      name: "Space Mono",
      cssVariable: "--font-space",
      provider: fontProviders.google(),
    },
    {
      name: "Work Sans",
      cssVariable: "--font-work",
      provider: fontProviders.google(),
    },
  ],
  integrations: [sitemap()],
});
