<script module lang="ts">
	import type { PageData } from './$types';

	import { goto } from '$app/navigation';
	import { innerWidth } from 'svelte/reactivity/window';
	import { fly, fade } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';

	import NameTitle from '$lib/components/viewitem/NameTitle.svelte';
	import ViewItemNavBtn from '$lib/components/viewitem/ViewItemNavBtn.svelte';
	import ViewItemCard from '$lib/components/viewitem/ViewItemCard.svelte';
	import ViewItemHead from '$lib/components/viewitem/ViewItemHead.svelte';
	import ViewItemContent from '$lib/components/viewitem/ViewItemContent.svelte';
	import Footer from '$lib/components/site/Footer.svelte';

	import info from '$lib/data/info/BasicInfo.json';
	import viewItems from '$lib/data/info/ViewItems.json';

	viewItems[0].description = viewItems[0].description.replace('<name>', info.name);

	const scrollToTop = () =>
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
</script>

<script lang="ts">
	let { data }: { data: PageData } = $props();

	let selectedView = $state('main');
	let ready = $state(false);

	const setView = (viewName: string) => {
		if (viewName) viewName = viewName.toLocaleLowerCase();
		if (viewName != 'main' && viewItems.find((item) => item.viewName === viewName)) {
			selectedView = viewName;
			data.params.set('view', viewName);
			goto(`/?${data.params.toString()}`);
			scrollToTop();
		} else {
			selectedView = 'main';
			goto('/');
		}
	};

	$effect(() => {
		if (!ready) {
			const viewParam = data.params.get('view');
			setView(viewParam ? viewParam : 'main');
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

{#if !ready}
	<div class="container">
		<div class="text-center p-md-4 m-md-4">
			<div class="text-white-50 h4">
				<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
				<span class="sr-only">Loading...</span>
			</div>
		</div>
	</div>
{:else}
	<div class="container" in:fly={{ y: 100, delay: 200, duration: 2000, easing: expoOut }}>
		<div class="row justify-content-center p-md-4 m-md-4">
			{#if selectedView == 'main'}
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
						<NameTitle mode={'main'} handleSetView={setView} />
					</div>
					<!-- view cards -->
					{#if innerWidth.current && innerWidth.current >= 992}
						<div class="row">
							<div class="col-sm text-end p-md-2 m-md-2">
								{#each viewItems.filter((item, idx) => idx % 2 == 0) as viewItem, index (viewItem.viewName)}
									{#if index > 0}
										<div>
											<br /><br /><br />
											<hr class="text-white-50" />
											<br /><br /><br />
										</div>
									{/if}
									<ViewItemCard {viewItem} handleSetView={setView} />
								{/each}
							</div>
							{#if innerWidth.current >= 1200}
								<div class="col-sm-auto"></div>
							{/if}
							<div class="col-sm text-start p-md-2 m-md-2">
								{#each viewItems.filter((item, idx) => idx % 2 != 0) as viewItem, index (viewItem.viewName)}
									{#if index == 0}
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
									<ViewItemCard {viewItem} handleSetView={setView} />
								{/each}
							</div>
						</div>
					{:else}
						<div class="p-md-2 m-md-2">
							{#each viewItems as viewItem, index (viewItem.viewName)}
								{#if index > 0}
									<div>
										<br />
										{#if innerWidth.current && innerWidth.current >= 768}
											<br />
										{/if}
										<hr class="text-white-50" />
										<br />
										{#if innerWidth.current && innerWidth.current >= 768}
											<br />
										{/if}
									</div>
								{/if}
								<ViewItemCard {viewItem} handleSetView={setView} />
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
						innerWidth.current && innerWidth.current >= 992 ? 'col-sm-auto text-end' : 'text-center'
					} p-md-1 m-md-1 pe-md-2 me-md-2`}
					in:fly={{
						[innerWidth.current && innerWidth.current >= 992 ? 'x' : 'y']: -100,
						delay: 100,
						duration: 2000,
						easing: expoOut
					}}
				>
					<!-- name title -->
					<div class="p-md-1 m-md-1">
						<NameTitle mode={'nav'} handleSetView={setView} />
					</div>
					<div>
						<br />
					</div>
					<!-- name buttons -->
					<div
						class={innerWidth.current && innerWidth.current >= 992
							? ''
							: 'text-center p-md-1 m-md-1'}
					>
						<ul
							class={`nav pt-md-2 mt-md-2 ${
								innerWidth.current && innerWidth.current < 992 && innerWidth.current > 512
									? 'justify-content-center'
									: 'flex-column'
							}`}
						>
							{#each viewItems as viewItem (viewItem.viewName)}
								<ViewItemNavBtn
									title={viewItem.title}
									viewName={viewItem.viewName}
									{selectedView}
									handleSetView={setView}
								/>
							{/each}
						</ul>
					</div>
				</div>
				<!--view items -->
				<div
					class={`${innerWidth.current && innerWidth.current >= 992 ? 'col-sm-8 text-start' : ''} p-sm-1 m-sm-1 ps-sm-2 me-sm-2`}
					in:fade={{ delay: 200, duration: 2000, easing: expoOut }}
				>
					<div>
						<br />
					</div>
					<div>
						{#each viewItems as viewItem (viewItem.viewName)}
							<div>
								{#if selectedView == viewItem.viewName}
									<div>
										<!--sub view head -->
										<div
											class={innerWidth.current && innerWidth.current >= 576
												? 'p-sm-2 m-sm-2'
												: 'p-1 m-1'}
											in:fade|global={{ delay: 100, duration: 2000, easing: expoOut }}
										>
											<ViewItemHead {viewItem} />
										</div>
										<!--sub view content -->
										<div
											class={innerWidth.current && innerWidth.current >= 576
												? 'p-sm-2 m-sm-2'
												: 'p-1 m-1'}
											in:fly|global={{ y: 100, delay: 200, duration: 2000, easing: expoOut }}
										>
											<ViewItemContent viewItemSource={viewItem.fileName} />
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
