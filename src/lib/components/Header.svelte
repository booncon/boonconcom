<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/state';
  import type { NavItem } from '$lib/content/site';

  export let name: string;
  export let byline: string;
  export let markSrc: string;
  export let nav: NavItem[];

  let scrolled = false;

  const resolveHref = (href: string) => {
    if (!href.startsWith('#')) {
      return href;
    }

    return page.url.pathname === '/' ? href : `/${href}`;
  };

  onMount(() => {
    const updateScrolled = () => {
      scrolled = window.scrollY > 8;
    };

    updateScrolled();
    window.addEventListener('scroll', updateScrolled, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateScrolled);
    };
  });
</script>

<header class:site-header--scrolled={scrolled} class="site-header">
  <div class="header-inner">
    <a class="brand" href="/" aria-label={`${name} home`}>
      <img class="brand__mark" src={markSrc} alt="" width="48" height="48" />
      <span class="brand__text-wrap">
        <span class="brand__name">{name}</span>
        <span class="brand__meta">{byline}</span>
      </span>
    </a>

    <nav class="site-nav" aria-label="Primary">
      {#each nav as item}
        <a class="site-nav__link" href={resolveHref(item.href)}>{item.label}</a>
      {/each}
    </nav>
  </div>
</header>
