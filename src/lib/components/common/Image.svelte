<script lang="ts">
	import { innerWidth } from 'svelte/reactivity/window';

	interface Props {
		src: string;
		alt: string;
		footnote?: string;
		widthRatios?: number[];
	}

	let { src, alt, footnote = '', widthRatios = [80, 85, 90, 95] }: Props = $props();

	let imgLoaded = $state(false);

	let ratio = $derived(
		(() => {
			if (innerWidth.current) {
				if (innerWidth.current >= 992) {
					return widthRatios[0];
				} else if (innerWidth.current >= 768) {
					return widthRatios[1];
				} else if (innerWidth.current >= 576) {
					return widthRatios[2];
				}
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
			onload={() => {
				imgLoaded = true;
			}}
		/>
		{#if !imgLoaded}
			<span class="placeholder w-50 placeholder-lg placeholder-wave rounded-pill"></span>
		{/if}
	</p>
	{#if footnote}
		<p class="small text-white-50">
			{@html footnote}
		</p>
	{/if}
</div>
