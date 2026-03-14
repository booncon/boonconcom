<script lang="ts">
  import type { FounderContent } from '$lib/content/site';
  import lukasImg from '$lib/assets/lukas.jpg?enhanced';

  export let founder: FounderContent;
</script>

<section class="founder" id="team">
  <div class="founder__media">
    <enhanced:img src={lukasImg} alt={founder.imageAlt} width="1200" height="1200" loading="lazy" />
  </div>

  <div class="founder__body">
    <p class="eyebrow">{founder.title}</p>
    <h2>{founder.name}</h2>
    <p class="founder__meta">{founder.role} | {founder.location}</p>

    <ul class="founder__focus" aria-label="Founder focus areas">
      {#each founder.focus as item}
        <li>{item}</li>
      {/each}
    </ul>

    <div class="prose-card">
      {#each founder.body as paragraph}
        <p>{paragraph}</p>
      {/each}
    </div>
  </div>
</section>
