<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import { screenSize } from '../data/Store';
	import info from '../data/BasicInfo.json';

	export let mode: String;

	const dispatch = createEventDispatcher<{ setViewId: number }>();
</script>

{#if mode == 'main'}
	<!-- main screen -->
	{#if $screenSize >= 992}
		<div class="row d-flex justify-content-center p-2 m-2">
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
						{info.title}
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
					<span class="h4">Enter ⮯</span>
				</button>
			</div>
		</div>
	{:else}
		<div class="text-center">
			<p class="text-white p-2 m-2">
				<span class="h2 title">
					{info.name}
				</span>
				<span class="h5"> &nbsp;|&nbsp; </span>
				<span class="h4">
					{info.title}
				</span>
			</p>
			<p class="text-white-50 p-2 m-2">
				<span class="lead code">
					{info.location}
				</span>
			</p>
			<p class="p-2 m-2">
				<img src="/about-me/profile.jpg" width="40px" alt="profile" class="rounded-circle shadow" />
				&nbsp;
				<button class="btn btn-bg btn-dark rounded-pill" on:click={() => dispatch('setViewId', 0)}>
					<span class="h4">Enter ⮯</span>
				</button>
			</p>
		</div>
	{/if}
{:else if mode == 'nav'}
	{#if $screenSize >= 992}
		<!-- nav and view screen -->
		<div class="text-end">
			<button
				type="button"
				class="btn btn-dark rounded-4 shadow"
				on:click={() => dispatch('setViewId', -1)}
			>
				<span class="h5">Back to main ⭲</span>
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
			<p class="h5 text-white-50 code p-1 m-1">
				{info.title}
			</p>
		</div>
	{:else}
		<!-- nav and view screen (mobile) -->
		<div class="row align-items-center">
			<div class="col-sm text-end">
				<img
					src="/about-me/profile.jpg"
					width="80px"
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
				<p class="h5 text-white-50 code p-1 m-1">
					{info.title}
				</p>
			</div>
			<div class="col-sm text-start">
				<button
					type="button"
					class="btn btn-sm btn-dark rounded-4 shadow"
					on:click={() => dispatch('setViewId', -1)}
				>
					<span class="h5">Main<br />⭷</span>
				</button>
			</div>
		</div>
	{/if}
{/if}
