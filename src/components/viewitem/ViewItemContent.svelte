<script lang="ts">
	import AboutMe from '../viewitem-content/AboutMe.svelte';
	import CareerAndSkills from '../viewitem-content/CareerAndSkills.svelte';
	import Portfolio from '../viewitem-content/Portfolio.svelte';
	import LinksAndAbout from '../viewitem-content/LinksAndAbout.svelte';

	const viewItemOptions = [AboutMe, CareerAndSkills, Portfolio, LinksAndAbout];

	interface Props {
		viewItemId: number;
	}

	let { viewItemId }: Props = $props();

	let ViewItemContent = $derived(viewItemOptions[viewItemId]);
</script>

<div class="text-white">
	<ViewItemContent />
</div>
