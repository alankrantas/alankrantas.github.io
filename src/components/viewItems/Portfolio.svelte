<script lang="ts">
	// @ts-ignore
	import Modal from 'svelte-simple-modal';
	import Showcase from '../common/Showcase.svelte';
	import List from '../common/List.svelte';
	import Image from '../common/Image.svelte';

	import { screenSize } from '../../data/Store';

	import edit from '../../data/works/EditorialWorks.json';
	import author from '../../data/works/AuthoredWorks.json';
	import trans from '../../data/works/TranslationWorks.json';
	import maker from '../../data/works/MakerWorks.json';
	import code from '../../data/works/CodeWorks.json';
	import tech from '../../data/works/TechPostWorks.json';
	import book from '../../data/works/BookPostWorks.json';
</script>

<p class="justify">
	Some categories contain selected works only. Non-English title names are translated for this site
	with the original title attached in the description. Links may fail due to external resources
	moved or no longer exist.
</p>
<p>
	<br /><br />
</p>
<p>
	<Modal styleWindow={{ width: '500px' }}>
		<Showcase
			works={edit}
			title="Editorial Works"
			displayNum={$screenSize >= 1200 ? 3 : $screenSize >= 576 ? 2 : 1}
		/>
	</Modal>
</p>
<p>
	<br />
	<br />
</p>
<hr />
<p>
	<br />
</p>
<p>
	<Modal styleWindow={{ width: '500px' }}>
		<Showcase
			works={author}
			title="Authored Works"
			displayNum={$screenSize >= 1200 ? 3 : $screenSize >= 576 ? 2 : 1}
		/>
	</Modal>
</p>
<p>
	<br />
	<br />
</p>
<hr />
<p>
	<br />
</p>
<p>
	<Modal styleWindow={{ width: '500px' }}>
		<Showcase
			works={trans}
			title="Selected Translated Works"
			displayNum={$screenSize >= 1200 ? 3 : $screenSize >= 576 ? 2 : 1}
		/>
	</Modal>
</p>
<p>
	<br />
</p>
<p class="small justify">
	Note: I have total 39 titles (3 for partial credits and 1 not published) of translation works but
	I decided to leave out most of the young adult books and less memorable works.
</p>
<p>
	<br />
	<br />
</p>
<hr />
<p>
	<br />
</p>
<p>
	<Modal styleWindow={{ width: '750px' }}>
		<Showcase
			works={maker}
			title="Selected Maker Projects"
			displayNum={$screenSize >= 1200 ? 2 : 1}
			scaleDownPoint={1200}
		/>
	</Modal>
</p>
<p>
	<br />
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
	<span class="small">Note: see <kbd>Links</kbd> for links to my blogs and Github profile.</span>
</p>
<p>
	<br />
</p>
<p>
	<Image
		src="/work/marketing.jpg"
		alt="marketing"
		footnote="I can also draw marketing illustrations.<br />Here's an (unused) example of utilizing data pipelines for generating ESG reports."
		widthRatios={[75, 85, 90, 95]}
	/>
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
