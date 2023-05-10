<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import { screenSize } from '../data/Store';
	import type { ViewItem } from '../data/Types';

	export let viewItem: ViewItem;
	export let selectedViewId: number;

	const dispatch = createEventDispatcher<{ setViewId: number }>();
</script>

<li class="nav-item p-1 m-1">
	<button
		type="button"
		class={`btn ${selectedViewId == viewItem.id ? 'btn-info' : 'btn-dark'} ${
			$screenSize >= 768 ? '' : 'btn-sm'
		} rounded-4 shadow`}
		on:click={() => dispatch('setViewId', viewItem.id)}
	>
		<span
			class={`${$screenSize >= 768 ? 'h5' : 'h6'} ${
				selectedViewId == viewItem.id ? 'fw-bold' : ''
			}`}>{viewItem.name}</span
		>
	</button>
</li>
