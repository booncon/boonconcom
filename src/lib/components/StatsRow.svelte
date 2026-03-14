<script lang="ts">
  import { onMount } from 'svelte';
  import type { KpiItem } from '$lib/content/site';

  export let items: KpiItem[];

  function currentValue(item: KpiItem): number {
    if (!item.ratePerYear) return item.base;
    const now = new Date();
    const elapsed = (now.getFullYear() - item.referenceYear) + now.getMonth() / 12;
    return item.base + Math.round(elapsed * item.ratePerYear);
  }

  let displayed: number[] = items.map(() => 0);
  let container: HTMLElement;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        items.forEach((item, i) => {
          const target = currentValue(item);
          const duration = 1400;
          const start = performance.now();
          function tick(now: number) {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            displayed[i] = Math.round(eased * target);
            if (t < 1) requestAnimationFrame(tick);
            else displayed[i] = target;
          }
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(container);
  });

  function format(n: number): string {
    return n.toLocaleString('en');
  }
</script>

<div class="stats-row" bind:this={container}>
  {#each items as item, i}
    <div class="stat">
      <span class="stat__value">{format(displayed[i])}{item.suffix ?? ''}</span>
      <span class="stat__label">{item.label}</span>
    </div>
  {/each}
</div>
