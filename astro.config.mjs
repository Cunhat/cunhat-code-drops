import { defineConfig } from 'astro/config';
import remarkCodeTitles from 'remark-code-titles';
import rehypeSlug from 'rehype-slug';
import mdx from '@astrojs/mdx';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkCodeTitles],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            class: 'heading-link heading-link--hidden---effects',
            'data-heading-link': true,
          },
          behavior: 'wrap',
        },
      ],
    ],
    shikiConfig: {
      theme: 'rose-pine',
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
  integrations: [tailwind()],
});
