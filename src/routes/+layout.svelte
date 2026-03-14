<script lang="ts">
  import { onMount } from 'svelte';
  import { afterNavigate } from '$app/navigation';

  import '../app.css';

  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import { site } from '$lib/content/site';

  let sendPageview: ((url?: string) => void) | null = null;
  let trackEvent: ((name: string, props?: Record<string, string>) => void) | null = null;

  afterNavigate(({ from, to }) => {
    if (from && to?.url && sendPageview) sendPageview(to.url.href);
  });

  onMount(() => {
    import('@plausible-analytics/tracker').then(({ init, track }) => {
      init({
        domain: site.plausible.domain,
        ...(site.plausible.endpoint && { endpoint: site.plausible.endpoint }),
        autoCapturePageviews: false,
        bindToWindow: true,
      });
      track('pageview', {});
      sendPageview = (url) =>
        track('pageview', url ? { url } : {});
      trackEvent = (name, props) =>
        track(name, { props: props ?? {} });
    });
  });
</script>

<svelte:head>
  <link rel="icon" type="image/png" href="/favicon-32x32.png" />
  <link rel="apple-touch-icon" href="/icon-192x192.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <meta name="theme-color" content="#13222b" />
</svelte:head>

<a class="skip-link" href="#content">Skip to content</a>

<div class="site-shell">
  <Header
    name={site.brand.name}
    nav={site.nav}
    trackEvent={trackEvent}
  />

  <main id="content" class="site-main">
    <div class="page-shell">
      <slot />
    </div>
  </main>

  <Footer legal={site.legal} />
</div>
