<script lang="ts">
	import { dev } from '$app/environment';

	let buildTime: string | null = $state(null);

	$effect.pre(() => {
		if (dev) {
			const now = new Date();
			buildTime = `(Dev) ${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;
		} else {
			fetch('/website/build.json')
				.then((res) => res.json())
				.then((data: { build_time: string }) => {
					if (data.build_time && typeof data.build_time == 'string') buildTime = data.build_time;
				});
		}
	});
</script>

<div class="text-center">
	{#if buildTime}
		<p class="text-white-50 opacity-75 small code">
			Last built at: {buildTime} (UTC)
		</p>
	{/if}
</div>
