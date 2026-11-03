<script lang="ts">
  import { replaceState } from '$app/navigation';
  import { page } from '$app/state';
  import BoonconLogo from '$lib/components/BoonconLogo.svelte';
  import type { NavItem } from '$lib/content/site';

  // Runes mode so hrefs and active state follow client-side navigation;
  // legacy-mode templates don't re-read page.url.
  let {
    name,
    nav,
    trackEvent = null,
  }: {
    name: string;
    nav: NavItem[];
    trackEvent?: ((name: string, props?: Record<string, string>) => void) | null;
  } = $props();

  let scrolled = $state(false);
  let menuOpen = $state(false);
  let headerEl: HTMLElement | undefined = $state();
  let sectionId: string | null = $state(null);

  const onHome = $derived(page.url.pathname === '/');
  const sectionIds = $derived(nav.filter((n) => n.href.startsWith('#')).map((n) => n.href.slice(1)));

  const resolveHref = (href: string) => (href.startsWith('#') && !onHome ? `/${href}` : href);

  // Smooth-scroll in JS for same-page jumps only: a global CSS scroll-behavior: smooth
  // cancels SvelteKit's scroll to the hash when arriving from another page.
  function scrollToSection(e: MouseEvent, href: string) {
    const target = onHome && href.startsWith('#') ? document.getElementById(href.slice(1)) : null;
    if (!target) return;
    e.preventDefault();
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    replaceState(href, {});
  }

  $effect(() => {
    if (!menuOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (headerEl && !headerEl.contains(e.target as Node)) menuOpen = false;
    };
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  });

  $effect(() => {
    const onScroll = () => {
      scrolled = window.scrollY > 8;

      // Snap to the last section only at the true scroll limit, otherwise short
      // sections near the bottom never get a turn.
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0 && window.scrollY >= maxScroll - 5) {
        sectionId = sectionIds.at(-1) ?? null;
        return;
      }

      const triggerY = window.innerHeight * 0.5;
      sectionId =
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
      onclick={() => {
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
        {@const active = isSection
          ? onHome && item.href === `#${sectionId}`
          : page.url.pathname.startsWith(item.href)}
        <a
          class="site-nav__link"
          class:site-nav__link--active={active}
          href={resolveHref(item.href)}
          aria-current={active ? (isSection ? 'location' : 'page') : undefined}
          onclick={(e) => {
            trackEvent?.('Menu link', { label: item.label, destination: item.href });
            menuOpen = false;
            scrollToSection(e, item.href);
          }}
        >
          {item.label}
        </a>
      {/each}
    </nav>
  </div>
</header>
