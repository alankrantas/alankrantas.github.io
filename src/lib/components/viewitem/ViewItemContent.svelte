<script lang="ts">
	interface Props {
		viewItemSource: string;
	}

	let { viewItemSource }: Props = $props();

	let ViewItemContent: any = $state(null);
	let loaded = $state(false);

	$effect.pre(() => {
		loaded = false;
		import(`$lib/components/viewitem-content/${viewItemSource}.svelte`).then((result) => {
			ViewItemContent = result?.default;
			if (ViewItemContent) loaded = true;
		});
	});
</script>

<div class="text-white">
	{#if loaded}
		<ViewItemContent />
	{:else}
		<p class="placeholder-wave">
			<span class="placeholder w-50 rounded-pill"></span>
			<span class="placeholder w-75 rounded-pill"></span>
			<span class="placeholder w-25 rounded-pill"></span>
		</p>
	{/if}
</div>
