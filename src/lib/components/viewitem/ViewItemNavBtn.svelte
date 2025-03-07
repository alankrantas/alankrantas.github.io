<script module lang="ts">
	import { innerWidth } from 'svelte/reactivity/window';

	interface Props {
		title: string;
		viewName: string;
		selectedView: string;
		handleSetView: (viewName: string) => void;
	}
</script>

<script lang="ts">
	let { title, viewName, selectedView, handleSetView }: Props = $props();
</script>

<li class="nav-item p-1 m-1">
	<button
		type="button"
		class={`btn ${selectedView === viewName ? 'btn-info' : 'btn-dark'} ${
			innerWidth.current && innerWidth.current >= 768 ? '' : 'btn-sm'
		} rounded-4 shadow`}
		onclick={() => handleSetView(viewName)}
	>
		<span
			class={`${innerWidth.current && innerWidth.current >= 768 ? 'h5' : 'h6'} ${
				selectedView === viewName ? 'fw-bold' : ''
			}`}>{title}</span
		>
	</button>
</li>
