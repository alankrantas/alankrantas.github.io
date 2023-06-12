<script lang="ts">
	import { dev } from '$app/environment';
	import { beforeUpdate } from 'svelte';

	import type { BuildLog } from '../../data/Types';

	let build: BuildLog = {
		build_time: dev ? '1970-01-01 00:00' : null,
		build_message: dev ? 'dev mode' : null
	};

	beforeUpdate(() => {
		if (dev) return;
		fetch('/build.json')
			.then((res) => res.json())
			.then((data: BuildLog) => {
				if (data.build_time && typeof data.build_time == 'string')
					build.build_time = data.build_time;
				if (data.build_message && typeof data.build_message == 'string')
					build.build_message = data.build_message;
			});
	});
</script>

<div class="text-center">
	{#if build.build_time}
		<p class="text-white-50 opacity-75 small code">
			Last updated: {build.build_time} (UTC)
		</p>
	{/if}
	{#if build.build_message}
		<p class="text-white-50 opacity-50 small code">
			Commit log: {build.build_message}
		</p>
	{/if}
</div>
