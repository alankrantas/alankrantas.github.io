<script lang="ts">
	import AboutMe from './ViewItems/AboutMe.svelte';
	import Experience from './ViewItems/Experience.svelte';
	import Competencies from './ViewItems/Competencies.svelte';
	import Portfolio from './ViewItems/Portfolio.svelte';
	import Hobbies from './ViewItems/Hobbies.svelte';
	import Links from './ViewItems/Links.svelte';
	import AboutThisSite from './ViewItems/AboutThisSite.svelte';

	export let viewItemId: number;
</script>

<div class="text-white">
	{#if viewItemId == 0}
		<AboutMe />
	{:else if viewItemId == 1}
		<Experience />
	{:else if viewItemId == 2}
		<Competencies />
	{:else if viewItemId == 3}
		<Portfolio />
	{:else if viewItemId == 4}
		<Hobbies />
	{:else if viewItemId == 5}
		<Links />
	{:else if viewItemId == 6}
		<AboutThisSite />
	{/if}
</div>
