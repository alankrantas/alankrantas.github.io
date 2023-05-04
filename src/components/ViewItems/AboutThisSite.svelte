<script lang="ts">
	import type { ListItem } from '../../data/Types';
	import List from '../utils/List.svelte';
	import Link from '../utils/Link.svelte';

	const siteTechList: ListItem[] = [
		{
			name: 'Svelte 3',
			content: 'Component framework',
			link: 'https://svelte.dev/',
			linkedTitle: true
		},
		{
			name: 'SvelteKit',
			content: 'Application framework',
			link: 'https://kit.svelte.dev/',
			linkedTitle: true
		},
		{
			name: '@sveltejs/adapter-static',
			content: 'SSG (static-site generation)',
			link: 'https://kit.svelte.dev/docs/adapter-static',
			linkedTitle: true
		},
		{
			name: 'Bootstrap 5',
			content: 'CSS library',
			link: 'https://getbootstrap.com/',
			linkedTitle: true
		},
		{
			name: 'svelte-simple-modal',
			content: 'Svelte modal component',
			footnote: "Used for the protfolio showcases since Bootstrap components won't work for Svelte",
			link: 'https://www.npmjs.com/package/svelte-simple-modal',
			linkedTitle: true
		},
		{
			name: 'Fontsource',
			content: 'Font library (NPM package form of Google Fonts)',
			link: 'https://fontsource.org/',
			linkedTitle: true
		},
		{
			name: 'Unsplash',
			content: 'Free images',
			link: 'https://unsplash.com/',
			linkedTitle: true
		},
		{
			name: 'Flaticon.com',
			content: 'Free icons',
			link: 'https://www.flaticon.com/',
			linkedTitle: true
		},
		{
			name: 'Github Actions',
			content: 'CI (continuous integration)',
			link: 'https://docs.github.com/en/actions',
			linkedTitle: true
		},
		{
			name: 'Github Pages',
			content: 'Website hosting',
			link: 'https://pages.github.com/',
			linkedTitle: true
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
	(SPA) on purpose. QueryString is added to create the illusion of routing between views.
</p>
<p class="indent">
	You can find the full source code at the <Link
		url="https://github.com/alankrantas/alankrantas.github.io"
		name="original repository"
	/> .
</p>
<p>
	<br />
</p>
<p>
	<List list={siteTechList} title="List of Resource for Building This Site" />
</p>
