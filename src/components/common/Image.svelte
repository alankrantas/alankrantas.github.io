<script lang="ts">
	import { screenSize } from '../../data/Store';

	export let src: string;
	export let alt: string;
	export let footnote = '';
	export let widthRatios = [80, 85, 90, 95];

	$: ratio = () => {
		if ($screenSize >= 992) {
			return widthRatios[0];
		} else if ($screenSize >= 768) {
			return widthRatios[1];
		} else if ($screenSize >= 576) {
			return widthRatios[2];
		} else {
			return widthRatios[3];
		}
	};
</script>

<div class="text-center">
	<p>
		<img
			loading="lazy"
			{src}
			{alt}
			class="img-fluid rounded-5 p-md-2 m-md-2"
			style={`width: ${ratio()}%;`}
		/>
	</p>
	{#if footnote}
		<p class="small text-white-50">
			{@html footnote}
		</p>
	{/if}
</div>
