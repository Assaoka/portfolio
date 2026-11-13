import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://assaoka.com',
  prefetch: {
    prefetchAll: true,
  },
  integrations: [
    tailwind(),
    expressiveCode({
      themes: ['github-dark', 'github-light'],
      themeCssSelector: (theme) => (theme.type === 'dark' ? '.dark' : ':root:not(.dark)'),
    }),
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  ],
});
