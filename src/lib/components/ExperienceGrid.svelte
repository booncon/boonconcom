<script lang="ts">
  import type { SiteContent } from '$lib/content/site';
  import StatsRow from './StatsRow.svelte';

  export let content: SiteContent['experience'];
</script>

<section class="section section--contrast" id="experience">
  <div class="section__header">
    <p class="eyebrow">Experience</p>
    <h2>{content.title}</h2>
    <p class="section__intro">{content.intro}</p>
  </div>

  <div class="cards-grid cards-grid--two">
    {#each content.items as item}
      <article class="card card--link">
        <p class="card__meta">{item.role}</p>
        <h3>{item.name}</h3>
        <p>{item.summary}</p>
        <a href={item.href} target="_blank" rel="noreferrer noopener">Visit site <span class="card__link-icon">↗</span></a>
      </article>
    {/each}
  </div>

  {#if content.kpis}
    <StatsRow items={content.kpis} />
  {/if}
</section>
