<script lang="ts">
  import type { ContactContent } from '$lib/content/site';

  export let contact: ContactContent;
</script>

<section class="section section--contact" id="contact">
  <div class="contact">
    <div class="section__header">
      <p class="eyebrow">Contact</p>
      <h2>{contact.title}</h2>
      <p class="contact__summary">{contact.summary}</p>
    </div>

    <div class="contact__actions">
      <a class="button button--primary" href={contact.email.href}>{contact.email.label}</a>
      <a class="button button--ghost" href={contact.linkedin.href} target="_blank" rel="noreferrer noopener">
        {contact.linkedin.label}
      </a>
    </div>
  </div>
</section>
