<script lang="ts">
	import { name, title, location } from '../data/Bio';

	export let mode: String;
</script>

{#if mode == 'main'}
	<div class="text-center">
		<p class="text-white">
			<span class="h2 title">
				{name}
			</span>
			<span class="h5"> &nbsp;|&nbsp; </span>
			<span class="h4">
				{title}
			</span>
		</p>
		<p class="text-white-50">
			<span class="lead code">
				{location}
			</span>
		</p>
	</div>
{:else if mode == 'nav'}
	<div class="text-end">
		<p class="h2 text-white title">
			<span class="badge bg-secondary">
				{name}
			</span>
		</p>
		<p class="h5 text-white-50 code p-1 m-1">
			{title}
		</p>
	</div>
{/if}
