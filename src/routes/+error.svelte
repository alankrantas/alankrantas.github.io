<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="alert alert-warning">
	<span class="display-6 p-md-4 m-md-4">{$page.status}: {$page.error?.message}</span>
</div>
