<script module lang="ts">
	import { innerWidth } from 'svelte/reactivity/window';

	import type { WorkItem } from '$lib/type/Types';

	import Link from '$lib/components/common/Link.svelte';

	import { replaceLink } from '$lib/util/util';

	interface Props {
		work: WorkItem;
	}
</script>

<script lang="ts">
	let { work }: Props = $props();

	let imgLoaded = $state(false);
</script>

<div class="card text-white bg-secondary">
	<form method="dialog">
		<button class="btn-close btn-lg text-bg-light modal-close-btn" aria-label="Close"></button>
	</form>
	<div class={!imgLoaded ? 'placeholder placeholder-wave' : ''}>
		<img
			loading="lazy"
			src={work.imgUrl}
			alt={work.name}
			class="card-img-top shadow rounded-3"
			onload={() => {
				imgLoaded = true;
			}}
		/>
	</div>
	<div class="card-body p-md-2 m-md-2" style="text-align: start;">
		<p class="card-title">
			<span class={innerWidth.current && innerWidth.current > 768 ? 'fs-3' : 'fs-4'}>
				{work.name}
			</span>
			{#if work.link}
				<span class={innerWidth.current && innerWidth.current > 768 ? 'h4' : 'h5'}>
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
		{#if work.description}
			<p class="card-text lead">
				<span class={innerWidth.current && innerWidth.current > 768 ? '' : 'small'}>
					{@html replaceLink(work.description)}
				</span>
			</p>
		{/if}
		{#if work.videoId}
			<p class="p-2 m-2 bg-dark rounded-3 shadow-sm">
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
			<p></p>
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

<style>
	.modal-close-btn {
		position: absolute;
		top: 0%;
		right: 0%;
	}

	.youtube-video {
		aspect-ratio: 16 / 9;
		width: 100%;
	}
</style>
