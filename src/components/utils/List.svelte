<script lang="ts">
	import type { ListItem } from '../../data/Types';
	import Link from './Link.svelte';

	export let title: string;
	export let list: ListItem[];
</script>

<p class="h2">{title}</p>
<br />
<ul>
	{#each list as item}
		<li class="pt-1 pb-2 mt-1 mb-2" style="text-align: start;">
			<p>
				{#if item.link && item.linkedTitle}
					<b><span class="fs-5"><Link url={item.link} name={item.name} /></span></b>
				{:else if item.link && !item.linkedTitle}
					<span class="fs-4">{item.name}</span>&nbsp;<b
						><span class="fs-5"><Link url={item.link} name="⧉" /></span></b
					>
				{:else}
					<span class="fs-4">{item.name}</span>
				{/if}
			</p>
			{#if item.language || item.category}
				<p>
					{#if item.language}
						{#each item.language as lang}
							<span class="badge rounded-pill bg-secondary code small">{lang}</span>
						{/each}
					{/if}
					{#if item.category}
						{#each item.category as cat}
							<span class="badge rounded-pill bg-dark opacity-75 code small">{cat}</span>
						{/each}
					{/if}
				</p>
			{/if}
			{#if item.content}
				<p>
					{item.content}
					{#if item.location}
						| {item.location}
					{/if}
				</p>
			{/if}
			{#if !item.content && item.location}
				{item.location}
			{/if}
			{#if item.footnote}
				<p class="small text-white-50">{item.footnote}</p>
			{/if}
		</li>
	{/each}
</ul>
