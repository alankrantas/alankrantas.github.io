<script lang="ts">
	import AboutMe from './viewItems/AboutMe.svelte';
	import CareerAndSkills from './viewItems/CareerAndSkills.svelte';
	import Portfolio from './viewItems/Portfolio.svelte';
	import LinksAndAbout from './viewItems/LinksAndAbout.svelte';

	export let viewItemId: number;

	const ContentOptions = [AboutMe, CareerAndSkills, Portfolio, LinksAndAbout];

	$: showedContent = ContentOptions[viewItemId];
</script>

<div class="text-white">
	<svelte:component this={showedContent} />
</div>
