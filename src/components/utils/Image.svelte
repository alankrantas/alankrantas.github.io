<script lang="ts">
	import { screenSize } from '../../data/Store';

	export let src: string;
	export let alt: string;
	export let footnote = '';
</script>

<div class="text-center">
	<p>
		<img
			loading="lazy"
			{src}
			{alt}
			class={`img-fluid rounded-5 p-md-2 m-md-2 ${
				$screenSize >= 992 ? 'w-50' : $screenSize >= 576 ? 'w-75' : 'w-100'
			}`}
		/>
	</p>
	{#if footnote}
		<p class="small text-white-50">
			{footnote}
		</p>
	{/if}
</div>
