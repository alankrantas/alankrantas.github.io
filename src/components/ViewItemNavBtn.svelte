<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { ViewItem } from '../data/ViewItems';

	export let viewItem: ViewItem;
	export let selectedViewId: number;

	const dispatch = createEventDispatcher<{ setViewId: number }>();
</script>

<li class="nav-item">
	<button
		type="button"
		class={`btn btn-lg ${selectedViewId == viewItem.id ? 'btn-info' : 'btn-dark'} rounded-4 shadow`}
		on:click={() => dispatch('setViewId', viewItem.id)}
	>
		<span class="h4">{viewItem.name}</span>
	</button>
</li>
