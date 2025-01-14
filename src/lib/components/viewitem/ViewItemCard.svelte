<script lang="ts">
	import { innerWidth } from 'svelte/reactivity/window';

	import type { ViewItem } from '$lib/type/Types';

	interface Props {
		viewItem: ViewItem;
		handleSetView: (viewName: string) => void;
	}

	let { viewItem, handleSetView }: Props = $props();

	let imgLoaded = $state(false);
</script>

<div class="card rounded-4 bg-dark shadow-lg">
	<div class={!imgLoaded ? 'placeholder placeholder-wave rounded-4' : ''}>
		<img
			src={viewItem.imgUrl}
			class="card-img-top rounded-4"
			alt={viewItem.title}
			onload={() => {
				imgLoaded = true;
			}}
		/>
	</div>
	<div class="card-body">
		<div class="card-title text-start text-white display-6 title p-md-1 m-md-1">
			{viewItem.title}
		</div>
		<div class="card-text text-start text-white-50 p-md-1 m-md-1">
			{#if viewItem.description}
				<p>
					{viewItem.description}
				</p>
			{/if}
		</div>
		<div class="text-end p-md-1 m-md-1">
			<button
				type="button"
				class="btn btn-info rounded-pill"
				onclick={() => handleSetView(viewItem.viewName)}
			>
				<span class={`code ${innerWidth.current && innerWidth.current >= 768 ? 'h5' : 'h6'}`}
					>View</span
				>
			</button>
		</div>
	</div>
</div>
