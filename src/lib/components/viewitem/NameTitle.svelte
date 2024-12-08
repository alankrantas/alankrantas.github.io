<script lang="ts">
	import { fade } from 'svelte/transition';

	import { screenSize } from '$lib/store/GlobalStates.svelte';
	import info from '$lib/data/info/BasicInfo.json';

	interface Props {
		mode: String;
		handleSetViewId: (id: number) => void;
	}

	let { mode, handleSetViewId }: Props = $props();

	let titleIndex = $state(0);

	setInterval(() => {
		titleIndex = titleIndex >= info.title.length - 1 ? 0 : titleIndex + 1;
	}, 2000);
</script>

<svelte:head>
	<link rel="preload" as="image" href="/about-me/profile.jpg" />
</svelte:head>

{#snippet titleCarousell(duration: number)}
	{#each info.title as title, index}
		{#if index == titleIndex}
			<span in:fade={{ duration: duration }}>
				{title}
			</span>
		{/if}
	{/each}
{/snippet}

{#snippet nameTitle()}
	<span class="h2 title">
		{info.name}
	</span>
	<span class="h5"> &nbsp;|&nbsp; </span>
	<span class="h4">
		{#each info.title as title, index}
			{#if index == titleIndex}
				<span in:fade={{ duration: 750 }}>
					{title}
				</span>
			{/if}
		{/each}
		<!-- {@render titleCarousell(750)} -->
	</span>
{/snippet}

{#snippet profileImg(width: string)}
	<img
		src="/about-me/profile.jpg"
		{width}
		alt="profile"
		class="img-thumbnail rounded-circle shadow"
	/>
{/snippet}

{#snippet backBtn(text: string)}
	<button
		type="button"
		class="btn btn-sm btn-dark rounded-4 shadow"
		onclick={() => handleSetViewId(-1)}
	>
		<span class="h5">{text}</span>
	</button>
{/snippet}

{#if mode == 'main'}
	<!-- main screen -->
	{#if screenSize.value >= 992}
		<div class="row d-flex justify-content-center p-md-2 m-md-2">
			<div class="col-sm text-end">
				<img src="/about-me/profile.jpg" width="40px" alt="profile" class="rounded-circle shadow" />
			</div>
			<div class="col-sm-auto text-center">
				<p class="text-white">
					{@render nameTitle()}
				</p>
				<p class="text-white-50">
					<span class="lead code">
						{info.location}
					</span>
				</p>
			</div>
			<div class="col-sm text-start">
				<button class="btn btn-sm btn-dark rounded-pill" onclick={() => handleSetViewId(0)}>
					<span class="h4">Enter</span>
				</button>
			</div>
		</div>
	{:else}
		{#if screenSize.value < 768}
			<br />
		{/if}
		<div class="text-center">
			<div class="text-white p-sm-2 m-sm-2">
				{#if screenSize.value >= 768}
					{@render nameTitle()}
				{:else}
					<p>
						<span class="h2 title">
							{info.name}
						</span>
					</p>
					<p>
						<span class="h4">
							{@render titleCarousell(750)}
						</span>
					</p>
				{/if}
			</div>
			<p class="text-white-50 p-sm-2 m-sm-2">
				<span class="lead code">
					{info.location}
				</span>
			</p>
			<p class="p-sm-2 m-sm-2">
				{#if screenSize.value >= 768}
					{@render profileImg('40px')}
					&nbsp;
				{/if}
				<button class="btn btn-bg btn-dark rounded-pill" onclick={() => handleSetViewId(0)}>
					<span class="h4">Enter</span>
				</button>
			</p>
		</div>
		{#if screenSize.value < 768}
			<br />
		{/if}
	{/if}
{:else if mode == 'nav'}
	<!-- nav and view screen -->
	{#if screenSize.value >= 992}
		<div class="text-end">
			{@render backBtn('Back to main')}
		</div>
		<div>
			<br /><br />
		</div>
		<div class="text-end">
			{@render profileImg('120px')}
		</div>
		<div>
			<br />
		</div>
		<div class="text-end">
			<p class="h2 text-white title">
				<span class="badge bg-secondary">
					{info.name}
				</span>
			</p>
			<p class="h6 text-white-50 code p-md-1 m-md-1">
				{#each info.title as title, index}
					<span style={index == titleIndex ? 'font-weight: bold;' : 'font-weight: normal;'}>
						{title}
						<br />
					</span>
				{/each}
			</p>
		</div>
	{:else if screenSize.value >= 576}
		<br />
		<div class="row align-items-center">
			<div class="col-sm text-end">
				{@render profileImg('60px')}
			</div>
			<div class="col-sm text-center">
				<p class="h2 text-white title">
					<span class="badge bg-secondary">
						{info.name}
					</span>
				</p>
				<p class="h6 text-white-50 code p-md-1 m-md-1">
					{@render titleCarousell(1000)}
				</p>
			</div>
			<div class="col-sm text-start">
				{@render backBtn('Main')}
			</div>
		</div>
	{:else}
		<br />
		<div class="text-center">
			<p class="h3 text-white title">
				<span class="badge bg-secondary">
					{info.name}
				</span>
			</p>
			<p class="h6 text-white-50 code p-md-1 m-md-1">
				{@render titleCarousell(1000)}
			</p>
		</div>
		<br />
		<div class="text-center">
			{@render backBtn('Main')}
		</div>
	{/if}
{/if}
