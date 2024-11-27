<script lang="ts">
	import { flip } from 'svelte/animate';
	import { expoOut } from 'svelte/easing';
	import type { WorkItem } from '../../data/Types';
	import { screenSize } from '../../data/Store';

	import ShowcaseDetail from './ShowcaseDetail.svelte';

	export let title: string;
	export let works: WorkItem[];
	export let displayNum = 3;
	export let scaleDownPoint = 576;
	export let largeModal = false;

	$: listStartWorkId = 0;

	let dialog: HTMLDialogElement[] = new Array(works.length);

	const scrollWorks = (delta: number) => {
		listStartWorkId = Math.max(0, Math.min(listStartWorkId + delta, works.length - displayNum));
	};

	const handleOpenInDetail = (workId: number) => {
		if (!dialog[workId]) return;
		dialog[workId].addEventListener('click', (event: MouseEvent) => {
			if (event.target === dialog[workId]) dialog[workId].close();
		});
		dialog[workId].showModal();
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
		style={`width: ${$screenSize < scaleDownPoint ? 90 : 100}%`}
	>
		<div class="col-auto d-grid">
			<button
				class="btn btn-sm btn-outline-light rounded-pill"
				disabled={listStartWorkId == 0}
				on:click={() => scrollWorks(-1)}
			>
				<b>{'<'}</b>
			</button>
		</div>
		<div class="col text-center">
			<div class="row">
				{#each [...Array(displayNum).keys()] as colIdx (colIdx + listStartWorkId)}
					{@const workId = colIdx + listStartWorkId}
					<div class="col" animate:flip={{ duration: 500, easing: expoOut }}>
						{#if workId < works.length}
							{@const work = works[workId]}
							<a href="javascript:;" on:click={() => handleOpenInDetail(workId)}>
								<img
									class="img-thumbnail bg-light border-light rounded-4"
									style={`width: 100%; object-fit: contain;`}
									src={work.imgUrl}
									title={work.name}
									alt={work.name}
								/>
							</a>
							<dialog
								bind:this={dialog[workId]}
								style={largeModal ? 'max-width: 600px;' : 'max-width: 500px;'}
							>
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
				on:click={() => scrollWorks(1)}
			>
				<b>{'>'}</b>
			</button>
		</div>
	</div>
</div>
