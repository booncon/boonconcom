<script lang="ts">
  import type { ContactContent } from '$lib/content/site';

  export let contact: ContactContent;

  function onEmailClick() {
    import('@plausible-analytics/tracker').then(({ track }) => {
      track('Email click', { props: { location: 'contact' } });
    });
  }
</script>

<section class="contact" id="contact">
  <h2>{contact.title}</h2>
  <p class="prose">{contact.summary}</p>

  <div class="contact__links">
    <a class="link" href={contact.email.href} onclick={onEmailClick}>{contact.email.label}</a>
    <a class="link" href="tel:{contact.phone.replaceAll(' ', '')}">{contact.phone}</a>
  </div>

  <address class="contact__address muted">{contact.address}</address>
</section>
