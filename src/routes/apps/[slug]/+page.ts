import { error } from '@sveltejs/kit';
import { site } from '$lib/content/site';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => site.apps.items.map(({ slug }) => ({ slug }));

export const load: PageLoad = ({ params }) => {
  const app = site.apps.items.find((a) => a.slug === params.slug);
  if (!app) error(404, 'App not found');
  return { app };
};
