<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/state';
  import BoonconLogo from '$lib/components/BoonconLogo.svelte';
  import type { NavItem } from '$lib/content/site';

  export let name: string;
  export let nav: NavItem[];

  let scrolled = false;
  let menuOpen = false;
  let headerEl: HTMLElement | undefined;
  let clickOutsideHandler: ((e: MouseEvent) => void) | undefined;

  const resolveHref = (href: string) => {
    if (!href.startsWith('#')) {
      return href;
    }

    return page.url.pathname === '/' ? href : `/${href}`;
  };

  function closeMenu() {
    menuOpen = false;
  }

  $: if (menuOpen) {
    clickOutsideHandler = (e: MouseEvent) => {
      if (headerEl && !headerEl.contains(e.target as Node)) {
        menuOpen = false;
      }
    };
    document.addEventListener('click', clickOutsideHandler);
  } else {
    if (clickOutsideHandler) {
      document.removeEventListener('click', clickOutsideHandler);
      clickOutsideHandler = undefined;
    }
  }

  onMount(() => {
    const updateScrolled = () => {
      scrolled = window.scrollY > 8;
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') menuOpen = false;
    };

    updateScrolled();
    window.addEventListener('scroll', updateScrolled, { passive: true });
    document.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('scroll', updateScrolled);
      document.removeEventListener('keydown', handleEscape);
    };
  });
</script>

<header
  class="site-header"
  class:site-header--scrolled={scrolled}
  class:site-header--menu-open={menuOpen}
  bind:this={headerEl}
>
  <div class="header-inner">
    <a class:brand--scrolled={scrolled} class="brand" href="/" aria-label={`${name} home`}>
      <BoonconLogo />
    </a>

    <button
      type="button"
      class="site-header__menu-btn"
      aria-expanded={menuOpen}
      aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      on:click={() => (menuOpen = !menuOpen)}
    >
      <span class="site-header__menu-btn-bar" aria-hidden="true"></span>
      <span class="site-header__menu-btn-bar" aria-hidden="true"></span>
      <span class="site-header__menu-btn-bar" aria-hidden="true"></span>
    </button>

    <nav class="site-nav" aria-label="Primary">
      {#each nav as item}
        <a class="site-nav__link" href={resolveHref(item.href)} on:click={closeMenu}>
          {item.label}
        </a>
      {/each}
    </nav>
  </div>
</header>
