<script lang="ts">
	export let url: string;
	export let name: string | undefined;
</script>

<a
	href={url || '#'}
	class="link-info link-underline-opacity-25 link-underline-opacity-100-hover"
	target="_blank"
>
	{name}
</a>
