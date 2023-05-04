<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { name, title, location } from '../data/Data';

	export let mode: String;

	const dispatch = createEventDispatcher<{ setViewId: number }>();
</script>

<!-- main screen -->
{#if mode == 'main'}
	<div class="row d-flex justify-content-center p-2 m-2">
		<div class="col-sm text-end">
			<img src="/about-me/profile.jpg" width="40px" alt="profile" class="rounded-circle shadow" />
		</div>
		<div class="col-sm-auto text-center">
			<p class="text-white">
				<span class="h2 title">
					{name}
				</span>
				<span class="h5"> &nbsp;|&nbsp; </span>
				<span class="h4">
					{title}
				</span>
			</p>
			<p class="text-white-50">
				<span class="lead code">
					{location}
				</span>
			</p>
		</div>
		<div class="col-sm text-start">
			<button class="btn btn-sm btn-dark rounded-pill" on:click={() => dispatch('setViewId', 0)}>
				<span class="h4">Enter ⮯</span>
			</button>
		</div>
	</div>
	<!-- nav and view screen -->
{:else if mode == 'nav'}
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
		<br />
	</div>
	<div class="text-end">
		<img
			src="/about-me/profile.jpg"
			width="135px"
			alt="profile"
			class="img-thumbnail rounded-circle shadow"
		/>
	</div>
	<br />
	<div class="text-end">
		<p class="h2 text-white title">
			<span class="badge bg-secondary">
				{name}
			</span>
		</p>
		<p class="h5 text-white-50 code p-1 m-1">
			{title}
		</p>
	</div>
{/if}
