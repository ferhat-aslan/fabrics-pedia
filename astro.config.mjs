import { defineConfig, passthroughImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from "./src/utils/readTime.ts";

// https://astro.build/config
export default defineConfig({
  site: "https://fabricspedia.com/",
  image: {
    service: passthroughImageService(),
  }, // Write here your website url
  markdown: {
    remarkPlugins: [remarkReadingTime],
    drafts: true,
    shikiConfig: {
      theme: "material-theme-palenight",
      wrap: true,
    },
  },
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "material-theme-palenight",
        wrap: true,
      },
      drafts: true,
    }),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
    }),
    tailwind(),
  ],
});
