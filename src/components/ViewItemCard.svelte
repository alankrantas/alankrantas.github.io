<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { ViewItem } from '../data/Types';

	import { screenSize } from '../data/Store';

	export let viewItem: ViewItem;

	const dispatch = createEventDispatcher<{ setViewId: number }>();
</script>

<div class="card rounded-4 bg-dark shadow-lg">
	<img loading="lazy" src={viewItem.imgUrl} class="card-img-top rounded-4" alt={viewItem.name} />
	<div class="card-body">
		<div class="card-title text-start text-white display-6 title p-md-1 m-md-1">
			{viewItem.name}
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
				on:click={() => dispatch('setViewId', viewItem.id)}
			>
				<span class={`code ${$screenSize >= 768 ? 'h5' : 'h6'}`}>View</span>
			</button>
		</div>
	</div>
</div>
