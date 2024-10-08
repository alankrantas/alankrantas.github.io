<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { afterUpdate } from 'svelte';
	import { fly, fade, crossfade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { expoOut } from 'svelte/easing';

	import NameTitle from '../components/NameTitle.svelte';
	import ViewItemNavBtn from '../components/ViewItemNavBtn.svelte';
	import ViewItemCard from '../components/ViewItemCard.svelte';
	import ViewItemHead from '../components/ViewItemHead.svelte';
	import ViewItemContent from '../components/ViewItemContent.svelte';
	import Footer from '../components/common/Footer.svelte';

	import { screenSize } from '../data/Store';

	import info from '../data/BasicInfo.json';
	import viewItems from '../data/ViewItems.json';

	const showScreenSize = false; // enable to show screen size; for responsive design testing

	$: selectedViewId = -1;

	let ready = false;
	let scrollToTop = () => {};

	viewItems[0].description = viewItems[0].description
		.replace('<name>', info.name)
		.replace('<title>', info.title.map((item) => item.toLowerCase()).join(' / '))
		.replace('<industry>', info.industry);

	const setViewId = (id: number) => {
		if (id >= 0 && id < viewItems.length) {
			if (id != selectedViewId) {
				selectedViewId = id;
				$page.url.searchParams.set('view', String(id));
				goto(`/?${$page.url.searchParams.toString()}`);
			}
		} else {
			selectedViewId = -1;
			$page.url.searchParams.delete('view');
			goto('/');
		}
		if (selectedViewId != -1) scrollToTop();
	};

	const handleSetViewId = (event: CustomEvent<number>) => setViewId(event.detail);

	afterUpdate(() => {
		if (!ready) {
			scrollToTop = () =>
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				});
			const viewParam = $page.url.searchParams.get('view');
			if (viewParam && Number.isSafeInteger(parseInt(viewParam))) {
				setViewId(parseInt(viewParam));
			} else {
				setViewId(-1);
			}
			ready = true;
		}
	});

	const [send, receive] = crossfade({
		delay: 200,
		duration: 1000,
		easing: expoOut
	});
</script>

<svelte:head>
	{#each viewItems as viewItem}
		<link rel="preload" as="image" href={viewItem.imgUrl} />
	{/each}
	<link rel="preload" as="image" href="/about-me/profile.jpg" />
</svelte:head>

{#if showScreenSize}
	<div class="display-6 text-white text-center">
		<span>Screen size: {$screenSize}</span>
		<br />
		<hr />
	</div>
{/if}

{#if ready}
	<div class="container" in:fly|global={{ y: 100, delay: 100, duration: 2000, easing: expoOut }}>
		<div class="row justify-content-center p-md-4 m-md-4">
			{#if selectedViewId == -1}
				<!-- main screen -->
				<div
					class="col p-md-1 m-md-1"
					in:receive|global={{ key: 'main' }}
					out:send|global={{ key: 'view' }}
				>
					<!-- name title -->
					<div class="text-center p-sm-2 m-sm-2 pb-sm-4 mb-sm-4">
						<NameTitle mode={'main'} on:setViewId={handleSetViewId} />
					</div>
					<!-- view cards -->
					{#if $screenSize >= 992}
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
									<ViewItemCard {viewItem} on:setViewId={handleSetViewId} />
								{/each}
							</div>
							{#if $screenSize >= 1200}
								<div class="col-sm-auto" />
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
									<ViewItemCard {viewItem} on:setViewId={handleSetViewId} />
								{/each}
							</div>
						</div>
					{:else}
						<div class="p-md-2 m-md-2">
							{#each viewItems as viewItem (viewItem.id)}
								{#if viewItem.id > 0}
									<div>
										<br />
										{#if $screenSize >= 768}
											<br />
										{/if}
										<hr class="text-white-50" />
										<br />
										{#if $screenSize >= 768}
											<br />
										{/if}
									</div>
								{/if}
								<ViewItemCard {viewItem} on:setViewId={handleSetViewId} />
							{/each}
						</div>
					{/if}
					<div>
						<br />
						<br />
					</div>
					<!--back to top button -->
					<div class="text-center p-md-1 m-md-1">
						<button type="button" class="btn btn-dark rounded-4 shadow" on:click={scrollToTop}>
							<span class="h6">Back to top</span>
						</button>
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
						$screenSize >= 992 ? 'col-sm-auto text-end' : 'text-center'
					} p-md-1 m-md-1 pe-md-2 me-md-2`}
					in:receive|global={{ key: 'view' }}
					out:receive|global={{ key: 'main' }}
				>
					<!-- name title -->
					<div class="p-md-1 m-md-1">
						<NameTitle mode={'nav'} on:setViewId={handleSetViewId} />
					</div>
					<div>
						<br />
					</div>
					<!-- name buttons -->
					<div class={$screenSize >= 992 ? '' : 'text-center p-md-1 m-md-1'}>
						<ul
							class={`nav pt-md-2 mt-md-2 ${
								$screenSize >= 992 || $screenSize <= 512 ? 'flex-column' : 'justify-content-center'
							}`}
						>
							{#each viewItems as viewItem (viewItem.id)}
								<ViewItemNavBtn {viewItem} {selectedViewId} on:setViewId={handleSetViewId} />
							{/each}
						</ul>
					</div>
				</div>
				<!--view items -->
				<div
					class={`${$screenSize >= 992 ? 'col-sm-8 text-start' : ''} p-sm-1 m-sm-1 ps-sm-2 me-sm-2`}
					in:receive|global={{ key: 'view' }}
					out:send|global={{ key: 'main' }}
				>
					<div>
						<br />
					</div>
					<div>
						{#each viewItems as viewItem (viewItem.id)}
							<div animate:flip={{ duration: 500, easing: expoOut }}>
								{#if selectedViewId == viewItem.id}
									<div in:fade|global={{ delay: 100, duration: 500, easing: expoOut }}>
										<!--sub view head -->
										<div class={$screenSize >= 576 ? 'p-sm-2 m-sm-2' : 'p-1 m-1'}>
											<ViewItemHead {viewItem} />
										</div>
										<!--sub view content -->
										<div
											class={$screenSize >= 576 ? 'p-sm-2 m-sm-2' : 'p-1 m-1'}
											in:fly|global={{ y: 100, delay: 250, duration: 1000, easing: expoOut }}
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
						<button type="button" class="btn btn-dark rounded-4 shadow" on:click={scrollToTop}>
							<span class="h6">Back to top</span>
						</button>
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
