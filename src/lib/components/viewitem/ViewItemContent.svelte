<script lang="ts">
	import AboutMe from '$lib/components/viewitem-content/AboutMe.svelte';
	import CareerAndSkills from '$lib/components/viewitem-content/CareerAndSkills.svelte';
	import Portfolio from '$lib/components/viewitem-content/Portfolio.svelte';
	import LinksAndAbout from '$lib/components/viewitem-content/LinksAndAbout.svelte';

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
