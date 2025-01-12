<script lang="ts">
	import { page } from '$app/stores';

	import ErrorPage from '$lib/components/site/ErrorPage.svelte';
</script>

<ErrorPage message={`${$page.status}: ${$page?.error?.message}`} />
