<script lang="ts">
	import { screenSize } from '../../data/store/GlobalStates.svelte';

	interface Props {
		src: string;
		alt: string;
		footnote?: string;
		widthRatios?: number[];
	}

	let { src, alt, footnote = '', widthRatios = [80, 85, 90, 95] }: Props = $props();

	let ratio = $derived(
		(() => {
			if (screenSize.value >= 992) {
				return widthRatios[0];
			} else if (screenSize.value >= 768) {
				return widthRatios[1];
			} else if (screenSize.value >= 576) {
				return widthRatios[2];
			} else {
				return widthRatios[3];
			}
		})()
	);
</script>

<div class="text-center">
	<p>
		<img
			loading="lazy"
			{src}
			{alt}
			class="img-fluid rounded-5 p-md-2 m-md-2"
			style={`width: ${ratio}%;`}
		/>
	</p>
	{#if footnote}
		<p class="small text-white-50">
			{@html footnote}
		</p>
	{/if}
</div>
