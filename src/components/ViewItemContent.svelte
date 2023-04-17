<script lang="ts">
	import AboutMe from './ViewItems/AboutMe.svelte';
	import Experience from './ViewItems/Experience.svelte';
	import Competencies from './ViewItems/Competencies.svelte';
	import Hobbies from './ViewItems/Hobbies.svelte';
	import Links from './ViewItems/Links.svelte';
	import AboutThisSite from './ViewItems/AboutThisSite.svelte';

	export let viewItemId: number;
</script>

<div class="text-white">
	{#if viewItemId == 0}
		<AboutMe />
	{/if}
	{#if viewItemId == 1}
		<Experience />
	{/if}
	{#if viewItemId == 2}
		<Competencies />
	{/if}
	{#if viewItemId == 3}
		🚧 WORKING IN PROGRESS 🚧
	{/if}
	{#if viewItemId == 4}
		<Hobbies />
	{/if}
	{#if viewItemId == 5}
		<Links />
	{/if}
	{#if viewItemId == 6}
		<AboutThisSite />
	{/if}
</div>
