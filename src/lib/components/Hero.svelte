<script lang="ts">
  import type { ActionLink, HeroContent } from '$lib/content/site';
  import portraitImg from '$lib/assets/lukas.jpg?enhanced';

  export let hero: HeroContent;
  export let email: ActionLink;
</script>

<section class="hero" id="top">
  <div>
    <h1>{@html hero.title}</h1>
    <p class="cta-line">{hero.ctaLead} <a class="link" href={email.href}>{email.label}</a></p>
  </div>

  <figure class="hero__portrait">
    <enhanced:img src={portraitImg} alt={hero.imageAlt} width="500" height="500" fetchpriority="high" />
    <figcaption class="muted">{hero.byline}</figcaption>
  </figure>
</section>
