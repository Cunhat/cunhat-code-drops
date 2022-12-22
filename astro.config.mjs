import { defineConfig } from 'astro/config';
import remarkCodeTitles from "remark-code-titles";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({

  markdown: {
    remarkPlugins: [remarkCodeTitles],
    shikiConfig: {
      theme: "rose-pine",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
  integrations: [tailwind()]
});