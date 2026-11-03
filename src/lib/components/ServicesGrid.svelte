<script lang="ts">
  import type { SiteContent } from '$lib/content/site';

  export let content: SiteContent['services'];
</script>

<section class="row" id="services">
  <h2 class="row__label">Services</h2>

  <ul>
    {#each content.items as item}
      <li class="list__item">
        <h3>{item.title}</h3>
        <p>{item.summary}</p>
      </li>
    {/each}
  </ul>
</section>
