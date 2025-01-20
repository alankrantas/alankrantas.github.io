<script lang="ts">
	interface Props {
		viewItemSource: string;
	}

	let { viewItemSource }: Props = $props();

	let ViewItemContent: any = $state(null);

	$effect.pre(() => {
		import(`$lib/components/viewitem-content/${viewItemSource}.svelte`).then((result) => {
			ViewItemContent = result?.default;
		});
	});
</script>

<div class="text-white">
	{#if ViewItemContent}
		<ViewItemContent />
	{:else}
		<p class="placeholder-wave">
			<span class="placeholder w-50 rounded-pill"></span>
			<span class="placeholder w-75 rounded-pill"></span>
			<span class="placeholder w-25 rounded-pill"></span>
		</p>
	{/if}
</div>
