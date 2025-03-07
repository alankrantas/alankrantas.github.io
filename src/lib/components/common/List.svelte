<script module lang="ts">
	import type { ListItem } from '$lib/type/Types';

	import Link from '$lib/components/common/Link.svelte';

	import { replaceLink } from '$lib/util/util';

	interface Props {
		title: string;
		list: ListItem[];
	}
</script>

<script lang="ts">
	let { title, list }: Props = $props();
</script>

<p class="h2">
	{title}
</p>
<br />
<ul>
	{#each list as item}
		<li class="pt-sm-1 pb-sm-1 mt-sm-4 mb-sm-4" style="text-align: start;">
			<p>
				<span class="h4">
					{item.name}
					{#if item.link}
						<b><Link url={item.link} name="⧉" /></b>
					{/if}
				</span>
				{#if item.tooltip}
					<span class="small text-white-50 customtooltip">
						&nbsp;ⓘ
						<span class="customtooltiptext">
							<span class="small text-white code">
								{@html replaceLink(item.tooltip)}
							</span>
						</span>
					</span>
				{/if}
			</p>
			{#if item.description}
				<p>
					{@html replaceLink(item.description)}
					{#if item.location}
						| {item.location}
					{/if}
				</p>
			{/if}
			{#if !item.description && item.location}
				<p>
					{item.location}
				</p>
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
				<p class="small text-white-50">
					{@html replaceLink(item.footnote)}
				</p>
			{/if}
		</li>
	{/each}
</ul>
