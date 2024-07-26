<script lang="ts">
	import Link from './Link.svelte';
	import type { WorkItem } from '../../data/Types';

	import { screenSize } from '../../data/Store';

	export let work: WorkItem;
</script>

<svelte:head>
	<link rel="preload" as="image" href={work.imgUrl} />
</svelte:head>

<div class="card text-white bg-secondary">
	<img src={work.imgUrl} class="card-img-top rounded-3 shadow-sm" alt={work.name} />
	<div class="card-body p-md-2 m-md-2" style="text-align: start;">
		<p class="card-title">
			<span class={$screenSize > 768 ? 'fs-3' : 'fs-4'}>
				{work.name}
			</span>
			{#if work.link}
				<span class={$screenSize > 768 ? 'h4' : 'h5'}>
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
			<span class={$screenSize > 768 ? '' : 'small'}>
				{work.description}
			</span>
		</p>
		{#if work.videoId}
			<p>
				<iframe
					class="youtube-video"
					src={`https://www.youtube-nocookie.com/embed/${work.videoId};controls=0`}
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
			</p>
		{/if}
		{#if work.category}
			<p>
				{#each work.category as cat}
					<span class="badge rounded-pill bg-white text-black code small">{cat}</span>
				{/each}
			</p>
		{/if}
	</div>
</div>
