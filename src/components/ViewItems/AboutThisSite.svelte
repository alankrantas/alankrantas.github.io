<script lang="ts">
	import type { ListItem } from '../../data/Types';
	import List from '../utils/List.svelte';

	const siteTechList: ListItem[] = [
		{
			name: 'Component framework',
			content: 'Svelte 3',
			link: 'https://svelte.dev/',
			linkedContent: true
		},
		{
			name: 'Application framework',
			content: 'SvelteKit',
			link: 'https://kit.svelte.dev/',
			linkedContent: true
		},
		{
			name: 'SSG (static-site generation)',
			content: '@sveltejs/adapter-static',
			link: 'https://kit.svelte.dev/docs/adapter-static',
			linkedContent: true
		},
		{
			name: 'CSS library',
			content: 'Bootstrap 5',
			link: 'https://svelte.dev/',
			linkedContent: true
		},
		{
			name: 'Font library',
			content: 'Fontsource',
			footnote: 'NPM package form of Google Fonts',
			link: 'https://fontsource.org/',
			linkedContent: true
		},
		{
			name: 'Free images',
			content: 'Unsplash',
			link: 'https://unsplash.com/',
			linkedContent: true
		},
		{
			name: 'Free icons',
			content: 'Flaticon.com',
			link: 'https://www.flaticon.com/',
			linkedContent: true
		},
		{
			name: 'CI (continuous integration)',
			content: 'Github Actions',
			link: 'https://docs.github.com/en/actions',
			linkedContent: true
		},
		{
			name: 'Website hosting',
			content: 'Github Pages',
			link: 'https://pages.github.com/',
			linkedContent: true
		},
		{
			name: 'Website source repository',
			footnote: 'Supports Dependabot, Docker and DevContainer',
			link: 'https://github.com/alankrantas/alankrantas.github.io'
		}
	];
</script>

<p>Some little things about this site (the technological side of it at least).</p>
<p class="indent">
	As a semi-developer who never had official experiences in modern front-end JavaScript frameworks,
	I got to learn some of them while working for a IT books publisher: Angular, React, Vue.js, Svelte
	and Solid. Later I also learned how to deploy productions with CI (continuous integration) jobs.
	At that moment I knew exactly what I can do with this, although it took some time to finally make
	it happen.
</p>
<p class="indent">
	It is always such a fun ride to try to make something on your own, to explore and experiment new
	ideas, and a great learning experience too. The front-end technologies is certainly something I'd
	'never imagined from the days of creating simple websites using Microsoft FrontPage.
</p>
<p class="indent">
	Although SvelteKit has a pretty neat routing system, I made this as a single-page application
	(SPA) on purpose.
</p>
<br />
<List list={siteTechList} title="List of Resource for Building This Site" />
