<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="alert alert-warning text-center">
	<p class="display-6 p-md-2 m-md-2">Oops!</p>
	<p class="code p-md-2 m-md-2">
		{$page.status}: {$page.error?.message || 'Unknown'}
	</p>
	<p class="lead p-md-2 m-md-2">
		Keep calm and carry on being rickrolled. <small>(Or simply go back :D)</small>
	</p>
	<p class="p-md-3 m-md-3">
		<iframe
			width="560"
			height="315"
			src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=sjnpqqTSXPh5JLvP&amp;autoplay=1&mute=1&controls=1"
			title="You've got rickrolled"
			frameborder="0"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
	</p>
	<p class="p-md-2 m-md-2">
		<a href="/" class="btn btn-secondary rounded-4">Back</a>
	</p>
</div>
