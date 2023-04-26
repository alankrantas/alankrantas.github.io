<script lang="ts">
	import type { ListItem } from '../data/Types';
	import Link from './Link.svelte';

	export let title: string;
	export let list: ListItem[];
</script>

<p class="h2">{title}</p>
<br />
<ul>
	{#each list as item}
		<li class="pt-1 pb-1 mt-1 mb-1">
			<p class="h5">
				<b>{item.name}</b>
				{#if item.location}
					<span> | {item.location}</span>
				{/if}
			</p>
			<p>
				{#if item.content && item.link}
					{#if item.linkedContent}
						<Link url={item.link} name={item.content ? item.content : 'Link'} />
					{:else}
						<span>{item.content} | <Link url={item.link} name="link" /></span>
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
		</li>
	{/each}
</ul>
