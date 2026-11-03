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
  // After a menu click, keep the clicked section underlined until the visitor scrolls
  // themselves: near the bottom of a tall screen the page can't bring it to the top.
  let pinned = false;

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
    sectionId = target.id;
    pinned = true;
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
      if (pinned) return;

      // A section is current once its top passes 30% down the viewport: low enough
      // for later sections to reach it, high enough that a short row (Apps) owns the
      // underline once it's at the top. starts[i] is the scroll position where that happens.
      const triggerY = window.innerHeight * 0.3;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      let starts = sectionIds.map(
        (id) => (document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) + window.scrollY - triggerY,
      );

      // On a tall screen the page ends before the last sections get there, so they'd
      // be skipped. Squeeze those starts into the last half-screen of scrolling instead,
      // ending with the last section exactly at the bottom.
      const last = starts.at(-1) ?? 0;
      const end = maxScroll - 5;
      if (last > end) {
        const knee = Math.max(0, maxScroll - window.innerHeight / 2);
        starts = starts.map((s) => (s <= knee ? s : knee + ((s - knee) * (end - knee)) / (last - knee)));
      }

      const current = starts.findLastIndex((s) => s <= window.scrollY);
      sectionId = current >= 0 ? sectionIds[current] : null;
    };

    // Scrolling by hand releases a section pinned by a menu click.
    const unpin = () => (pinned = false);
    const handleKeydown = (e: KeyboardEvent) => {
      unpin();
      if (e.key === 'Escape') menuOpen = false;
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('wheel', unpin, { passive: true });
    window.addEventListener('touchstart', unpin, { passive: true });
    document.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('wheel', unpin);
      window.removeEventListener('touchstart', unpin);
      document.removeEventListener('keydown', handleKeydown);
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
          ? onHome
            ? item.href === `#${sectionId}`
            : page.url.pathname.startsWith(`/${item.href.slice(1)}/`)
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
