<script lang="ts">
	import { beforeUpdate } from 'svelte';

	import info from '../../data/BasicInfo.json';

	let build_time = '';
	beforeUpdate(async () => {
		try {
			const res = await fetch('/build-time.json');
			if (res.ok) {
				const data = await res.json();
				if (data.build_time && typeof data.build_time == 'string') build_time = data.build_time;
			}
		} catch (e) {
			// pass
		}
	});
</script>

<div class="text-center">
	<p>
		<a href="https://github.com/alankrantas/alankrantas.github.io" target="_blank">
			<img src="/github-mark-white.svg" width="40px" alt="github-mark-white" class="shadow" />
		</a>
	</p>
	<p class="text-white-50 small">
		<b>© {new Date().getFullYear()} {info.name}</b>
		&nbsp;
		<img src="/taiwan-flag.svg" width="20px" alt="taiwan-flag" />
	</p>
	{#if build_time}
		<p class="text-white-50 opacity-75 small">
			Last updated: {build_time} (UTC)
		</p>
	{/if}
</div>
