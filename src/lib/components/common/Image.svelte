<script module lang="ts">
	import { innerWidth } from 'svelte/reactivity/window';

	import { replaceLink } from '$lib/util/util';

	interface Props {
		src: string;
		alt: string;
		footnote?: string;
		widthRatios?: number[];
	}
</script>

<script lang="ts">
	let { src, alt, footnote = '', widthRatios = [80, 85, 90, 95] }: Props = $props();

	let imgLoaded = $state(false);

	let ratio = $derived(
		(() => {
			if (innerWidth.current) {
				switch (true) {
					case innerWidth.current >= 992:
						return widthRatios[0];
					case innerWidth.current >= 768:
						return widthRatios[1];
					case innerWidth.current >= 576:
						return widthRatios[2];
					default:
						return widthRatios[3];
				}
			} else {
				return widthRatios[3];
			}
		})()
	);
</script>

<div class="text-center">
	<p class={!imgLoaded ? 'placeholder placeholder-wave rounded-5' : ''}>
		<img
			loading="lazy"
			{src}
			{alt}
			class="img-fluid rounded-5 p-md-2 m-md-2"
			style={`width: ${ratio}%;`}
			onload={() => {
				imgLoaded = true;
			}}
		/>
	</p>
	{#if footnote}
		<p class="small text-white-50">
			{@html replaceLink(footnote)}
		</p>
	{/if}
</div>
