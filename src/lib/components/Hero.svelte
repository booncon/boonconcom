<script lang="ts">
  import Strike from '$lib/components/Strike.svelte';
  import type { ActionLink, HeroContent } from '$lib/content/site';

  export let hero: HeroContent;
  export let email: ActionLink;
</script>

<section class="hero" id="top">
  <h1>{@html hero.title}</h1>

  <p class="hero__chores muted" style="--n: {hero.chores.length}">
    {#each hero.chores as chore, i}<Strike text={chore} index={i} />{i < hero.chores.length - 1 ? ', ' : '. '}{/each}
    <em class="hero__done">{hero.done}</em>
  </p>

  <p class="cta-line hero__pitch">{hero.pitch}</p>
  <p class="cta-line">{hero.ctaLead} <a class="link" href={email.href}>{email.label}</a></p>
</section>
