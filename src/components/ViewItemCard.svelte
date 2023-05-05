<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { ViewItem } from '../data/Types';

	export let viewItem: ViewItem;

	const dispatch = createEventDispatcher<{ setViewId: number }>();
</script>

<div class="card rounded-4 bg-dark shadow-lg">
	<img loading="lazy" src={viewItem.imgUrl} class="card-img-top rounded-4" alt={viewItem.name} />
	<div class="card-body">
		<div class="card-title text-start text-white display-6 title p-1 m-1">
			{viewItem.name}
		</div>
		<div class="card-text text-start text-white-50 p-1 m-1">
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
				<span class="h3 code">⇚</span>
			</button>
		</div>
	</div>
</div>
