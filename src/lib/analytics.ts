/**
 * Re-export Plausible’s track for custom events. Use after the tracker is
 * initialised in the root layout (client-side).
 *
 * @example
 *   import { track } from '$lib/analytics';
 *   track('Newsletter signup', { props: { location: 'footer' } });
 */
export { track } from '@plausible-analytics/tracker';
