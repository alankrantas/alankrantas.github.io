<script lang="ts">
	import type { ViewItem } from '$lib/type/Types';

	interface Props {
		viewItem: ViewItem;
	}

	let { viewItem }: Props = $props();

	let ViewItemContent: any = $state(null);

	import(`$lib/components/viewitem-content/${viewItem.fileName}.svelte`).then((result) => {
		ViewItemContent = result?.default;
	});
</script>

<div class="text-white">
	{#if ViewItemContent}
		<ViewItemContent />
	{/if}
</div>
