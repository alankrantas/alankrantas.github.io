<script lang="ts">
	import type { FactItem } from '../data/FactLists';
	import Link from './Link.svelte';

	export let title: string;
	export let factList: FactItem[];
</script>

<p class="h2">{title}</p>
<br />
<ul>
	{#each factList as factItem}
		<li class="pt-1 pb-1 mt-1 mb-1">
			<p class="h5">
				<b>{factItem.name}</b>
				{#if factItem.location}
					<span> | {factItem.location}</span>
				{/if}
			</p>
			<p>
				{#if factItem.content}
					<span>{factItem.content}</span>
				{/if}
				{#if factItem.link}
					<span>{factItem.content ? ' | ' : ''}<Link url={factItem.link} name="link" /></span>
				{/if}
			</p>
			{#if factItem.footnote}
				<p class="small text-white-50">{factItem.footnote}</p>
			{/if}
		</li>
	{/each}
</ul>
