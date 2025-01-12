<script lang="ts">
	interface Props {
		viewItemSource: string;
	}

	let { viewItemSource }: Props = $props();

	let ViewItemContent: any = $state(null);

	import(`$lib/components/viewitem-content/${viewItemSource}.svelte`).then((result) => {
		ViewItemContent = result?.default;
	});
</script>

<div class="text-white">
	{#if ViewItemContent}
		<ViewItemContent />
	{/if}
</div>
