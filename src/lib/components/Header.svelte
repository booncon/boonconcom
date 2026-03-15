<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { page } from '$app/state';
  import { goto, replaceState } from '$app/navigation';
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
  let scrollProgress = 0;
  let navEl: HTMLElement | undefined;
  let indicatorStyle: { left: number; top: number; width: number; height: number } | null = null;
  let lastNavClickTime = 0;
  let headerOnDark = false;
  // Computed once on mount: sections that have a dark background
  let darkSections: HTMLElement[] = [];

  function detectHeaderLuminance() {
    if (!headerEl || darkSections.length === 0) {
      headerOnDark = false;
      return;
    }
    const headerBottom = headerEl.getBoundingClientRect().bottom;
    headerOnDark = darkSections.some((el) => {
      const r = el.getBoundingClientRect();
      return r.top < headerBottom && r.bottom > 0;
    });
  }

  $: if (typeof window !== 'undefined' && page.url.pathname === '/' && activeId) {
    tick().then(() => {
      const link = navEl?.querySelector<HTMLAnchorElement>(
        `a[href="#${activeId}"]`
      );
      if (link && navEl) {
        const r = link.getBoundingClientRect();
        const navR = navEl.getBoundingClientRect();
        indicatorStyle = {
          left: r.left - navR.left,
          top: r.top - navR.top,
          width: r.width,
          height: r.height,
        };
      } else {
        indicatorStyle = null;
      }
    });
  } else {
    indicatorStyle = null;
  }

  const resolveHref = (href: string) => {
    if (!href.startsWith('#')) {
      return href;
    }
    return page.url.pathname === '/' ? href : `/${href}`;
  };

  function closeMenu() {
    menuOpen = false;
  }

  function handleNavClick(e: MouseEvent, item: NavItem) {
    const link = e.currentTarget as HTMLAnchorElement;
    const href = link.getAttribute('href');
    const hashOnly = href?.startsWith('#') ? href : href?.includes('#') ? '#' + href.split('#')[1] : null;
    if (!hashOnly || hashOnly === '#') return;

    if (page.url.pathname !== '/') {
      e.preventDefault();
      closeMenu();
      goto(`/${hashOnly}`);
      return;
    }

    if (!headerEl) return;
    const target = document.querySelector(hashOnly);
    if (!target || !(target instanceof HTMLElement)) return;

    e.preventDefault();
    closeMenu();

    const sectionId = hashOnly.slice(1);
    activeId = sectionId;
    lastNavClickTime = Date.now();
    replaceState(hashOnly, {});

    const headerHeight = headerEl.getBoundingClientRect().height;
    const gap = 12;
    target.style.scrollMarginTop = `${headerHeight + gap}px`;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  $: if (page.url.pathname !== '/') activeId = null;

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
    const sectionIds = nav
      .filter((n) => n.href.startsWith('#'))
      .map((n) => n.href.slice(1));

    const updateActiveSection = () => {
      if (page.url.pathname !== '/' || !headerEl || sectionIds.length === 0) return;
      if (Date.now() - lastNavClickTime < 800) return;

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      // Only snap to last section when truly at the scroll limit. A loose threshold
      // (like maxScroll - 120) fires before the penultimate section's top can reach
      // triggerY, causing it to be skipped entirely.
      if (maxScroll > 0 && window.scrollY >= maxScroll - 5) {
        activeId = sectionIds[sectionIds.length - 1] ?? null;
        return;
      }

      // Use 50% of viewport height as the trigger offset. A small fixed value (e.g.
      // 40px) means sections near the bottom of the page (like #team) can have their
      // top never reach the trigger before maxScroll is hit — so they get skipped.
      // A percentage scales with the screen so every section gets a fair activation window.
      const triggerY = headerEl.getBoundingClientRect().bottom + window.innerHeight * 0.5;

      let current: string | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= triggerY) {
          current = id;
        }
      }
      activeId = current;
    };

    let detectTimeout: ReturnType<typeof setTimeout> | null = null;

    const updateScrolled = () => {
      scrolled = window.scrollY > 8;
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      headerEl?.style.setProperty('--reflect', scrollProgress.toFixed(4));
      updateActiveSection();
      // Debounce color detection — only fires 200ms after scrolling stops
      if (detectTimeout !== null) clearTimeout(detectTimeout);
      detectTimeout = setTimeout(detectHeaderLuminance, 30);
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') menuOpen = false;
    };

    // Known dark regions — populated after tick to ensure page content is in the DOM.
    // .founder__media is only included on mobile (desktop layout doesn't scroll over it).
    tick().then(() => {
      const isMobile = window.matchMedia('(max-width: 759px)').matches;
      const selector = isMobile
        ? '.section--contrast, .hero__aside, .founder__media'
        : '.section--contrast, .hero__aside';
      darkSections = Array.from(document.querySelectorAll<HTMLElement>(selector));
      detectHeaderLuminance();
    });

    updateScrolled();
    window.addEventListener('scroll', updateScrolled, { passive: true });
    document.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('scroll', updateScrolled);
      document.removeEventListener('keydown', handleEscape);
      if (detectTimeout !== null) clearTimeout(detectTimeout);
    };
  });
</script>

<header
  class="site-header"
  class:site-header--scrolled={scrolled}
  class:site-header--menu-open={menuOpen}
  class:site-header--on-dark={headerOnDark}
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
      on:click={() => {
        trackEvent?.('Menu toggle', { state: menuOpen ? 'close' : 'open' });
        menuOpen = !menuOpen;
      }}
    >
      <span class="site-header__menu-btn-bar" aria-hidden="true"></span>
      <span class="site-header__menu-btn-bar" aria-hidden="true"></span>
      <span class="site-header__menu-btn-bar" aria-hidden="true"></span>
    </button>

    <nav class="site-nav" aria-label="Primary" bind:this={navEl}>
      {#if indicatorStyle && page.url.pathname === '/' && scrolled}
        <span
          class="site-nav__indicator"
          style="left: {indicatorStyle.left}px; top: {indicatorStyle.top}px; width: {indicatorStyle.width}px; height: {indicatorStyle.height}px"
          aria-hidden="true"
        ></span>
      {/if}
      {#each nav as item}
        <a
          class="site-nav__link"
          class:site-nav__link--active={activeId != null && item.href === `#${activeId}`}
          href={resolveHref(item.href)}
          aria-current={activeId != null && item.href === `#${activeId}` ? 'location' : undefined}
          on:click={(e) => {
            trackEvent?.('Menu link', {
              label: item.label,
              destination: item.href.startsWith('#') ? item.href : item.href,
            });
            handleNavClick(e, item);
          }}
        >
          {item.label}
        </a>
      {/each}
    </nav>
  </div>
</header>
