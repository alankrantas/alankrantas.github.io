<script lang="ts">
	import AboutMe from './viewItems/AboutMe.svelte';
	import CareerAndSkills from './viewItems/CareerAndSkills.svelte';
	import Portfolio from './viewItems/Portfolio.svelte';
	import LinksAndAbout from './viewItems/LinksAndAbout.svelte';

	const ContentOptions = [AboutMe, CareerAndSkills, Portfolio, LinksAndAbout];

	export let viewItemId: number;
</script>

<div class="text-white">
	<svelte:component this={ContentOptions[viewItemId]} />
</div>
