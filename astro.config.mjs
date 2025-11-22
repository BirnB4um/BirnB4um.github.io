// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://birnb4um.github.io/',
	integrations: [mdx(), sitemap()],
	output: 'static',
});
