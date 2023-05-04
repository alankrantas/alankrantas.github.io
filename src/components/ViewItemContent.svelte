<script lang="ts">
	import AboutMe from './ViewItems/AboutMe.svelte';
	import CareerAndSkills from './ViewItems/CareerAndSkills.svelte';
	import Portfolio from './ViewItems/Portfolio.svelte';
	import LinksAndAbout from './ViewItems/LinksAndAbout.svelte';

	export let viewItemId: number;
</script>

<div class="text-white">
	{#if viewItemId == 0}
		<AboutMe />
	{:else if viewItemId == 1}
		<CareerAndSkills />
	{:else if viewItemId == 2}
		<Portfolio />
	{:else if viewItemId == 3}
		<LinksAndAbout />
	{/if}
</div>
