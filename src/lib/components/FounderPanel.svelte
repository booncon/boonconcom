<script lang="ts">
  import type { FounderContent } from '$lib/content/site';
  import portraitImg from '$lib/assets/lukas.jpg?enhanced';

  export let founder: FounderContent;
</script>

<section class="row" id="about">
  <h2 class="row__label">About</h2>

  <div class="about">
    <figure class="about__portrait">
      <enhanced:img src={portraitImg} alt={founder.imageAlt} width="500" height="500" loading="lazy" />
    </figure>

    <div>
      <p class="about__lead">{founder.lead}</p>
      <div class="prose">
        {#each founder.body as paragraph}
          <p>{paragraph}</p>
        {/each}
      </div>
    </div>
  </div>
</section>
