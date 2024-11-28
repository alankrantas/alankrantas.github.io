<script lang="ts">
	import { screenSize } from '../../data/Store.svelte';
	import type { ViewItem } from '../../data/Types';

	interface Props {
		viewItem: ViewItem;
		selectedViewId: number;
		handleSetViewId: (id: number) => void;
	}

	let { viewItem, selectedViewId, handleSetViewId }: Props = $props();
</script>

<li class="nav-item p-1 m-1">
	<button
		type="button"
		class={`btn ${selectedViewId == viewItem.id ? 'btn-info' : 'btn-dark'} ${
			screenSize.value >= 768 ? '' : 'btn-sm'
		} rounded-4 shadow`}
		onclick={() => handleSetViewId(viewItem.id)}
	>
		<span
			class={`${screenSize.value >= 768 ? 'h5' : 'h6'} ${
				selectedViewId == viewItem.id ? 'fw-bold' : ''
			}`}>{viewItem.name}</span
		>
	</button>
</li>
