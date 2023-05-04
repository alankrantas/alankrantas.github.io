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
			<p>
				<span class="fs-5">
					<b>
						{#if item.link && item.linkedTitle}
							<Link url={item.link} name={item.name} />
						{:else if item.link && !item.linkedTitle}
							{item.name} <Link url={item.link} name="⧉" />
						{:else}
							{item.name}
						{/if}
					</b>
				</span>
				{#if item.language}
					{#each item.language as lang}
						<span class="badge rounded-pill bg-secondary code small">{lang}</span>
					{/each}
				{/if}
			</p>
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
			{#if item.category}
				<p>
					{#each item.category as cat}
						<span class="badge rounded-pill bg-dark opacity-75 code small">{cat}</span>
					{/each}
				</p>
			{/if}
		</li>
	{/each}
</ul>
