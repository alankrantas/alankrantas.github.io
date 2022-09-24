<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="alert alert-warning">
	<h1 class="display-6 p-2 m-2">{$page.status}: {$page.error?.message}</h1>
</div>
