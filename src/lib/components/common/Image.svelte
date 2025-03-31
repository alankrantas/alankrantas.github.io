<script module lang="ts">
	import { innerWidth } from 'svelte/reactivity/window';

	import { replaceLink } from '$lib/util/util';

	interface Props {
		src: string;
		alt: string;
		footnote?: string;
		widthRatios?: {
			992: number;
			768: number;
			576: number;
			0: number;
		};
	}
</script>

<script lang="ts">
	let {
		src,
		alt,
		footnote = '',
		widthRatios = {
			992: 0.8,
			768: 0.85,
			576: 0.9,
			0: 0.95
		}
	}: Props = $props();

	let imgLoaded = $state(false);

	let ratio = $derived(
		(() => {
			if (innerWidth.current) {
				switch (true) {
					case innerWidth.current >= 992:
						return widthRatios[992];
					case innerWidth.current >= 768:
						return widthRatios[768];
					case innerWidth.current >= 576:
						return widthRatios[576];
					default:
						return widthRatios[0];
				}
			} else {
				return widthRatios[0];
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
			style={`width: ${ratio <= 1 && ratio >= 0 ? Math.trunc(ratio * 100) : ratio}%;`}
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
