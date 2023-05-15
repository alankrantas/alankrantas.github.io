<script lang="ts">
	import AboutMe from './ViewItems/AboutMe.svelte';
	import CareerAndSkills from './ViewItems/CareerAndSkills.svelte';
	import Portfolio from './ViewItems/Portfolio.svelte';
	import LinksAndAbout from './ViewItems/LinksAndAbout.svelte';

	export let viewItemId: number;

	const ContentOptions = [AboutMe, CareerAndSkills, Portfolio, LinksAndAbout];

	$: showedContent = ContentOptions[viewItemId];
</script>

<div class="text-white">
	<svelte:component this={showedContent} />
</div>
