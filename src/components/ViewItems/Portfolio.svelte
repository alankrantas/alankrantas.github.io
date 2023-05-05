<script lang="ts">
	import Modal from 'svelte-simple-modal';
	import Showcase from '../utils/Showcase.svelte';
	import List from '../utils/List.svelte';
	import {
		editorialWorks,
		authoredWorks,
		makerWorks,
		codeWorks,
		techArticleWorks,
		bookArticleWorks
	} from '../../data/Works';
</script>

<Modal classCloseButton="btn btn-info">
	<p>
		Some categories contain selected works only. Non-English title names are translated for this
		site with the original title attached in the description. Links may fail due to external
		resources moved or no longer exist.
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
	<p><span class="lead">🚧 Translation work showcases working in progress 🚧</span></p>
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
		<List list={codeWorks} title="Selected Software Projects" />
	</p>
	<p>
		<br />
	</p>
	<p>
		<List list={techArticleWorks} title="Selected Tech Posts/Articles" />
	</p>
	<p>
		<span class="small">*Note: see <kbd>Links</kbd> for links to my blogs and Github profile.</span>
	</p>
	<p>
		<br />
	</p>
	<p>
		<List list={bookArticleWorks} title="Selected Book Posts/Articles" />
	</p>
</Modal>
