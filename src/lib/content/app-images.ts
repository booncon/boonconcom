import type { Picture } from '@sveltejs/enhanced-img';

// Drop files into src/lib/assets/apps/<slug>/: icon.png, plus screenshot-1.png, screenshot-2.png, ...
const images = import.meta.glob<Picture>('/src/lib/assets/apps/*/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
  query: { enhanced: true },
});

const forApp = (slug: string) =>
  Object.entries(images)
    .filter(([path]) => path.split('/').at(-2) === slug)
    .sort(([a], [b]) => a.localeCompare(b, 'en', { numeric: true }));

export const appIcon = (slug: string) =>
  forApp(slug).find(([path]) => /\/icon\.\w+$/.test(path))?.[1];

export const appScreenshots = (slug: string) =>
  forApp(slug)
    .filter(([path]) => /\/screenshot[^/]*$/.test(path))
    .map(([, image]) => image);
