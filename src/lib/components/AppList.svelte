<script lang="ts">
  import type { AppItem } from '$lib/content/site';
  import { appIcon } from '$lib/content/app-images';

  export let apps: AppItem[];
</script>

<ul>
  {#each apps as app}
    {@const icon = appIcon(app.slug)}
    <li class="list__item">
      <div class="list__app">
        <span class="app-icon" aria-hidden="true">
          {#if icon}<enhanced:img src={icon} alt="" />{:else}{app.name[0]}{/if}
        </span>
        <div>
          <h3><a class="link" href="/apps/{app.slug}/">{app.name}</a></h3>
          <p class="muted">{app.platforms.join(', ')}</p>
        </div>
      </div>
      <p class="list__meta">
        <span>{app.tagline}</span>
        {#if app.appStoreUrl}
          <a class="link" href={app.appStoreUrl} target="_blank" rel="noreferrer noopener">App Store</a>
        {:else}
          <span class="muted">Coming soon</span>
        {/if}
      </p>
    </li>
  {/each}
</ul>
