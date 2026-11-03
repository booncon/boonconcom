<script lang="ts">
  import AppList from '$lib/components/AppList.svelte';
  import PageHead from '$lib/components/PageHead.svelte';
  import { site } from '$lib/content/site';
</script>

<PageHead title={site.meta.appsTitle} description={site.meta.appsDescription} path="/apps/" />

<section class="page-intro">
  <h1>Apps</h1>
  <p class="prose">{site.apps.intro} Questions or bugs? Each app has its own support page, or email <a href={site.contact.email.href}>{site.contact.email.label}</a>.</p>
</section>

<section class="row">
  <h2 class="row__label">All apps</h2>
  <AppList apps={site.apps.items} />
</section>
