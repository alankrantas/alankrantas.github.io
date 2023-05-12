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
	import viewItems from '../data/ViewItems.json';
</script>

<svelte:window bind:innerWidth={$screenSize} />

<svelte:head>
	<title>{info.name}, {info.title} ({info.location})</title>
	<meta property="og:url" content="https://alankrantas.github.io/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={`${info.name}, ${info.title} (${info.location})`} />
	<meta property="og:site_name" content={`Homepage of ${info.name}, ${info.title}`} />
	<meta property="og:description" content={[...viewItems.map((item) => item.name)].join(', ')} />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:url" content="http://alankrantas.github.io/thumbnail.jpg" />
	<meta property="og:image:secure_url" content="https://alankrantas.github.io/thumbnail.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="627" />
	<meta property="og:image:alt" content={`${info.name}, ${info.title} (${info.location})`} />
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
