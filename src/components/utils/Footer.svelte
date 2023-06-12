<script lang="ts">
	import CommitLog from './CommitLog.svelte';
	import info from '../../data/BasicInfo.json';
</script>

<div class="text-center">
	<p>
		<br />
	</p>
	<p>
		<a href="https://github.com/alankrantas/alankrantas.github.io" target="_blank">
			<img src="/github-mark-white.svg" width="40px" alt="github-mark-white" class="shadow" />
		</a>
	</p>
	<p class="text-white-50">
		<b>© {new Date().getFullYear()} {info.name}</b>
		&nbsp;
		<img src="/taiwan-flag.svg" width="20px" alt="taiwan-flag" />
	</p>
	<p>
		<br />
	</p>
	<p>
		<CommitLog />
	</p>
</div>
