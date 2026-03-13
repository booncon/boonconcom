<script lang="ts">
  export let eyebrow: string;
  export let title: string;
  export let id: string | undefined = undefined;
  export let variant: 'default' | 'intro' = 'default';
</script>

<section class={`section ${variant === 'intro' ? 'section--intro' : ''}`} {id}>
  <div class="section__header">
    <p class="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
  </div>

  <div class="section__surface prose-card">
    <slot />
  </div>
</section>
