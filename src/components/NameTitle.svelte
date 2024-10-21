<script lang="ts">
	import { fade } from 'svelte/transition';

	import { createEventDispatcher } from 'svelte';

	import { screenSize } from '../data/Store';
	import info from '../data/BasicInfo.json';

	export let mode: String;
	let titleIndex = 0;

	const dispatch = createEventDispatcher<{ setViewId: number }>();

	setInterval(() => {
		titleIndex = titleIndex >= info.title.length - 1 ? 0 : titleIndex + 1;
	}, 2000);
</script>

{#if mode == 'main'}
	<!-- main screen -->
	{#if $screenSize >= 992}
		<div class="row d-flex justify-content-center p-md-2 m-md-2">
			<div class="col-sm text-end">
				<img src="/about-me/profile.jpg" width="40px" alt="profile" class="rounded-circle shadow" />
			</div>
			<div class="col-sm-auto text-center">
				<p class="text-white">
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
					</span>
				</p>
				<p class="text-white-50">
					<span class="lead code">
						{info.location}
					</span>
				</p>
			</div>
			<div class="col-sm text-start">
				<button class="btn btn-sm btn-dark rounded-pill" on:click={() => dispatch('setViewId', 0)}>
					<span class="h4">Enter</span>
				</button>
			</div>
		</div>
	{:else}
		{#if $screenSize < 768}
			<br />
		{/if}
		<div class="text-center">
			<div class="text-white p-sm-2 m-sm-2">
				{#if $screenSize >= 768}
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
					</span>
				{:else}
					<p>
						<span class="h2 title">
							{info.name}
						</span>
					</p>
					<p>
						<span class="h4">
							{#each info.title as title, index}
								{#if index == titleIndex}
									<span in:fade={{ duration: 750 }}>
										{title}
									</span>
								{/if}
							{/each}
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
				{#if $screenSize >= 768}
					<img
						src="/about-me/profile.jpg"
						width="40px"
						alt="profile"
						class="rounded-circle shadow"
					/>
					&nbsp;
				{/if}
				<button class="btn btn-bg btn-dark rounded-pill" on:click={() => dispatch('setViewId', 0)}>
					<span class="h4">Enter</span>
				</button>
			</p>
		</div>
		{#if $screenSize < 768}
			<br />
		{/if}
	{/if}
{:else if mode == 'nav'}
	<!-- nav and view screen -->
	{#if $screenSize >= 992}
		<div class="text-end">
			<button
				type="button"
				class="btn btn-dark rounded-4 shadow"
				on:click={() => dispatch('setViewId', -1)}
			>
				<span class="h5">Back to main</span>
			</button>
		</div>
		<div>
			<br /><br />
		</div>
		<div class="text-end">
			<img
				src="/about-me/profile.jpg"
				width="120px"
				alt="profile"
				class="img-thumbnail rounded-circle shadow"
			/>
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
	{:else if $screenSize >= 576}
		<br />
		<div class="row align-items-center">
			<div class="col-sm text-end">
				<img
					src="/about-me/profile.jpg"
					width="60px"
					alt="profile"
					class="img-thumbnail rounded-circle shadow"
				/>
			</div>
			<div class="col-sm text-center">
				<p class="h2 text-white title">
					<span class="badge bg-secondary">
						{info.name}
					</span>
				</p>
				<p class="h6 text-white-50 code p-md-1 m-md-1">
					{#each info.title as title, index}
						{#if index == titleIndex}
							<span in:fade={{ duration: 1000 }}>
								{title}
							</span>
						{/if}
					{/each}
				</p>
			</div>
			<div class="col-sm text-start">
				<button
					type="button"
					class="btn btn-sm btn-dark rounded-4 shadow"
					on:click={() => dispatch('setViewId', -1)}
				>
					<span class="h5">Main</span>
				</button>
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
				{#each info.title as title, index}
					{#if index == titleIndex}
						<span in:fade={{ duration: 1000 }}>
							{title}
						</span>
					{/if}
				{/each}
			</p>
		</div>
		<br />
		<div class="text-center">
			<button
				type="button"
				class="btn btn-sm btn-dark rounded-4 shadow"
				on:click={() => dispatch('setViewId', -1)}
			>
				<span class="h5">Main</span>
			</button>
		</div>
	{/if}
{/if}
