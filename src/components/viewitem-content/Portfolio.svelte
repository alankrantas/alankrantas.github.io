<script lang="ts">
	import Showcase from '../common/Showcase.svelte';
	import Link from '../common/Link.svelte';
	import List from '../common/List.svelte';
	import Image from '../common/Image.svelte';

	import { screenSize } from '../../data/GlobalStates.svelte';

	import edit from '../../data/works/EditorialWorks.json';
	import author from '../../data/works/AuthoredWorks.json';
	import trans from '../../data/works/TranslationWorks.json';
	import maker from '../../data/works/MakerWorks.json';
	import code from '../../data/works/CodeWorks.json';
	import docs from '../../data/works/DocsWorks.json';
	import tech from '../../data/works/TechPostWorks.json';
	import book from '../../data/works/BookPostWorks.json';
</script>

<p class="justify">
	Some categories contain selected works only. Non-English title names are translated for this site
	with the original title attached in the description. Links may fail due to external resources
	moved or no longer exist.
</p>
<p class="justify">
	Also see: my <Link
		url="https://github.com/alankrantas/alankrantas/blob/main/works/published.md"
		name="full list of published titles"
	/>.
</p>
<p>
	<br /><br />
</p>
<p>
	<Showcase
		works={edit}
		title="Selected Editorial Works"
		displayNum={screenSize.value >= 1200 ? 3 : screenSize.value >= 576 ? 2 : 1}
	/>
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
	<Showcase
		works={author}
		title="Selected Authored Works"
		displayNum={screenSize.value >= 1200 ? 3 : screenSize.value >= 576 ? 2 : 1}
	/>
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
	<Showcase
		works={trans}
		title="Selected Translated Works"
		displayNum={screenSize.value >= 1200 ? 3 : screenSize.value >= 576 ? 2 : 1}
	/>
</p>
<p>
	<br />
</p>
<p>
	<span class="small justify"
		>Note: I have total 38 titles (3 co-translating) of translation works but I decided to leave out
		most of the young adult books and less memorable works.</span
	>
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
	<Showcase
		works={maker}
		title="Selected Maker Projects"
		displayNum={screenSize.value >= 1200 ? 2 : 1}
		scaleDownPoint={1200}
		largeModal={true}
	/>
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
<p>
	<span class="small justify"
		>Note: embedded programming projects are listed under <kbd>Selected Maker Projects</kbd> above.</span
	>
</p>
<p>
	<br />
</p>
<hr />
<p>
	<br />
</p>
<p>
	<List list={docs} title="Writing Projects" />
</p>
<p>
	<br />
</p>
<p>
	<Image
		src="/work/marketing.jpg"
		alt="marketing"
		footnote="I also draw technical or marketing illustrations.<br />Here's an (unused) example of utilizing data pipelines for generating ESG reports."
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
	<List list={tech} title="Selected Tech Articles" />
</p>
<p>
	<span class="small justify">Note: see <kbd>Links</kbd> for my blog links.</span>
</p>
<p>
	<br />
</p>
<hr />
<p>
	<br />
</p>
<p>
	<List list={book} title="Selected Book Articles" />
</p>
