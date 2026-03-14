<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/state';
  import BoonconLogo from '$lib/components/BoonconLogo.svelte';
  import type { NavItem } from '$lib/content/site';

  export let name: string;
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
    <a class:brand--scrolled={scrolled} class="brand" href="/" aria-label={`${name} home`}>
      <BoonconLogo />
    </a>

    <nav class="site-nav" aria-label="Primary">
      {#each nav as item}
        <a class="site-nav__link" href={resolveHref(item.href)}>{item.label}</a>
      {/each}
    </nav>
  </div>
</header>
