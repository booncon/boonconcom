<script lang="ts">
  import type { ContactContent } from '$lib/content/site';

  export let contact: ContactContent;
  $: addressLines = contact.address.split(',').map((part) => part.trim());

  function onEmailClick() {
    import('@plausible-analytics/tracker').then(({ track }) => {
      track('Email click', { props: { location: 'contact' } });
    });
  }
</script>

<section class="section section--contact" id="contact">
  <div class="contact">
    <div class="contact__left">
      <div class="section__header">
        <p class="eyebrow">Contact</p>
        <h2>{contact.title}</h2>
        <p class="contact__summary">{contact.summary}</p>
      </div>
    </div>
    <div class="contact__details">
      <div class="contact__middle">
        <p class="eyebrow">Find us here</p>
        <address class="contact__address">
          {#each addressLines as line, i}
            {line}{#if i < addressLines.length - 1}<br />{/if}
          {/each}
        </address>
      </div>
      <div class="contact__right">
        <p class="eyebrow">Get in touch</p>
        <div class="contact__actions">
          <a class="contact__phone link-accent-underline" href="tel:{contact.phone}">{contact.phone}</a>
          <a class="contact__email link-accent-underline" href={contact.email.href} onclick={onEmailClick}>{contact.email.label}</a>
        </div>
      </div>
    </div>
  </div>
</section>
