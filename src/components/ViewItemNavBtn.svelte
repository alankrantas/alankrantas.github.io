<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { ViewItem } from '../data/Types';

	export let viewItem: ViewItem;
	export let selectedViewId: number;

	const dispatch = createEventDispatcher<{ setViewId: number }>();
</script>

<li class="nav-item p-1 m-1">
	<button
		type="button"
		class={`btn ${selectedViewId == viewItem.id ? 'btn-info' : 'btn-dark'} rounded-4 shadow`}
		on:click={() => dispatch('setViewId', viewItem.id)}
	>
		<span class="h5">{viewItem.name}</span>
	</button>
</li>
