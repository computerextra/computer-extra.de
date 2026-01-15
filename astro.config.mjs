import { defineConfig, envField } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://computer-extra.de",
  integrations: [react(), mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      POSTHOG_KEY: envField.string({ context: "client", access: "public" }),
      POSTHOG_HOST: envField.string({ context: "client", access: "public" }),
    },
  },
});
