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
	import Footer from '../components/Footer.svelte';
	import { name, title, industry } from '../data/NameTitle';
	import type { ViewItem } from '../data/Types';

	let ready = false;
	let scrollToTop = () => {};

	$: selectedViewId = -1;

	const setViewId = (id: number) => {
		if (id >= 0 && id <= viewItems.length - 1) {
			selectedViewId = id;
			$page.url.searchParams.set('view', String(selectedViewId));
			goto(`/?${$page.url.searchParams.toString()}`);
		} else {
			selectedViewId = -1;
			$page.url.searchParams.delete('view');
			goto('/');
		}
		if (selectedViewId != -1) scrollToTop();
	};

	const handleSetViewId = (event: { detail: number }) => setViewId(event.detail);

	afterUpdate(() => {
		if (!ready) {
			scrollToTop = () => {
				window.scrollTo({
					top: 0,
					behavior: 'auto'
				});
			};
			try {
				setViewId(Number($page.url.searchParams.get('view') ?? -1));
			} catch (e) {
				setViewId(-1);
			}
			ready = true;
		}
	});

	const [send, receive] = crossfade({
		delay: 100,
		duration: 1000,
		easing: expoOut
	});

	const viewItems: ViewItem[] = [
		{
			id: 0,
			name: 'About Me',
			description: `${name}, a ${title} working in the ${industry} | he/him | short bio | facts`,
			imgUrl: '/main/about-me.jpg'
		},
		{
			id: 1,
			name: 'Experience',
			description: 'Programming | STEM education | translating and publishing | technical writing',
			imgUrl: '/main/experience.jpg'
		},
		{
			id: 2,
			name: 'Competencies',
			description:
				'Frontend, backend & cloud technologies | professional translating | content writing',
			imgUrl: '/main/skills.jpg'
		},
		{
			id: 3,
			name: 'Portfolio',
			description: 'Authored and translated books | blog posts | documentation | Maker projects',
			imgUrl: '/main/works.jpg'
		},
		{
			id: 4,
			name: 'Hobbies',
			description:
				'Coffee | novels | movies | music | film photography | sightseeing | Maker projects',
			imgUrl: '/main/hobbies.jpg'
		},
		{
			id: 5,
			name: 'Links',
			description: 'Email | Facebook | Linkedin | blogs | Instagram | Github repos | misc',
			imgUrl: '/main/links.jpg'
		},
		{
			id: 6,
			name: 'About Site',
			description: 'A little bit details of how I built and deploy this site 😸',
			imgUrl: '/main/about.jpg'
		}
	];
</script>

{#if ready}
	<div class="container-sm" in:fly={{ y: 100, delay: 100, duration: 2000, easing: expoOut }}>
		<div class="row p-4 m-4">
			{#if selectedViewId == -1}
				<!-- main area -->
				<div class="col p-1 m-1" in:receive={{ key: 'main' }} out:send={{ key: 'subview' }}>
					<!-- name title -->
					<div class="text-center p-2 m-2 pb-4 mb-4">
						<NameTitle mode={'main'} />
					</div>
					<!-- view cards -->
					<div class="row">
						<div class="col p-2 m-2">
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
						<div class="col-sm-auto" />
						<div class="col p-2 m-2">
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
					<div>
						<br />
						<br />
					</div>
					<!--back to top button -->
					<div class="text-center p-1 m-1">
						<button type="button" class="btn btn-dark rounded-4 shadow" on:click={scrollToTop}>
							<span class="h6">Back to top</span>
						</button>
					</div>
					<div>
						<br />
					</div>
					<!-- footer -->
					<div class="p-2 m-2">
						<Footer />
					</div>
				</div>
			{:else}
				<!-- nav bar -->
				<div
					class="col-sm-auto p-1 m-1 pe-2 me-2"
					in:receive={{ key: 'subview' }}
					out:receive={{ key: 'main' }}
				>
					<!-- name title -->
					<div class="p-1 m-1">
						<NameTitle mode={'nav'} />
					</div>
					<!-- name buttons -->
					<ul class="nav flex-column text-end pt-2 mt-2">
						{#each viewItems as viewItem (viewItem.id)}
							<ViewItemNavBtn {viewItem} {selectedViewId} on:setViewId={handleSetViewId} />
						{/each}
					</ul>
				</div>
				<!--sub view -->
				<div
					class="col p-1 m-1 ps-2 me-2"
					in:receive={{ key: 'subview' }}
					out:send={{ key: 'main' }}
				>
					<!--back to main button -->
					<div class="text-end p-1 m-1">
						<button
							type="button"
							class="btn btn-dark rounded-4 shadow"
							on:click={() => setViewId(-1)}
						>
							<span class="h6">Back to main</span>
						</button>
					</div>
					<div>
						<br />
					</div>
					<div>
						{#each viewItems as viewItem (viewItem.id)}
							<div animate:flip={{ duration: 500, easing: expoOut }}>
								{#if selectedViewId == viewItem.id}
									<div in:fade={{ delay: 100, duration: 500, easing: expoOut }}>
										<!--sub view head -->
										<div class="p-2 m-2">
											<ViewItemHead {viewItem} />
										</div>
										<!--sub view content -->
										<div
											class="p-2 m-2"
											in:fly={{ y: 100, delay: 250, duration: 1000, easing: expoOut }}
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
					<div class="text-end p-1 m-1">
						<button type="button" class="btn btn-dark rounded-4 shadow" on:click={scrollToTop}>
							<span class="h6">Back to top</span>
						</button>
					</div>
					<div>
						<br />
					</div>
					<!-- footer -->
					<div class="p-4 m-4">
						<Footer />
					</div>
				</div>
			{/if}
		</div>
	</div>
{/if}
