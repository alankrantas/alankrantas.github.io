<script module lang="ts">
	interface Props {
		url: string;
		name: string | undefined;
	}
</script>

<script lang="ts">
	let { url, name }: Props = $props();
</script>

<a
	href={url || '#'}
	class="link-info link-underline-opacity-25 link-underline-opacity-100-hover"
	target="_blank"
	rel="noreferrer noopener"
>
	{name}
</a>
