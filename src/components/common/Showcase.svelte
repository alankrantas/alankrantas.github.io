<script lang="ts">
	import { getContext } from 'svelte';
	import { flip } from 'svelte/animate';
	import { expoOut } from 'svelte/easing';
	import type { WorkItem } from '../../data/Types';
	import { screenSize } from '../../data/Store';

	import ShowcaseDetail from './ShowcaseDetail.svelte';
	import type { Context } from 'svelte-simple-modal';

	export let title: string;
	export let works: WorkItem[];
	export let displayNum = 3;
	export let scaleDownPoint = 576;

	$: listStartWorkId = 0;

	const scrollWorks = (delta: number) => {
		listStartWorkId = Math.max(0, Math.min(listStartWorkId + delta, works.length - displayNum));
	};

	const { open }: Context = getContext('simple-modal');
	const popShowcaseDetail = (work: WorkItem) => open(ShowcaseDetail, { work: work });
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
					<div class="col" animate:flip={{ duration: 500, easing: expoOut }}>
						{#if colIdx + listStartWorkId < works.length}
							<a href={'#'} on:click={() => popShowcaseDetail(works[colIdx + listStartWorkId])}>
								<img
									class="img-thumbnail bg-light border-light rounded-4"
									style={`width: 100%; object-fit: contain;`}
									src={works[colIdx + listStartWorkId].imgUrl}
									title={works[colIdx + listStartWorkId].name}
									alt={works[colIdx + listStartWorkId].name}
								/>
							</a>
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
