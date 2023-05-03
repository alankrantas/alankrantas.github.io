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
		<li class="pt-1 pb-2 mt-1 mb-2">
			<p class="fs-4">
				<b>{item.name}</b>
				{#if item.location}
					<span class="lead"> | {item.location}</span>
				{/if}
				{#if item.language}
					{#each item.language as lang}
						<span class="badge rounded-pill bg-secondary code fs-6 small">{lang}</span>
					{/each}
				{/if}
			</p>
			<p>
				{#if item.content && item.link}
					{#if item.linkedContent}
						<Link url={item.link} name={item.content ? item.content : 'Link'} />
					{:else}
						<span>{item.content} <Link url={item.link} name="⧉" /></span>
					{/if}
				{:else if !item.content && item.link}
					<Link url={item.link} name="Link" />
				{:else if !item.link && item.content}
					<span>{item.content}</span>
				{/if}
			</p>
			{#if item.footnote}
				<p class="small text-white-50">{item.footnote}</p>
			{/if}
			{#if item.category}
				<p>
					{#each item.category as cat}
						<span class="badge rounded-pill bg-dark opacity-75 code">{cat}</span>
					{/each}
				</p>
			{/if}
		</li>
	{/each}
</ul>
