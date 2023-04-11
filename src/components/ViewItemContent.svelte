<script lang="ts">
	import AboutMe from './ViewItems/AboutMe.svelte';

	export let viewItemId: number;
</script>

<div class="text-white">
	{#if viewItemId == 0}
		<AboutMe />
	{/if}
</div>
