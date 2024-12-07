<script lang="ts">
	import BuildLog from './BuildLog.svelte';

	import info from '$lib/data/info/BasicInfo.json';
</script>

<div class="text-center">
	<p>
		<br />
	</p>
	<p>
		<a href={info.repo} target="_blank">
			<img
				src="/website/github-mark-white.svg"
				width="40px"
				alt="github-mark-white"
				class="shadow"
			/>
		</a>
	</p>
	<p class="text-white-50">
		<b>© {new Date().getFullYear()} {info.name}</b>
		&nbsp;
		<img src="/website/taiwan-flag.svg" width="20px" alt="taiwan-flag" />
	</p>
	<p>
		<br />
	</p>
	<p>
		<BuildLog />
	</p>
</div>
