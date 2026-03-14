<script lang="ts">
  import type { SiteContent } from '$lib/content/site';
  import certBadgeImg from '$lib/assets/SV_LOGO_booncon_oy_EN_409937_web.jpg?enhanced';

  export let legal: SiteContent['legal'];

  const year = new Date().getFullYear();

  const dayGreetings = [
    'Happy Sunday! ☀️',
    'Happy Monday! 💪',
    'Happy Tuesday! 🚀',
    'Happy Wednesday! ⚡',
    'Happy Thursday! 🎯',
    'Happy Friday! 🎉',
    'Happy Saturday! 😊',
  ];
  const greeting = dayGreetings[new Date().getDay()];
</script>

<footer class="site-footer">
  <div class="site-footer__brand">
    <p class="site-footer__meta">© {year} {legal.companyName}</p>
    <p class="site-footer__meta">VAT {legal.vatId}</p>
    <a href={legal.asiakastieto.href} target="_blank" rel="noreferrer noopener" class="footer-cert-badge">
      <enhanced:img src={certBadgeImg} alt="Asiakastieto AA certificate" class="footer-cert-badge__img" loading="lazy" />
    </a>
  </div>

  <div class="site-footer__center">
    <a href="/" class="footer-mark-wrap" aria-label="booncon home">
      <svg class="footer-mark" viewBox="0 0 62 62" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(2,2)">
          <defs>
            <path
              id="fm-shape"
              d="M28.928,0C12.951,0,0,12.951,0,28.928s12.951,28.928,28.928,28.928s28.928-12.951,28.928-28.928S44.904,0,28.928,0z M34.287,38.913L34.25,52.415L7.194,36.695l13.388-7.68L7.341,23.845l24.432-19.55l2.565,16.826l9.604-7.532l4.412,30.978L34.287,38.913z"
            />
          </defs>
          <clipPath id="fm-clip"><use href="#fm-shape" overflow="visible" opacity="0.6" /></clipPath>
          <circle opacity="0.96" fill="#FFFFFF" cx="28.927" cy="28.927" r="28.927" />
          <circle opacity="0.6" clip-path="url(#fm-clip)" fill="#3B454F" cx="28.928" cy="28.928" r="28.928" />
          <g opacity="0.4" clip-path="url(#fm-clip)"><polygon fill="#3B454F" points="75.026,55.284 19.32,32.898 66.56,-4.148" /></g>
          <g opacity="0.4" clip-path="url(#fm-clip)"><polygon fill="#3B454F" points="36.489,35.228 -15.349,14.984 28.103,-19.784" /></g>
          <g opacity="0.4" clip-path="url(#fm-clip)"><polygon fill="#3B454F" points="34.179,78.288 -15.249,49.57 34.336,21.125" /></g>
          <g opacity="0.4" clip-path="url(#fm-clip)"><polygon fill="#3B454F" points="34.338,21.121 34.322,21.134 20.582,29.016 23.045,29.977 19.32,32.898 34.287,38.913 34.299,34.373 36.489,35.228" /></g>
          <polygon opacity="0.35" clip-path="url(#fm-clip)" fill="#3B454F" points="52.923,76.648 39.373,-18.492 89.888,14.406" />
          <polygon opacity="0.3" clip-path="url(#fm-clip)" fill="#3B454F" points="-20.878,46.45 54.122,-13.635 -5.223,-24.228" />
          <polygon opacity="0.5" clip-path="url(#fm-clip)" fill="#3B454F" points="-22.903,19.181 60.172,67.489 3.052,86.759" />
          <polyline opacity="0.46" clip-path="url(#fm-clip)" fill="#3B454F" points="34.287,38.913 34.179,78.288 58.805,55.284 53.043,46.45 34.287,38.913" />
          <polygon clip-path="url(#fm-clip)" fill="#3B454F" points="7.217,36.697 -0.159,32.406 -0.784,41.281" />
          <polygon opacity="0.3" clip-path="url(#fm-clip)" fill="#FFFFFF" points="43.942,13.593 52.942,6.531 42.281,1.926" />
          <polygon opacity="0.6" clip-path="url(#fm-clip)" fill="#3B454F" points="31.751,4.313 39.821,-2.178 30.627,-3.039" />
          <polygon opacity="0.3" clip-path="url(#fm-clip)" fill="#FFFFFF" points="34.263,52.406 40.779,56.203 34.236,57.735" />
          <polygon opacity="0.7" clip-path="url(#fm-clip)" fill="#3B454F" points="48.354,44.566 49.31,51.219 53.043,46.45" />
          <polygon opacity="0.94" fill="#3B454F" points="36.489,35.228 34.338,21.121 34.322,21.134 20.582,29.016 23.045,29.977 19.32,32.898 34.287,38.913 34.299,34.373" />
        </g>
      </svg>
      <span class="footer-mark__tooltip" aria-hidden="true">{greeting}</span>
    </a>
    <p class="site-footer__tagline">{legal.tagline}</p>
  </div>

  <div class="site-footer__links">
    <a href={legal.podcast.href} target="_blank" rel="noreferrer noopener">{legal.podcast.label}</a>
    <a href={legal.github.href} target="_blank" rel="noreferrer noopener">{legal.github.label}</a>
    <a href={legal.linkedin.href} target="_blank" rel="noreferrer noopener" >{legal.linkedin.label}</a>
    <a href="/privacy/" style="margin-top: 0.6rem;">Privacy</a>
  </div>
</footer>
