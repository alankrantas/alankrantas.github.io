<script lang="ts">
	import { dev } from '$app/environment';
	import { beforeUpdate } from 'svelte';

	let build_time: string | null = null;

	beforeUpdate(() => {
		if (dev) {
			build_time = '1970-01-01 00:00';
			return;
		}
		fetch('/build.json')
			.then((res) => res.json())
			.then((data: { build_time: string }) => {
				if (data.build_time && typeof data.build_time == 'string') build_time = data.build_time;
			});
	});
</script>

<div class="text-center">
	{#if build_time}
		<p class="text-white-50 opacity-75 small code">
			Last updated: {build_time} (UTC)
		</p>
	{/if}
</div>
