<script module lang="ts">
	import { innerWidth } from 'svelte/reactivity/window';
	import { flip } from 'svelte/animate';
	import { expoOut } from 'svelte/easing';

	import ShowcaseDetail from '$lib/components/common/ShowcaseDetail.svelte';

	import type { WorkItem } from '$lib/type/Types';

	interface Props {
		title: string;
		works: WorkItem[];
		displayNums?: number[];
		scaleDownPoint?: number;
		modalWidth?: number;
	}
</script>

<script lang="ts">
	let {
		title,
		works,
		displayNums = [3, 2, 1],
		scaleDownPoint = 576,
		modalWidth = 480
	}: Props = $props();

	let imgLoaded: boolean[] = $state(new Array(works.length));
	imgLoaded.fill(false);

	let listStartWorkId = $state(0);
	let dialogs: HTMLDialogElement[] = $state(new Array(works.length));

	let displayNum = $derived(
		(() => {
			if (innerWidth.current) {
				if (innerWidth.current >= 1200) {
					return displayNums[0];
				} else if (innerWidth.current >= 576) {
					return displayNums[1];
				} else {
					return displayNums[2];
				}
			} else {
				return displayNums[2];
			}
		})()
	);

	const scrollWorks = (delta: number) => {
		listStartWorkId = Math.max(0, Math.min(listStartWorkId + delta, works.length - displayNum));
	};

	const handleOpenInDetail = (workId: number) => {
		if (!dialogs[workId]) return;

		dialogs[workId].addEventListener('click', (event: MouseEvent) => {
			if (event.target === dialogs[workId]) {
				dialogs[workId].close();

				// stop youtube videos
				const videos = document.querySelectorAll('iframe');
				Array.prototype.forEach.call(videos, function (video) {
					const src = video.src;
					video.src = src;
				});
			}
		});
		dialogs[workId].showModal();
	};
</script>

<svelte:head>
	{#each works as work}
		<link rel="preload" as="image" href={work.imgUrl} />
	{/each}
</svelte:head>

<p class="h2">{title} ({works.length})</p>
<br />
<br />
<div class="position-relative">
	<div
		class="row position-relative start-50 translate-middle-x"
		style={`width: ${innerWidth.current && innerWidth.current < scaleDownPoint ? 90 : 100}%`}
	>
		<div class="col-auto d-grid">
			<button
				class="btn btn-sm btn-outline-light rounded-pill"
				disabled={listStartWorkId == 0}
				onclick={() => scrollWorks(-1)}
			>
				<b>{'<'}</b>
			</button>
		</div>
		<div class="col text-center">
			<div class="row">
				{#each [...Array(displayNum).keys()] as colIdx (colIdx + listStartWorkId)}
					{@const workId = colIdx + listStartWorkId}
					<div
						class={`col ${!imgLoaded[colIdx] ? 'placeholder placeholder-wave rounded-4' : ''}`}
						animate:flip={{ duration: 500, easing: expoOut }}
					>
						{#if workId < works.length}
							{@const work = works[workId]}
							<!-- svelte-ignore a11y_invalid_attribute -->
							<a href="javascript: void(0)" onclick={() => handleOpenInDetail(workId)}>
								<img
									loading="lazy"
									src={work.imgUrl}
									title={work.name}
									alt={work.name}
									class={`img-thumbnail bg-light border-light rounded-4 showCaseImg`}
									onload={() => {
										imgLoaded[colIdx] = true;
									}}
								/>
							</a>
							<!-- modal -->
							<dialog bind:this={dialogs[workId]} style={`max-width: ${modalWidth}px;`}>
								<ShowcaseDetail {work} />
							</dialog>
						{/if}
					</div>
				{/each}
			</div>
		</div>
		<div class="col-auto d-grid">
			<button
				class="btn btn-sm btn-outline-light rounded-pill"
				disabled={listStartWorkId >= works.length - displayNum}
				onclick={() => scrollWorks(1)}
			>
				<b>{'>'}</b>
			</button>
		</div>
	</div>
</div>

<style>
	.showCaseImg {
		width: 100%;
		object-fit: contain;
	}

	dialog {
		position: fixed;
		max-height: 100%;
		top: 50%;
		right: 0%;
		transform: translate(0%, -50%);
		border: 0px;
		border-radius: 10px;
		padding: 0px;
		margin: 1% auto;
		overflow: auto;
		overscroll-behavior: contain;
		scrollbar-width: thin;
		opacity: 0;
		box-shadow: 0px 0px 50px 0px rgb(0 0 0 / 75%);
	}

	dialog[open] {
		animation: fadein 0.3s ease-in forwards;
	}

	::backdrop {
		background-color: var(--bs-black);
		opacity: 0.3;
	}

	@keyframes fadein {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}
</style>
