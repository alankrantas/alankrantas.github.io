<script lang="ts">
	import Link from './Link.svelte';
	import type { WorkItem } from '../../data/Types';

	export let work: WorkItem;
</script>

<div class="card text-white bg-secondary">
	<img class="card-img-top rounded-3 shadow-sm" src={work.imgUrl} alt={work.name} />
	<div class="card-body p-2 m-2" style="text-align: start;">
		<p class="card-title">
			<span class="h3">
				{work.name}
			</span>
			{#if work.link}
				<span class="h4">
					&nbsp;<b><Link url={work.link} name="⧉" /></b>
				</span>
			{/if}
		</p>
		<p>
			{#each work.language as lang}
				<span class="badge rounded-pill bg-dark small">{lang}</span>
			{/each}
		</p>
		<hr class="text-white" />
		<p class="card-text">
			{work.description}
		</p>
		<p>
			{#each work.category as cat}
				<span class="badge rounded-pill bg-white text-black small">{cat}</span>
			{/each}
		</p>
	</div>
</div>
