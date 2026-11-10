<script lang="ts">
  import type { KpiItem, SiteContent } from '$lib/content/site';

  export let content: SiteContent['experience'];

  // ponytail: computed at build time, so the jokes tick forward on each deploy.
  function currentValue(item: KpiItem): number {
    if (!item.ratePerYear) return item.base;
    const now = new Date();
    const elapsed = (now.getFullYear() - item.referenceYear) + now.getMonth() / 12;
    return item.base + Math.round(elapsed * item.ratePerYear);
  }

  const facts = (content.kpis ?? []).map(
    (k) => `${currentValue(k).toLocaleString('en')}${k.suffix ?? ''} ${k.label}`
  );
  const note = facts.length > 1 ? `${facts.slice(0, -1).join(', ')} and ${facts.at(-1)}` : facts[0];
</script>

<section class="row" id="work">
  <h2 class="row__label">Currently</h2>

  <div>
    <ul>
      {#each content.items as item}
        <li class="list__item">
          <h3><a class="link" href={item.href} target="_blank" rel="noreferrer noopener">{item.name}</a></h3>
          <p class="list__meta muted"><span>{item.summary}</span><span>{item.role}</span></p>
        </li>
      {/each}
    </ul>

    {#if note}
      <p class="row__note muted">Also: {note}.</p>
    {/if}
  </div>
</section>
