<script lang="ts">
  import PageHead from '$lib/components/PageHead.svelte';
  import { appIcon, appScreenshots } from '$lib/content/app-images';
  import { site } from '$lib/content/site';
  import type { PageData } from './$types';

  export let data: PageData;

  $: app = data.app;
  $: icon = appIcon(app.slug);
  $: screenshots = appScreenshots(app.slug);
  $: supportHref = `mailto:${site.contact.email.label}?subject=${encodeURIComponent(`${app.name} support`)}`;
</script>

<PageHead title={`${app.name} | booncon`} description={app.tagline} path={`/apps/${app.slug}/`} />

<header class="app-hero">
  <span class="app-icon app-icon--large" aria-hidden="true">
    {#if icon}<enhanced:img src={icon} alt="" />{:else}{app.name[0]}{/if}
  </span>
  <div>
    <h1>{app.name}</h1>
    <p>{app.tagline}</p>
    <p class="muted">
      {app.platforms.join(', ')} ·
      {#if app.appStoreUrl}
        <a class="link" href={app.appStoreUrl} target="_blank" rel="noreferrer noopener">App Store ↗</a>
      {:else}
        Coming soon to the App Store
      {/if}
      · <a class="link" href="#support">Support</a>
      · <a class="link" href="#privacy">Privacy</a>
    </p>
  </div>
</header>

<section class="row">
  <h2 class="row__label">About</h2>
  <div class="prose">
    {#each app.description as paragraph}
      <p>{paragraph}</p>
    {/each}
  </div>
</section>

{#if screenshots.length}
  <section class="row">
    <h2 class="row__label">Screenshots</h2>
    <div class="screenshots">
      {#each screenshots as shot, i}
        <enhanced:img src={shot} alt={`${app.name} screenshot ${i + 1}`} loading="lazy" />
      {/each}
    </div>
  </section>
{/if}

<section class="row" id="support">
  <h2 class="row__label">Support</h2>
  <div class="prose">
    <p class="cta-line">Email <a class="link" href={supportHref}>{site.contact.email.label}</a></p>
    <p class="muted">Questions, bugs or ideas: you'll hear back from me directly.</p>
    {#each app.faq ?? [] as item}
      <h3>{item.question}</h3>
      <p>{item.answer}</p>
    {/each}
  </div>
</section>

<section class="row" id="privacy">
  <h2 class="row__label">Privacy</h2>
  <div class="prose">
    {#each app.privacy as paragraph}
      <p>{paragraph}</p>
    {/each}
    <p>The developer is {site.legal.companyName}, {site.contact.address.replace(/^booncon oy, /, '')}. For this website, see the <a href="/privacy/">site privacy policy</a>.</p>
  </div>
</section>

<a class="link back-link" href="/apps/">← All apps</a>
