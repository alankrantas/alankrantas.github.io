<script lang="ts">
	import type { ViewItem } from '../data/Types';

	import { screenSize } from '../data/Store';

	export let viewItem: ViewItem;
</script>

<div class="text-white text-center">
	{#if $screenSize <= 576}
		<br />
	{/if}
	<div class="row p-2 m-2">
		<div class="col d-flex justify-content-center">
			<div class="card rounded-5 bg-dark shadow position-relative">
				<img src={viewItem.imgUrl} class="card-img rounded-5" alt={viewItem.name} />
				<div class="card-img-overlay">
					<div
						class="card-title title display-5 p-sm-1 m-sm-1 pt-sm-2 mt-sm-2 position-absolute bottom-0 start-50 translate-middle"
					>
						{viewItem.name}
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="p-sm-1 m-sm-1 pt-sm-3 pb-sm-2 mt-sm-3 mb-sm-2">
		{#if $screenSize <= 576}
			<br />
		{/if}
		<hr />
		{#if $screenSize <= 576}
			<br />
		{/if}
	</div>
</div>
