import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeTypoFr from './src/rehype-typo-fr.mjs';

export default defineConfig({
  site: 'https://ppcalexia.com',
  trailingSlash: 'never',
  build: { inlineStylesheets: 'always' },
  integrations: [sitemap()],
  markdown: { rehypePlugins: [rehypeTypoFr] },
});
