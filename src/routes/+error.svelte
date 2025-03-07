<script module lang="ts">
	import { page } from '$app/state';

	import ErrorPage from '$lib/components/site/ErrorPage.svelte';
</script>

<script lang="ts">
</script>

<ErrorPage message={`${page.status}: ${page.error?.message || '(no description)'}`} />
