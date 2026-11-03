<script lang="ts">
  import type { FounderContent } from '$lib/content/site';

  export let founder: FounderContent;
</script>

<section class="row" id="about">
  <h2 class="row__label">About</h2>

  <div>
    <p class="about__lead">{founder.lead}</p>
    <div class="prose">
      {#each founder.body as paragraph}
        <p>{paragraph}</p>
      {/each}
    </div>
  </div>
</section>
