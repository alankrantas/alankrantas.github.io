<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css';
	import '@fontsource/open-sans/300.css';
	import '@fontsource/open-sans/300-italic.css';
	import '@fontsource/space-mono';
	import '@fontsource/playfair-display/600.css';
	import '@fontsource/playfair-display/600-italic.css';
	import '@fontsource/noto-sans-tc/chinese-traditional-300.css';
	import '../css/custom.css';

	import { screenSize } from '../data/Store';

	import info from '../data/BasicInfo.json';
</script>

<svelte:window bind:innerWidth={$screenSize} />

<svelte:head>
	<title>Homepage of {info.name}, {info.title} ({info.location})</title>
</svelte:head>

<slot />

<style>
	:global(body) {
		font-family: 'Open Sans', 'Noto Sans TC', sans-serif;
		font-size: large;
		text-align: justify;
		text-justify: inter-word;
		background-color: #3d3d3d;
	}
</style>
