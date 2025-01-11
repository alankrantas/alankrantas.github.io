<script lang="ts">
	import { innerWidth } from 'svelte/reactivity/window';

	import type { ViewItem } from '$lib/type/Types';

	interface Props {
		viewItem: ViewItem;
		selectedView: string;
		handleSetView: (viewName: string) => void;
	}

	let { viewItem, selectedView, handleSetView }: Props = $props();
</script>

<li class="nav-item p-1 m-1">
	<button
		type="button"
		class={`btn ${selectedView === viewItem.viewName ? 'btn-info' : 'btn-dark'} ${
			innerWidth.current && innerWidth.current >= 768 ? '' : 'btn-sm'
		} rounded-4 shadow`}
		onclick={() => handleSetView(viewItem.viewName)}
	>
		<span
			class={`${innerWidth.current && innerWidth.current >= 768 ? 'h5' : 'h6'} ${
				selectedView === viewItem.viewName ? 'fw-bold' : ''
			}`}>{viewItem.title}</span
		>
	</button>
</li>
