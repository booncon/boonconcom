<script lang="ts">
  import { site } from '$lib/content/site';

  export let title: string;
  export let description: string;
  export let path: string;

  $: canonical = `${site.meta.url}${path}`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={site.meta.ogImage} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={site.meta.ogImage} />
  <link rel="canonical" href={canonical} />
</svelte:head>
