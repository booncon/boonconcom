import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

import { mdsvexConfig } from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      // Off so pages can opt out of the build (the hidden /apps section);
      // prerender.handleHttpError still fails the build on broken links.
      strict: false,
    }),
    prerender: {
      entries: ['*'],
      handleHttpError: 'fail',
    },
  },
};

export default config;
