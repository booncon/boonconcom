import path from 'node:path';
import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
  plugins: [enhancedImages(), sveltekit()],
  resolve: {
    alias: {
      // Package has no exports field; point to its module entry (Vite 8)
      '@plausible-analytics/tracker': path.resolve(
        'node_modules/@plausible-analytics/tracker/plausible.js'
      ),
    },
  },
});
