<script lang="ts">
  import type { ContactContent } from '$lib/content/site';

  export let contact: ContactContent;
  $: addressLines = contact.address.split(',').map((part) => part.trim());
</script>

<section class="section section--contact" id="contact">
  <div class="contact">
    <div class="section__header">
      <p class="eyebrow">Contact</p>
      <h2>{contact.title}</h2>
      <p class="contact__summary">{contact.summary}</p>
    </div>

    <address class="contact__address">
      {#each addressLines as line, i}
        {line}{#if i < addressLines.length - 1}<br />{/if}
      {/each}
      <br />
      <br />
      <a href="tel:{contact.phone}">{contact.phone}</a>
    </address>

    <div class="contact__actions">
      <a class="button button--primary" href={contact.email.href}>{contact.email.label}</a>
    </div>
  </div>
</section>
