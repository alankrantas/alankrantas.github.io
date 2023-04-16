<script lang="ts">
	import { softwareList, generalSkillsList } from '../../data/Lists';
	import List from '../List.svelte';
</script>

<br />
<List list={softwareList} title="Software Development Skills" />
<p>
	<span class="small"
		>*Note: I use Eclipse, Java and several MVC-based J2EE web frameworks (Struts 2, JavaServer
		Faces 2, Spring 3) in my first job but I no longer consider them as my skills. I have once tried
		Spring Boot for creating testing micrcoservices.</span
	>
</p>
<p>
	<span class="small"
		>I also revisited Quick Basic and TinyBasic in order to rewrite a code that I wrote as a kid.</span
	>
</p>
<br /><br />
<List list={generalSkillsList} title="General Skills" />
