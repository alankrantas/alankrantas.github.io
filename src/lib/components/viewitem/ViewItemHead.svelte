<script module lang="ts">
	import { innerWidth } from 'svelte/reactivity/window';

	import type { ViewItem } from '$lib/type/Types';

	interface Props {
		viewItem: ViewItem;
	}
</script>

<script lang="ts">
	let { viewItem }: Props = $props();

	let imgLoaded = $state(false);
</script>

<div class="text-center">
	{#if innerWidth.current && innerWidth.current <= 576}
		<br />
	{/if}
	<div class="row p-2 m-2">
		<div class="col d-flex justify-content-center">
			<div
				class={`card rounded-5 bg-dark shadow position-relative ${!imgLoaded ? 'placeholder placeholder-wave' : ''}`}
			>
				<img
					loading="lazy"
					src={viewItem.imgUrl}
					alt={viewItem.description}
					class="card-img rounded-5"
					onload={() => {
						imgLoaded = true;
					}}
				/>
				<div class="card-img-overlay">
					<div
						class="card-title title-shadow display-5 p-sm-1 m-sm-1 pt-sm-2 mt-sm-2 position-absolute top-50 start-50 translate-middle"
					>
						<span class="text-white">
							{viewItem.title}
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="text-white-50 p-sm-1 m-sm-1 pt-sm-3 pb-sm-2 mt-sm-3 mb-sm-2">
		{#if innerWidth.current && innerWidth.current <= 576}
			<br />
		{/if}
		<hr />
		{#if innerWidth.current && innerWidth.current <= 576}
			<br />
		{/if}
	</div>
</div>
