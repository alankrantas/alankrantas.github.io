<script lang="ts">
	import { innerWidth } from 'svelte/reactivity/window';

	import List from '$lib/components/common/List.svelte';
	import Link from '$lib/components/common/Link.svelte';
	import Image from '$lib/components/common/Image.svelte';
	import Showcase from '$lib/components/common/Showcase.svelte';

	import edit from '$lib/data/works/EditorialWorks.json';
	import author from '$lib/data/works/AuthoredWorks.json';
	import trans from '$lib/data/works/TranslationWorks.json';
	import maker from '$lib/data/works/MakerWorks.json';
	import code from '$lib/data/works/CodeWorks.json';
	import docs from '$lib/data/works/DocsWorks.json';
	import tech from '$lib/data/works/TechPostWorks.json';
	import book from '$lib/data/works/BookPostWorks.json';
</script>

<p class="justify">
	Some categories contain selected works only. Non-English title names are translated for this site
	with the original title attached in the description. Links may fail due to external resources
	moved or no longer exist.
</p>
<p class="justify">
	Also see: my full list of <Link
		url="https://github.com/alankrantas/alankrantas/blob/main/works/published.md"
		name="published works"
	/> and <Link
		url="https://github.com/alankrantas/alankrantas/blob/main/works/projects.md"
		name="writing projects"
	/>.
</p>
<p>
	<br /><br />
</p>
<p>
	<Showcase
		works={edit}
		title="Selected Editorial Works"
		displayNum={innerWidth.current && innerWidth.current >= 1200
			? 3
			: innerWidth.current && innerWidth.current >= 576
				? 2
				: 1}
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
		displayNum={innerWidth.current && innerWidth.current >= 1200
			? 3
			: innerWidth.current && innerWidth.current >= 576
				? 2
				: 1}
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
		displayNum={innerWidth.current && innerWidth.current >= 1200
			? 3
			: innerWidth.current && innerWidth.current >= 576
				? 2
				: 1}
	/>
</p>
<p>
	<br />
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
		displayNum={innerWidth.current && innerWidth.current >= 1200 ? 2 : 1}
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
