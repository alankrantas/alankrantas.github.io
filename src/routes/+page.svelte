<script lang="ts">
	$: counter = 42;

	const clickEvent = () => {
		counter++;
	};
</script>

<div class="container-fluid p-2 m-2">
	<div class="display-4 p-2 m-2">Alan's Personal Site</div>
	<div class="card shadow p-2 m-2" style="width: 25rem;">
		<div class="card-body">
			<div class="card-title lead">Working in Progress</div>
			<div class="card-text">
				<span class="text-muted"
					>Still pounding on the question of life, the universe and everything</span
				>
				<div class="p-2 m-2">
					<button id="clicks" class="btn btn-primary btn-lg" on:click={clickEvent}>{counter}</button
					>
				</div>
			</div>
		</div>
	</div>
</div>
