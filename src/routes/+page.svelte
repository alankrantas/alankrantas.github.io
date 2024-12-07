<!-- @migration-task Error while migrating Svelte code: Can't migrate code with afterUpdate. Please migrate by hand. -->
<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { fly, fade } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';

	import { screenSize } from '$lib/store/GlobalStates.svelte';

	import NameTitle from '$lib/components/viewitem/NameTitle.svelte';
	import ViewItemNavBtn from '$lib/components/viewitem/ViewItemNavBtn.svelte';
	import ViewItemCard from '$lib/components/viewitem/ViewItemCard.svelte';
	import ViewItemHead from '$lib/components/viewitem/ViewItemHead.svelte';
	import ViewItemContent from '$lib/components/viewitem/ViewItemContent.svelte';
	import Footer from '$lib/components/viewitem/Footer.svelte';

	import info from '$lib/data/info/BasicInfo.json';
	import viewItems from '$lib/data/info/ViewItems.json';

	viewItems[0].description = viewItems[0].description
		.replace('<name>', info.name)
		.replace('<title>', info.title.map((item) => item.toLowerCase()).join(' | '));

	let selectedViewId = $state(-1);
	let ready = $state(false);

	const scrollToTop = () =>
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});

	const setViewId = (id: number) => {
		if (id >= 0 && id < viewItems.length) {
			if (id != selectedViewId) {
				selectedViewId = id;
				$page.url?.searchParams.set('view', String(id));
				goto(`/?${$page.url.searchParams.toString()}`);
			}
		} else {
			if (selectedViewId != -1) {
				selectedViewId = -1;
				$page.url?.searchParams.delete('view');
				goto('/');
			}
		}
		if (selectedViewId != -1) scrollToTop();
	};

	$effect(() => {
		if (!ready) {
			const viewParam = $page.url?.searchParams.get('view');
			if (viewParam && Number.isSafeInteger(parseInt(viewParam))) {
				setViewId(parseInt(viewParam));
			} else {
				setViewId(-1);
			}
			ready = true;
		}
	});
</script>

<svelte:head>
	{#each viewItems as viewItem}
		<link rel="preload" as="image" href={viewItem.imgUrl} />
	{/each}
</svelte:head>

{#snippet backToTopBtn()}
	<button type="button" class="btn btn-dark rounded-4 shadow" onclick={scrollToTop}>
		<span class="h6">Back to top</span>
	</button>
{/snippet}

{#if ready}
	<div class="container" in:fly={{ y: 100, delay: 200, duration: 2000, easing: expoOut }}>
		<div class="row justify-content-center p-md-4 m-md-4">
			{#if selectedViewId == -1}
				<!-- main screen -->
				<div
					class="col p-md-1 m-md-1"
					in:fly={{ y: -100, delay: 200, duration: 2000, easing: expoOut }}
				>
					<!-- name title -->
					<div
						class="text-center p-sm-2 m-sm-2 pb-sm-4 mb-sm-4"
						in:fade|global={{ delay: 100, duration: 1000, easing: expoOut }}
					>
						<NameTitle mode={'main'} handleSetViewId={setViewId} />
					</div>
					<!-- view cards -->
					{#if screenSize.value >= 992}
						<div class="row">
							<div class="col-sm text-end p-md-2 m-md-2">
								{#each viewItems.filter((item) => item.id % 2 == 0) as viewItem (viewItem.id)}
									{#if viewItem.id > 0}
										<div>
											<br /><br /><br />
											<hr class="text-white-50" />
											<br /><br /><br />
										</div>
									{/if}
									<ViewItemCard {viewItem} handleSetViewId={setViewId} />
								{/each}
							</div>
							{#if screenSize.value >= 1200}
								<div class="col-sm-auto"></div>
							{/if}
							<div class="col-sm text-start p-md-2 m-md-2">
								{#each viewItems.filter((item) => item.id % 2 != 0) as viewItem (viewItem.id)}
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
									<ViewItemCard {viewItem} handleSetViewId={setViewId} />
								{/each}
							</div>
						</div>
					{:else}
						<div class="p-md-2 m-md-2">
							{#each viewItems as viewItem (viewItem.id)}
								{#if viewItem.id > 0}
									<div>
										<br />
										{#if screenSize.value >= 768}
											<br />
										{/if}
										<hr class="text-white-50" />
										<br />
										{#if screenSize.value >= 768}
											<br />
										{/if}
									</div>
								{/if}
								<ViewItemCard {viewItem} handleSetViewId={setViewId} />
							{/each}
						</div>
					{/if}
					<div>
						<br />
						<br />
					</div>
					<!--back to top button -->
					<div class="text-center p-md-1 m-md-1">
						{@render backToTopBtn()}
					</div>
					<div>
						<br />
					</div>
					<!-- footer -->
					<div class="p-md-2 m-md-2">
						<Footer />
					</div>
				</div>
			{:else}
				<!-- view screen -->
				<div
					class={`${
						screenSize.value >= 992 ? 'col-sm-auto text-end' : 'text-center'
					} p-md-1 m-md-1 pe-md-2 me-md-2`}
					in:fly={{
						[screenSize.value >= 992 ? 'x' : 'y']: -100,
						delay: 100,
						duration: 2000,
						easing: expoOut
					}}
				>
					<!-- name title -->
					<div class="p-md-1 m-md-1">
						<NameTitle mode={'nav'} handleSetViewId={setViewId} />
					</div>
					<div>
						<br />
					</div>
					<!-- name buttons -->
					<div class={screenSize.value >= 992 ? '' : 'text-center p-md-1 m-md-1'}>
						<ul
							class={`nav pt-md-2 mt-md-2 ${
								screenSize.value < 992 && screenSize.value > 512
									? 'justify-content-center'
									: 'flex-column'
							}`}
						>
							{#each viewItems as viewItem (viewItem.id)}
								<ViewItemNavBtn {viewItem} {selectedViewId} handleSetViewId={setViewId} />
							{/each}
						</ul>
					</div>
				</div>
				<!--view items -->
				<div
					class={`${screenSize.value >= 992 ? 'col-sm-8 text-start' : ''} p-sm-1 m-sm-1 ps-sm-2 me-sm-2`}
					in:fade={{ delay: 200, duration: 2000, easing: expoOut }}
				>
					<div>
						<br />
					</div>
					<div>
						{#each viewItems as viewItem (viewItem.id)}
							<div>
								{#if selectedViewId == viewItem.id}
									<div>
										<!--sub view head -->
										<div
											class={screenSize.value >= 576 ? 'p-sm-2 m-sm-2' : 'p-1 m-1'}
											in:fade|global={{ delay: 100, duration: 2000, easing: expoOut }}
										>
											<ViewItemHead {viewItem} />
										</div>
										<!--sub view content -->
										<div
											class={screenSize.value >= 576 ? 'p-sm-2 m-sm-2' : 'p-1 m-1'}
											in:fly|global={{ y: 100, delay: 200, duration: 2000, easing: expoOut }}
										>
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
					<div class="text-center p-sm-1 m-sm-1">
						{@render backToTopBtn()}
					</div>
					<div>
						<br />
					</div>
					<!-- footer -->
					<div class="p-md-4 m-md-4">
						<Footer />
					</div>
				</div>
			{/if}
		</div>
	</div>
{/if}
