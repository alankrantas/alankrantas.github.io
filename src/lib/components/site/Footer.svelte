<script module lang="ts">
	import BuildLog from '$lib/components/site/BuildLog.svelte';

	import info from '$lib/data/info/BasicInfo.json';
</script>

<script lang="ts">
</script>

<div class="text-center">
	<p>
		<br />
	</p>
	<p>
		<a href={info.repo} target="_blank" rel="noreferrer noopener">
			<img
				src="/website/github-mark-white.svg"
				alt="github-mark-white"
				class="shadow"
				width="40px"
			/>
		</a>
	</p>
	<p class="text-white-50">
		<b>© {new Date().getFullYear()} {info.name}</b>
		&nbsp;
		<img src="/website/taiwan-flag.svg" alt="taiwan-flag" width="20px" />
	</p>
	<p>
		<br />
	</p>
	<p>
		<BuildLog />
	</p>
</div>
