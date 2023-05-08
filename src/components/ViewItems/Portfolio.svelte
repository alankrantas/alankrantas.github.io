<script lang="ts">
	import Modal from 'svelte-simple-modal';
	import Showcase from '../utils/Showcase.svelte';
	import List from '../utils/List.svelte';

	import edit from '../../data/works/EditorialWorks.json';
	import author from '../../data/works/AuthoredWorks.json';
	import maker from '../../data/works/MakerWorks.json';
	import code from '../../data/works/CodeWorks.json';
	import tech from '../../data/works/TechPostWorks.json';
	import book from '../../data/works/BookPostWorks.json';
</script>

<Modal classCloseButton="btn btn-info">
	<p>
		Note: Some categories contain selected works only. Non-English title names are translated for
		this site with the original title attached in the description. Links may fail due to external
		resources moved or no longer exist.
	</p>
	<p>
		<br /><br />
	</p>
	<p>
		<Showcase works={edit} title="Editorial Works" />
	</p>
	<p>
		<br />
	</p>
	<hr />
	<p>
		<br />
	</p>
	<p>
		<Showcase works={author} title="Authored Works" />
	</p>
	<p>
		<br />
	</p>
	<hr />
	<p>
		<br />
	</p>
	<p><span class="lead">🚧 Translation work showcases working in progress 🚧</span></p>
	<p>
		<br />
	</p>
	<hr />
	<p>
		<br />
	</p>
	<p>
		<Showcase works={maker} title="Selected Maker Projects" displayNum={2} />
	</p>
	<p>
		<br />
	</p>
	<hr />
	<p>
		<br />
	</p>
	<p>
		<List list={code} title="Selected Software Projects" />
	</p>
	<p>
		<br />
	</p>
	<hr />
	<p>
		<br />
	</p>
	<p>
		<List list={tech} title="Selected Tech Posts/Articles" />
	</p>
	<p>
		<span class="small">*Note: see <kbd>Links</kbd> for links to my blogs and Github profile.</span>
	</p>
	<p>
		<br />
	</p>
	<hr />
	<p>
		<br />
	</p>
	<p>
		<List list={book} title="Selected Book Posts/Articles" />
	</p>
</Modal>
