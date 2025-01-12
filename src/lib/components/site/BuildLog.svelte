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
				.then((data: { buildTime: string }) => {
					if (data.buildTime && typeof data.buildTime == 'string') buildTime = data.buildTime;
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
