<script lang="ts">
	import Modal from 'svelte-simple-modal';
	import Showcase from '../utils/Showcase.svelte';
	import List from '../utils/List.svelte';
	import {
		editorialWorks,
		authoredWorks,
		makerWorks,
		programmingWorks,
		articleWorks
	} from '../../data/Works';
</script>

<Modal classCloseButton="btn btn-info">
	<p class="small">
		*Note: Selected works (the most representative ones) in my various careers. Some title names are
		translated for this site with the original title attached in the description. Links may fail due
		to external resources moved or no longer exist.
	</p>
	<p>
		<br />
	</p>
	<p>
		<Showcase works={editorialWorks} title="Editorial Works" />
	</p>
	<p>
		<br /><br />
	</p>
	<p>
		<Showcase works={authoredWorks} title="Authored Works" />
	</p>
	<p>
		<br /><br />
	</p>
	<p>
		<Showcase works={makerWorks} title="Selected Maker Projects" displayNum={2} />
	</p>
	<p>
		<br /><br />
	</p>
	<p>
		<List list={programmingWorks} title="Selected Programming Projects" />
	</p>
	<p>
		<br />
	</p>
	<p>
		<List list={articleWorks} title="Selected Articles" />
	</p>
	<p>
		<br />
	</p>
	<p>🚧 Other works/showcases working in progress 🚧</p>
</Modal>
