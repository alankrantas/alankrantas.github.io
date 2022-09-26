<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { expoOut } from 'svelte/easing';

	$: counter = 42;

	const clickEvent = () => {
		counter++;
	};

	let ready = false;

	onMount(() => (ready = true));
</script>

{#if ready}
	<div class="container-fluid p-2 m-2" in:fly={{ y: 100, duration: 3000, easing: expoOut }}>
		<div class="display-4 p-2 m-2">Alan's Personal Site</div>
		<div class="card shadow p-2 m-2" style="width: 25rem;">
			<div class="card-body">
				<div class="card-title lead">Working in Progress</div>
				<div class="card-text">
					<span class="text-muted"
						>Still pounding on the question of life, the universe and everything</span
					>
					<div class="p-2 m-2">
						<button id="clicks" class="btn btn-primary btn-lg" on:click={clickEvent}>
							{#key counter}
								<span in:fade={{ duration: 250 }}>
									{counter}
								</span>
							{/key}
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
