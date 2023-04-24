<script lang="ts">
	import type { ViewItem } from '../data/Types';

	export let viewItem: ViewItem;
</script>

<div class="text-white text-center">
	<img
		src={viewItem.imgUrl ? viewItem.imgUrl : '/main/blank.jpg'}
		class="rounded-5 w-50 pt-1 mt-1 pb-1 mb-1 shadow-sm"
		alt={viewItem.imgUrl ? viewItem.name : 'blank'}
	/>
	<div class="display-6 title p-1 m-1 pt-2 mt-2">
		{viewItem.name}
	</div>
	<div class="p-1 m-1 pt-1 pb-2 mt-1 mb-2">
		<hr />
	</div>
</div>
