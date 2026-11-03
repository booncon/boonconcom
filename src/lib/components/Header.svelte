<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/state';
  import BoonconLogo from '$lib/components/BoonconLogo.svelte';
  import type { NavItem } from '$lib/content/site';

  export let name: string;
  export let nav: NavItem[];
  export let trackEvent: ((name: string, props?: Record<string, string>) => void) | null = null;

  let scrolled = false;
  let menuOpen = false;
  let headerEl: HTMLElement | undefined;
  let clickOutsideHandler: ((e: MouseEvent) => void) | undefined;
  let activeId: string | null = null;

  const resolveHref = (href: string) =>
    href.startsWith('#') && page.url.pathname !== '/' ? `/${href}` : href;

  $: if (page.url.pathname !== '/') activeId = null;

  $: if (menuOpen) {
    clickOutsideHandler = (e: MouseEvent) => {
      if (headerEl && !headerEl.contains(e.target as Node)) {
        menuOpen = false;
      }
    };
    document.addEventListener('click', clickOutsideHandler);
  } else if (clickOutsideHandler) {
    document.removeEventListener('click', clickOutsideHandler);
    clickOutsideHandler = undefined;
  }

  onMount(() => {
    const sectionIds = nav
      .filter((n) => n.href.startsWith('#'))
      .map((n) => n.href.slice(1));

    const onScroll = () => {
      scrolled = window.scrollY > 8;
      if (page.url.pathname !== '/') return;

      // Snap to the last section only at the true scroll limit, otherwise short
      // sections near the bottom never get a turn.
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0 && window.scrollY >= maxScroll - 5) {
        activeId = sectionIds[sectionIds.length - 1] ?? null;
        return;
      }

      const triggerY = window.innerHeight * 0.5;
      activeId =
        sectionIds
          .filter((id) => (document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <= triggerY)
          .at(-1) ?? null;
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') menuOpen = false;
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('scroll', onScroll);
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
    <a class="brand" href="/" aria-label={`${name} home`}>
      <BoonconLogo />
    </a>

    <button
      type="button"
      class="site-header__menu-btn"
      aria-expanded={menuOpen}
      aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      on:click={() => {
        trackEvent?.('Menu toggle', { state: menuOpen ? 'close' : 'open' });
        menuOpen = !menuOpen;
      }}
    >
      <span class="site-header__menu-btn-bar" aria-hidden="true"></span>
      <span class="site-header__menu-btn-bar" aria-hidden="true"></span>
      <span class="site-header__menu-btn-bar" aria-hidden="true"></span>
    </button>

    <nav class="site-nav" aria-label="Primary">
      {#each nav as item}
        {@const isSection = item.href.startsWith('#')}
        {@const active = isSection ? item.href === `#${activeId}` : page.url.pathname.startsWith(item.href)}
        <a
          class="site-nav__link"
          class:site-nav__link--active={active}
          href={resolveHref(item.href)}
          aria-current={active ? (isSection ? 'location' : 'page') : undefined}
          on:click={() => {
            trackEvent?.('Menu link', { label: item.label, destination: item.href });
            menuOpen = false;
          }}
        >
          {item.label}
        </a>
      {/each}
    </nav>
  </div>
</header>
