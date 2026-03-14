<script lang="ts">
  import '../app.css';

  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import { site } from '$lib/content/site';
  import { escapeInlineScript } from '$lib/utils/head';

  const plausibleBootstrap = escapeInlineScript(
    'window.plausible = window.plausible || function () { (window.plausible.q = window.plausible.q || []).push(arguments); };'
  );
</script>

<svelte:head>
  <link rel="icon" type="image/png" href="/favicon-32x32.png" />
  <link rel="apple-touch-icon" href="/icon-192x192.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <meta name="theme-color" content="#13222b" />
  <script defer data-domain={site.plausible.domain} src={site.plausible.src}></script>
  {@html `<script>${plausibleBootstrap}</script>`}
</svelte:head>

<a class="skip-link" href="#content">Skip to content</a>

<div class="site-shell">
  <Header
    name={site.brand.name}
    nav={site.nav}
  />

  <main id="content" class="site-main">
    <div class="page-shell">
      <slot />
    </div>
  </main>

  <Footer legal={site.legal} />
</div>
