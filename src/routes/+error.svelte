<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="alert alert-warning">
	<p class="display-6 p-md-2 m-md-2">
		{$page.status}: {$page.error?.message}
	</p>
	<p class="p-md-2 m-md-2">
		<a href="/" class="btn btn-secondary rounded-4">Back</a>
	</p>
</div>
