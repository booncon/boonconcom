<script lang="ts">
  import type { HeroContent } from '$lib/content/site';

  export let hero: HeroContent;
</script>

<section class="hero" id="top">
  <div class="hero__copy">
    <h1>{hero.title}</h1>
    <p class="hero__summary">{hero.summary}</p>

    <div class="hero__actions">
      <a class="button button--primary" href={hero.primaryCta.href}>{hero.primaryCta.label}</a>
    </div>
  </div>

  <aside class="hero__aside" aria-label="Hero summary">
    <div class="hero__aside-media">
      <img src={hero.panel.imageSrc} alt={hero.panel.imageAlt} width="1200" height="900" />
    </div>

    <div class="hero__aside-body">
      <p class="hero__aside-note">{hero.panel.summary}</p>
      <ul class="hero__tags" aria-label="Focus areas">
        {#each hero.panel.items as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>
  </aside>
</section>
