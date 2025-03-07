<script module lang="ts">
	import type { Snippet } from 'svelte';
	import { innerWidth } from 'svelte/reactivity/window';

	import ErrorPage from '$lib/components/site/ErrorPage.svelte';

	import info from '$lib/data/info/BasicInfo.json';
	import viewItems from '$lib/data/info/ViewItems.json';
	import link from '$lib/data/info/LinkRef.json';

	import 'bootstrap/dist/css/bootstrap.min.css';
	import '@fontsource/open-sans/300.css';
	import '@fontsource/open-sans/300-italic.css';
	import '@fontsource/space-mono';
	import '@fontsource/playfair-display/600.css';
	import '@fontsource/playfair-display/600-italic.css';
	import '@fontsource/noto-sans-tc/chinese-traditional-300.css';
	import '$lib/css/custom.css';

	const webTitle = `${info.name}, ${info.title.join(' | ')} (${info.location})`;
	const description = `${webTitle} - ${[...viewItems.map((item) => item.title.toLowerCase())].join(', ')}`;
	const thumbnail = `${info.url}website/thumbnail.jpg`;

	const showScreenSize = false; // enable to show screen size; for responsive design testing
</script>

<script lang="ts">
	let { children }: { children?: Snippet } = $props();
</script>

<svelte:head>
	<title>{webTitle}</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content={`${info.title.join(', ')}, ${info.location}, homepage, personal, github, github pages, resume, cv, work, talent`}
	/>
	<meta property="og:url" content={info.url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={webTitle} />
	<meta property="og:site_name" content={webTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image" content={thumbnail} />
	<meta property="og:image:url" content={thumbnail} />
	<meta property="og:image:secure_url" content={thumbnail} />
	<meta property="og:image:width" content="1280" />
	<meta property="og:image:height" content="720" />
	<meta property="og:image:alt" content={webTitle} />

	{#each link as linkItem}
		<link rel="me" href={linkItem.url} title={linkItem.title} />
	{/each}
</svelte:head>

{#if showScreenSize}
	<div class="display-6 text-white text-center">
		<span>{innerWidth.current} px</span>
		<br />
		<hr />
	</div>
{/if}

<svelte:boundary>
	{@render children?.()}

	{#snippet failed(error: any, reset)}
		<ErrorPage
			message={`Website rendering error:<br />${error?.message || 'unknown error'}`}
			enableBackBtn={false}
		/>
	{/snippet}
</svelte:boundary>

<style>
</style>
