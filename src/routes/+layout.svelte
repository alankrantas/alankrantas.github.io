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

	let webTitle = `Homepage of ${info.name} (${info.location}): ${info.title.map((item) => item.toLowerCase()).join('/')}`;
</script>

<svelte:window bind:innerWidth={$screenSize} />

<svelte:head>
	<title>{webTitle}</title>
	<meta
		name="description"
		content={`${webTitle} - ${[...viewItems.map((item) => item.name)].join(', ')}`}
	/>
	<meta
		name="keywords"
		content={`${info.title.join(', ')}, ${info.industry}, homepage, personal, resume, cv, job, talent, hiring, svelte, sveltekit, frontend`}
	/>
	<meta property="og:url" content="https://alankrantas.github.io/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={webTitle} />
	<meta property="og:site_name" content={webTitle} />
	<meta
		property="og:description"
		content={`${webTitle} - ${[...viewItems.map((item) => item.name)].join(', ')}`}
	/>
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image" content="http://alankrantas.github.io/website/thumbnail.jpg" />
	<meta property="og:image:url" content="http://alankrantas.github.io/website/thumbnail.jpg" />
	<meta
		property="og:image:secure_url"
		content="https://alankrantas.github.io/website/thumbnail.jpg"
	/>
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="627" />
	<meta property="og:image:alt" content={webTitle} />
</svelte:head>

<slot />

<style>
</style>
