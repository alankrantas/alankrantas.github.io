<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.min.css';
	import '../css/custom.css';
	import { name, title, location } from '../data/Bio';
</script>

<svelte:head>
	<title>Homepage of {name}, {title} ({location})</title>
</svelte:head>

<slot />

<style>
	:global(body) {
		font-family: 'Roboto', 'Noto Sans TC';
		background-color: #3d3d3d;
		transition: background-color 0.2s;
	}
</style>
