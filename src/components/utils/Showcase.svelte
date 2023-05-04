<script lang="ts">
	import { getContext } from 'svelte';
	import { flip } from 'svelte/animate';
	import { expoOut } from 'svelte/easing';
	import ShowcaseDetail from './ShowcaseDetail.svelte';
	import type { WorkItem } from '../../data/Types';

	export let title: string;
	export let works: WorkItem[];
	export let displayNum = 3;

	$: listStartWorkId = 0;

	const scrollWorks = (delta: number) => {
		listStartWorkId = Math.max(0, Math.min(listStartWorkId + delta, works.length - displayNum));
	};

	// @ts-ignore
	const { open } = getContext('simple-modal');
	const popShowcaseDetail = (work: WorkItem) => open(ShowcaseDetail, { work: work });
</script>

<p class="h2">{title} ({works.length})</p>
<br />
<div class="row">
	<div class="col-auto align-self-center">
		<button class="btn btn-secondary rounded-pill" on:click={() => scrollWorks(-1)}> ⮜ </button>
	</div>
	<div class="col align-self-center">
		<div class="row">
			{#each [...Array(displayNum).keys()] as colIdx (colIdx + listStartWorkId)}
				{@const work = works[colIdx + listStartWorkId]}
				<div class="col position-relative" animate:flip={{ duration: 500, easing: expoOut }}>
					{#if colIdx + listStartWorkId < works.length}
						<a href={'#'} on:click={() => popShowcaseDetail(work)}>
							<img
								class="img-thumbnail bg-light border-light rounded-4"
								style="width: 100%; object-fit: contain;"
								src={work.imgUrl}
								alt={work.name}
							/>
						</a>
					{/if}
				</div>
			{/each}
		</div>
	</div>
	<div class="col-auto align-self-center">
		<button class="btn btn-secondary rounded-pill" on:click={() => scrollWorks(1)}> ⮞ </button>
	</div>
</div>
