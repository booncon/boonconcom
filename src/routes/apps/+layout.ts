import { site } from '$lib/content/site';

// Hidden apps pages aren't prerendered, so adapter-static leaves them out of the build.
export const prerender = site.apps.visible;
