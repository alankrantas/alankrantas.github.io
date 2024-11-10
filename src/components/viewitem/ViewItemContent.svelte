<script lang="ts">
	import AboutMe from '../viewitem-content/AboutMe.svelte';
	import CareerAndSkills from '../viewitem-content/CareerAndSkills.svelte';
	import Portfolio from '../viewitem-content/Portfolio.svelte';
	import LinksAndAbout from '../viewitem-content/LinksAndAbout.svelte';

	const ContentOptions = [AboutMe, CareerAndSkills, Portfolio, LinksAndAbout];

	export let viewItemId: number;
</script>

<div class="text-white">
	<svelte:component this={ContentOptions[viewItemId]} />
</div>
