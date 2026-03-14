<script lang="ts">
  export let eyebrow = '';
  export let title = '';
  export let id: string | undefined = undefined;
  export let variant: 'default' | 'intro' = 'default';
  export let content: { eyebrow: string; title: string; body: string[] } | undefined = undefined;

  const displayEyebrow = content?.eyebrow ?? eyebrow;
  const displayTitle = content?.title ?? title;
</script>

<section class={`section ${variant === 'intro' ? 'section--intro' : ''}`} {id}>
  <div class="section__header">
    <p class="eyebrow">{displayEyebrow}</p>
    <h2>{displayTitle}</h2>
  </div>

  <div class="section__surface prose-card">
    {#if content?.body}
      {#each content.body as paragraph}
        <p>{paragraph}</p>
      {/each}
    {:else}
      <slot />
    {/if}
  </div>
</section>
