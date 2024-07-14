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

	const webTitle = `Homepage of ${info.name}`;
	const description = `${webTitle}, ${info.location} - ${[...viewItems.map((item) => item.name)].join(', ')}`;

	const url = 'https://alankrantas.github.io/';
	const thumbnail = `${url}website/thumbnail.jpg`;
</script>

<svelte:window bind:innerWidth={$screenSize} />

<svelte:head>
	<title>{webTitle}</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content={`${info.title.join(', ')}, ${info.industry}, homepage, personal, resume, cv, job, talent for hire, svelte, sveltekit, frontend`}
	/>
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={webTitle} />
	<meta property="og:site_name" content={webTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image" content={thumbnail} />
	<meta property="og:image:url" content={thumbnail} />
	<meta property="og:image:secure_url" content={thumbnail} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="597" />
	<meta property="og:image:alt" content={webTitle} />
</svelte:head>

<slot />

<style>
</style>
