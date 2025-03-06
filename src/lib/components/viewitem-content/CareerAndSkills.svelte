<script lang="ts">
	import List from '$lib/components/common/List.svelte';
	import Link from '$lib/components/common/Link.svelte';
	import Image from '$lib/components/common/Image.svelte';

	import career from '$lib/data/lists/Career.json';
	import edu from '$lib/data/lists/Education.json';
	import skill from '$lib/data/lists/Skills.json';
	import cert from '$lib/data/lists/Certificate.json';
</script>

<p class="justify small">
	Check out my <Link url="https://www.cake.me/krantas" name="resume" /> for more details.
</p>
<p>
	<br /><br />
</p>
<p>
	<List list={career} title="Professional Experience" />
</p>
<p>
	<br />
</p>
<p>
	<Image
		src="/about-me/work.jpg"
		alt="work"
		footnote="FST Network office's common area (before relocated)."
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
	<List list={edu} title="Academic Qualifications" />
</p>
<p>
	<br />
</p>
<p>
	<Image
		src="/about-me/nccu.jpg"
		alt="nccu"
		footnote="Business School and boulevard<br />of the National Chengchi University."
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
	<List list={cert} title="Certification" />
</p>
<p>
	<br />
</p>
<hr />
<p>
	<br />
</p>
<p>
	<List list={skill} title="Competencies and Expertise" />
</p>
<p>
	<span class="small justify"
		>Note: for my related works and projects, see <kbd>Portfolio</kbd>.</span
	>
</p>
<p>
	<br />
</p>
