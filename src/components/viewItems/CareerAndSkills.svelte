<script lang="ts">
	import List from '../common/List.svelte';
	import Image from '../common/Image.svelte';

	import software from '../../data/lists/SoftwareSkills.json';
	import skill from '../../data/lists/GeneralSkills.json';
	import career from '../../data/lists/Career.json';
	import edu from '../../data/lists/Education.json';
	import club from '../../data/lists/Club.json';
	import volunteer from '../../data/lists/Volunteer.json';
	import cert from '../../data/lists/Certificate.json';
</script>

<p class="justify">My list of professional experience, education and skills.</p>
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
		footnote="FST Network office's common area (before relocated).<br />(Photo by me with a 1981-made Olympus XA2.)"
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
		footnote="Business School and boulevard<br />of the National Chengchi University<br />(Photo by me with a 1976-made Canonet QL17)"
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
	<List list={club} title="Extracurricular Activities" />
</p>
<p>
	<br />
</p>
<hr />
<p>
	<br />
</p>
<p>
	<List list={volunteer} title="Volunteer Work" />
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
	<List list={software} title="Software Competencies" />
</p>
<p>
	<span class="small justify"
		>Note: for my related works and projects, see <kbd>Portfolio</kbd>.</span
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
	<List list={skill} title="General Skills" />
</p>
<p>
	<span class="small justify"
		>Note: for my related works and projects, see <kbd>Portfolio</kbd>.</span
	>
</p>
<p>
	<br />
</p>
