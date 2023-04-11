<script lang="ts">
	import type { ViewItem } from '../data/ViewItems';

	export let viewItem: ViewItem;
</script>

<div class="text-center">
	<div>
		{#if viewItem.imgUrl}
			<img src={viewItem.imgUrl} class="rounded-5 w-75 p-1 m-1" alt={viewItem.name} />
		{/if}
	</div>
	<div class="text-white display-6 title p-2 m-2">
		{viewItem.name}
	</div>
</div>
