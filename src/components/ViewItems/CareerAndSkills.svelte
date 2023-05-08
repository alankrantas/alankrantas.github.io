<script lang="ts">
	import List from '../utils/List.svelte';

	import software from '../../data/lists/SoftwareSkills.json';
	import skill from '../../data/lists/GeneralSkills.json';
	import career from '../../data/lists/Career.json';
	import edu from '../../data/lists/Education.json';
	import club from '../../data/lists/Club.json';
	import cert from '../../data/lists/Certificate.json';
</script>

<p>My list of skills, professional experience and education.</p>
<p>
	<br /><br />
</p>
<p>
	<List list={software} title="Software Competencies" />
</p>
<p>
	<span class="small"
		>*Note: I use Eclipse, Java and several MVC-based J2EE web frameworks (Struts 2, JavaServer
		Faces 2, Spring 3) in my first job but I no longer consider them as my work skills. I have once
		tried Spring Boot for creating testing micrcoservices recently and that's pretty about it.</span
	>
</p>
<p>
	<span class="small"
		>I also revisited Quick Basic and TinyBasic in order to rewrite a piece of code I wrote as a
		kid.</span
	>
</p>
<p>
	<span class="small">See <kbd>Portfolio</kbd> for my selection of programming works.</span>
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
	<span class="small">*Note: see <kbd>Portfolio</kbd> for my list of published works.</span>
</p>
<p>
	<br />
</p>
<hr />
<p>
	<br />
</p>
<p class="text-center">
	<img loading="lazy" src="/about-me/work.jpg" width="550px" alt="work" class="rounded-5 p-2 m-2" />
	<br />
	<span class="small codetext-white-50">FST Network office's common area (before relocated).</span>
</p>
<p>
	<br />
</p>
<p>
	<List list={career} title="Professional Work Experience" />
</p>
<p>
	<br />
</p>
<hr />
<p>
	<br />
</p>
<p class="text-center">
	<img loading="lazy" src="/about-me/nccu.jpg" width="550px" alt="nccu" class="rounded-5 p-2 m-2" />
	<br />
	<span class="small codetext-white-50">National Chengchi University</span>
</p>
<p>
	<br />
</p>
<p>
	<List list={edu} title="Academic Qualifications" />
</p>
<p>
	<span class="small"
		>*Note: <kbd>Public Finance</kbd> focuses on government tax, accounting and financial policies, which
		is quite different from private sector banking and finance, and for which I had no interest at all.</span
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
	<List list={cert} title="Certification" />
</p>
