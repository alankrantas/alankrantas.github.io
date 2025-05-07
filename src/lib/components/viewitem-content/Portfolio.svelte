<script module lang="ts">
	import { innerWidth } from 'svelte/reactivity/window';

	import List from '$lib/components/common/List.svelte';
	import Link from '$lib/components/common/Link.svelte';
	import Image from '$lib/components/common/Image.svelte';
	import Showcase from '$lib/components/common/Showcase.svelte';

	import translate_fiction from '$lib/data/works/TranslationFictionWorks.json';
	import translate_nonfiction from '$lib/data/works/TranslationNonFictionWorks.json';
	import edit from '$lib/data/works/EditedWorks.json';
	import author from '$lib/data/works/AuthoredWorks.json';
	import maker from '$lib/data/works/MakerWorks.json';
	import docs from '$lib/data/works/DocsWorks.json';
	import article from '$lib/data/works/ArticleWorks.json';
	import code from '$lib/data/works/CodeWorks.json';
</script>

<script lang="ts">
</script>

<p class="justify">
	Some categories contain selected works only. Non-English title names are translated for this site
	with the original title attached in the description. Links may fail due to external resources
	moved or no longer exist.
</p>
<p class="justify small">
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
	<Showcase works={translate_fiction} title="Selected Translated Works (Fiction)" />
</p>
<p>
	<br />
	<br />
</p>
<hr />
<p>
	<br /><br />
</p>
<p>
	<Showcase works={translate_nonfiction} title="Selected Translated Works (Non-fiction)" />
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
	<Showcase works={edit} title="Selected Edited Works" />
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
	<Showcase works={author} title="Selected Authored Works" />
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
		displayNums={{
			1200: 2,
			576: 1,
			0: 1
		}}
		scaleDownPoint={1200}
		modalWidth={560}
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
	<List list={docs} title="Writing Projects" />
</p>
<p>
	<br />
</p>
<p>
	<Image
		src="/work/marketing.jpg"
		alt="marketing"
		footnote="I also draw technical or marketing illustrations.<br />See <kbd>Links</kbd> for more."
		widthRatios={{
			992: 0.75,
			768: 0.85,
			576: 0.9,
			0: 0.95
		}}
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
	<List list={article} title="Selected Articles" />
</p>
<p>
	<br />
</p>
<hr />
<p>
	<br />
</p>
<p>
	<List list={code} title="Selected Coding Projects" />
</p>
<p>
	<br />
</p>
