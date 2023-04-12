<script lang="ts">
	import AboutMe from './ViewItems/AboutMe.svelte';
	import Links from './ViewItems/Links.svelte';
	import AboutThisSite from './ViewItems/AboutThisSite.svelte';

	export let viewItemId: number;
</script>

<div class="text-white">
	{#if viewItemId == 0}
		<AboutMe />
	{/if}
	{#if viewItemId == 5}
		<Links />
	{/if}
	{#if viewItemId == 6}
		<AboutThisSite />
	{/if}
</div>
