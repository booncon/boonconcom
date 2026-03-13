<script lang="ts">
  import type { SiteContent } from '$lib/content/site';

  export let legal: SiteContent['legal'];

  const year = new Date().getFullYear();
</script>

<footer class="site-footer">
  <div class="site-footer__primary">
    <p class="site-footer__eyebrow">{legal.companyName}</p>
    <p class="site-footer__meta">{legal.location} / VAT {legal.vatId}</p>
  </div>

  <div class="site-footer__links">
    <a href={legal.email.href}>{legal.email.label}</a>
    <a href={legal.linkedin.href} target="_blank" rel="noreferrer noopener">{legal.linkedin.label}</a>
    <a href={legal.podcast.href} target="_blank" rel="noreferrer noopener">{legal.podcast.label}</a>
    <a href="/privacy/">Privacy</a>
  </div>

  <p class="site-footer__copyright">Copyright {year} {legal.companyName}</p>
</footer>
