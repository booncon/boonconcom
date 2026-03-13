<script lang="ts">
  import type { SiteContent } from '$lib/content/site';

  export let content: SiteContent['services'];
</script>

<section class="section" id="services">
  <div class="section__header">
    <p class="eyebrow">Services</p>
    <h2>{content.title}</h2>
    <p class="section__intro">{content.intro}</p>
  </div>

  <div class="cards-grid cards-grid--two">
    {#each content.items as item}
      <article class="card">
        <h3>{item.title}</h3>
        <p>{item.summary}</p>
        <ul class="card__tags" aria-label={`${item.title} details`}>
          {#each item.bullets as bullet}
            <li>{bullet}</li>
          {/each}
        </ul>
      </article>
    {/each}
  </div>
</section>
