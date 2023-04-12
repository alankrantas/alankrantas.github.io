<script lang="ts">
	export let url: string;
	export let name: string;
</script>

<a
	href={url}
	class="link-info link-underline-opacity-25 link-underline-opacity-100-hover"
	target="_blank"
>
	<span class="code">
		{name}
	</span>
</a>
