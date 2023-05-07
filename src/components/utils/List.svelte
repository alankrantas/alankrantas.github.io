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
		<li class="pt-1 pb-1 mt-2 mb-2" style="text-align: start;">
			<p>
				{#if item.link && item.linkedTitle}
					<span class="f5"><b><Link url={item.link} name={item.name} /></b></span>
				{:else if item.link && !item.linkedTitle}
					<span class="h4">{item.name}</span>&nbsp;<span class="h5"
						><b><Link url={item.link} name="⧉" /></b></span
					>
				{:else}
					<span class="h4">{item.name}</span>
				{/if}
			</p>
			{#if item.description}
				<p>
					{item.description}
					{#if item.location}
						| {item.location}
					{/if}
				</p>
			{/if}
			{#if !item.description && item.location}
				{item.location}
			{/if}
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
			{#if item.footnote}
				<p class="small text-white-50">{item.footnote}</p>
			{/if}
		</li>
	{/each}
</ul>
