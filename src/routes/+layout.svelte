<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css';
	import '@fontsource/open-sans/300.css';
	import '@fontsource/open-sans/300-italic.css';
	import '@fontsource/space-mono';
	import '@fontsource/playfair-display/600.css';
	import '@fontsource/playfair-display/600-italic.css';
	import '@fontsource/noto-sans-tc/chinese-traditional-300.css';
	import '../css/custom.css';
	import { name, title, location } from '../data/NameTitle';
</script>

<svelte:head>
	<title>Homepage of {name}, {title} ({location})</title>
</svelte:head>

<slot />

<style>
	:global(body) {
		font-family: 'Open Sans', 'Noto Sans TC', sans-serif;
		font-size: large;
		background-color: #3d3d3d;
	}
</style>
