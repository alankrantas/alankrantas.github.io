<script lang="ts">
	import type { ViewItem } from '../data/Types';

	export let viewItem: ViewItem;
</script>

<div class="text-white text-center">
	<div class="row p-2 m-2">
		<div class="col d-flex justify-content-center">
			<div class="card w-75 rounded-5 bg-dark shadow">
				<img
					src={viewItem.imgUrl ? viewItem.imgUrl : '/main/blank.jpg'}
					class="card-img rounded-5"
					alt={viewItem.imgUrl ? viewItem.name : 'blank'}
				/>
				<div class="card-img-overlay">
					<div
						class="card-title title display-5 p-1 m-1 pt-2 mt-2 position-absolute bottom-0 start-50 translate-middle-x"
					>
						{viewItem.name}
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="p-1 m-1 pt-3 pb-2 mt-3 mb-2">
		<hr />
	</div>
</div>
