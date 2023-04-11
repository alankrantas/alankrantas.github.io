<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade, crossfade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { expoOut } from 'svelte/easing';
	import { ViewItems } from '../data/ViewItems';
	import NameTitle from '../components/NameTitle.svelte';
	import ViewItemNavBtn from '../components/ViewItemNavBtn.svelte';
	import ViewItemCard from '../components/ViewItemCard.svelte';
	import ViewItemHead from '../components/ViewItemHead.svelte';
	import ViewItemContent from '../components/ViewItemContent.svelte';
	import Footer from '../components/Footer.svelte';

	let innerWidth = 0;
	let innerHeight = 0;
	let ready = false;
	let scrollToTop = () => {};

	$: selectedViewId = -1;

	onMount(() => {
		scrollToTop = () => {
			document.body.scrollTop = 0; // For Safari
			document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		};
		ready = true;
	});

	const [send, receive] = crossfade({
		delay: 100,
		duration: 1000,
		easing: expoOut
	});

	const handleSetViewId = (event: { detail: number }) => {
		selectedViewId = event.detail;
		scrollToTop();
	};
</script>

<svelte:window bind:innerWidth bind:innerHeight />

{#if ready}
	<div class="container-sm" in:fly={{ y: 100, duration: 2500, easing: expoOut }}>
		<div class="row p-4 m-4">
			<!-- nav bar -->
			{#if selectedViewId != -1}
				<div
					class="col-sm-auto p-1 m-1"
					in:receive={{ key: 'subview' }}
					out:receive={{ key: 'main' }}
				>
					<div>
						<br />
					</div>
					<!-- name title -->
					<div class="p-1 m-1">
						<NameTitle mode={'nav'} />
					</div>
					<br />
					<!-- name buttons -->
					<ul class="nav flex-column text-end">
						{#each ViewItems as viewItem (viewItem.id)}
							<div class="p-1 m-1">
								<ViewItemNavBtn {viewItem} {selectedViewId} on:setViewId={handleSetViewId} />
							</div>
						{/each}
					</ul>
				</div>
			{/if}
			<!-- main area -->
			{#if selectedViewId == -1}
				<div class="col p-1 m-1" in:receive={{ key: 'main' }} out:send={{ key: 'subview' }}>
					<!-- name title -->
					<div class="p-4 m-4">
						<NameTitle mode={'main'} />
					</div>
					<br />
					<!-- view cards -->
					<div class="row">
						<div class="col p-2 m-2">
							{#each ViewItems.filter((item) => item.id % 2 == 0) as viewItem (viewItem.id)}
								{#if viewItem.id > 0}
									<div>
										<br /><br /><br />
										<hr class="text-white-50" />
										<br /><br /><br />
									</div>
								{/if}
								<ViewItemCard {viewItem} on:setViewId={handleSetViewId} />
							{/each}
						</div>
						<div class="col-sm-auto" />
						<div class="col p-2 m-2">
							{#each ViewItems.filter((item) => item.id % 2 != 0) as viewItem (viewItem.id)}
								{#if viewItem.id == 1}
									<div>
										<br /><br /><br />
										<br /><br /><br />
										<br /><br /><br />
										<br /><br /><br />
									</div>
								{:else}
									<div>
										<br /><br /><br />
										<hr class="text-white-50" />
										<br /><br /><br />
									</div>
								{/if}
								<ViewItemCard {viewItem} on:setViewId={handleSetViewId} />
							{/each}
						</div>
					</div>
					<div>
						<br />
					</div>
					<!-- footer -->
					<div class="p-4 m-4">
						<Footer mode={'main'} />
					</div>
				</div>
			{:else}
				<!--sub view -->
				<div class="col p-1 m-1" in:receive={{ key: 'subview' }} out:send={{ key: 'main' }}>
					<div>
						<br /><br />
					</div>
					<!--back to main button -->
					<div class="text-end p-2 m-2">
						<button
							type="button"
							class="btn btn-dark rounded-4 shadow"
							on:click={() => (selectedViewId = -1)}
						>
							<span class="h5">Back to main</span>
						</button>
					</div>
					<div>
						<br />
					</div>
					<div>
						{#each ViewItems as viewItem (viewItem.id)}
							<div animate:flip={{ delay: 100, duration: 500, easing: expoOut }}>
								{#if selectedViewId == viewItem.id}
									<div in:fade={{ delay: 250, duration: 2000, easing: expoOut }}>
										<!--sub view head -->
										<div class="p-2 m-2">
											<ViewItemHead {viewItem} />
										</div>
										<hr class="text-light p-2 m-2" />
										<div>
											<br />
										</div>
										<!--sub view content -->
										<div class="text-white p-2 m-2">
											<ViewItemContent viewItemId={viewItem.id} />
										</div>
									</div>
								{/if}
							</div>
						{/each}
					</div>
					<div>
						<br />
					</div>
					<!--back to top button -->
					<div class="text-end p-2 m-2">
						<button type="button" class="btn btn-dark rounded-4 shadow" on:click={scrollToTop}>
							<span class="h5">Back to top</span>
						</button>
					</div>
					<div>
						<br />
					</div>
					<!-- footer -->
					<div class="p-4 m-4">
						<Footer mode={'subview'} />
					</div>
				</div>
			{/if}
		</div>
	</div>
{/if}
