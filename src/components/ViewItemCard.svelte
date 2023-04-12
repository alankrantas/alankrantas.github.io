<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { ViewItem } from '../data/ViewItems';

	export let viewItem: ViewItem;

	const dispatch = createEventDispatcher<{ setViewId: number }>();
</script>

<div class="card rounded-4 bg-dark shadow-lg">
	{#if viewItem.imgUrl}
		<img src={viewItem.imgUrl} class="card-img-top rounded-4" alt={viewItem.name} />
	{/if}
	<div class="card-body">
		<div class="card-title text-white display-6 title p-1 m-1">
			{viewItem.name}
		</div>
		<div class="card-text text-white-50 p-1 m-1">
			{#if viewItem.description}
				<p>
					{viewItem.description}
				</p>
			{/if}
		</div>
		<div class="text-end p-1 m-1">
			<button
				type="button"
				class="btn btn-info rounded-pill"
				on:click={() => dispatch('setViewId', viewItem.id)}
			>
				<span class="h5 code">View</span>
			</button>
		</div>
	</div>
</div>
