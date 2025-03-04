<script lang="ts">
	import Link from '$lib/components/common/Link.svelte';

	import info from '$lib/data/info/BasicInfo.json';

	import { replaceLink } from '$lib/util/util';

	interface Props {
		message?: string;
		enableBackBtn?: boolean;
	}

	let { message = 'Unknown error', enableBackBtn = true }: Props = $props();
</script>

<div class="alert alert-warning text-center">
	<p class="display-6 p-md-2 m-md-2">Oops!</p>
	<p class="code p-md-2 m-md-2">
		{@html replaceLink(message)}
	</p>
	{#if enableBackBtn}
		<p class="lead p-md-2 m-md-2">
			Keep calm and carry on being rickrolled. <small>(Or simply go back :D)</small>
		</p>
		<p class="p-md-3 m-md-3">
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=sjnpqqTSXPh5JLvP&amp;autoplay=1&mute=1&controls=1"
				title="You've got rickrolled!"
				frameborder="0"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</p>
		<p class="p-md-2 m-md-2">
			<a href="/" class="btn btn-secondary rounded-4">Back</a>
		</p>
	{:else}
		<p class="lead p-md-2 m-md-2">
			Please contact the <Link name="owner" url={info.repo} /> and wait until the error is fixed.
		</p>
		<p class="p-md-3 m-md-3">
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/a01QQZyl-_I?si=8dnLyRy_VpHKtUef&amp;autoplay=1&mute=1&controls=1"
				title="Oh my god!"
				frameborder="0"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</p>
	{/if}
</div>
