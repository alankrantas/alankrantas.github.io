<script lang="ts">
	import Link from './Link.svelte';
	import type { WorkItem } from '../../data/Types';

	export let work: WorkItem;
</script>

<svelte:head>
	<link rel="preload" as="image" href={work.imgUrl} />
</svelte:head>

<div class="card text-white bg-secondary">
	<img src={work.imgUrl} class="card-img-top rounded-3 shadow-sm" alt={work.name} />
	<div class="card-body p-2 m-2" style="text-align: start;">
		<p class="card-title">
			<span class="fs-3">
				{work.name}
			</span>
			{#if work.link}
				<span class="h4">
					&nbsp;<b><Link url={work.link} name="⧉" /></b>
				</span>
			{/if}
		</p>
		{#if work.language}
			<p>
				{#each work.language as lang}
					<span class="badge rounded-pill bg-dark code">{lang}</span>
				{/each}
			</p>
		{/if}
		<hr class="text-white" />
		<p class="card-text lead">
			{work.description}
		</p>
		{#if work.category}
			<p>
				{#each work.category as cat}
					<span class="badge rounded-pill bg-white text-black code small">{cat}</span>
				{/each}
			</p>
		{/if}
	</div>
</div>
