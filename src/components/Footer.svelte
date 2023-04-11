<script lang="ts">
	import { name, location } from '../data/Bio';

	export let mode: string;
</script>

<div class="text-center text-white-50">
	<p class="h6 p-3 m-3">
		<b>© {new Date().getFullYear()} {name}, {location}</b>
	</p>
	{#if mode == 'main'}
		<p><br /></p>
		<p class="small code">
			This site is built with<br /><kbd
				><a href="https://svelte.dev/" class="link-light">Svelte</a></kbd
			>,
			<kbd><a href="https://kit.svelte.dev/" class="link-light">SvelteKit</a></kbd>
			and <kbd><a href="https://getbootstrap.com/" class="link-light">Bootstrap</a></kbd><br />
			and deployed on
			<kbd><a href="https://pages.github.com/" class="link-light">Github Pages</a></kbd>.
		</p>
		<p class="small code">
			This site uses free fonts and images<br />from
			<kbd><a href="https://fonts.google.com/" class="link-light">Google Fonts</a></kbd>
			and
			<kbd><a href="https://unsplash.com/" class="link-light">Unsplash</a></kbd>.
		</p>
	{/if}
</div>
