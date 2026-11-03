<script lang="ts">
  import type { ActionLink, HeroContent } from '$lib/content/site';

  export let hero: HeroContent;
  export let email: ActionLink;

  // Hand-drawn strike lines, used in turn so no two neighbours look the same.
  const strokes = [
    'M1 6 C 22 3, 45 8, 66 5 S 92 4, 99 6',
    'M1 5 C 25 7, 48 3, 70 6 S 93 5, 99 4',
    'M1 6 C 20 4, 42 7, 63 4 S 90 6, 99 5',
    'M1 4 C 24 6, 47 4, 68 6 S 91 4, 99 5',
    'M1 5 C 21 7, 44 3, 67 5 S 92 6, 99 4',
  ];
</script>

<section class="hero" id="top">
  <h1>{@html hero.title}</h1>

  <p class="hero__chores muted" style="--n: {hero.chores.length}">
    {#each hero.chores as chore, i}<s class="chore" style="--i: {i}">{chore}<svg viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d={strokes[i % strokes.length]} /></svg></s>{i < hero.chores.length - 1 ? ', ' : '. '}{/each}
    <em class="hero__done">{hero.done}</em>
  </p>

  <p class="cta-line">{hero.ctaLead} <a class="link" href={email.href}>{email.label}</a></p>
</section>
