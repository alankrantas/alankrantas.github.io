<script lang="ts">
	import { siteTechList } from '../../data/Lists';
	import List from '../List.svelte';
</script>

<p>Some little things about this site (the technological side of it at least).</p>
<p class="indent">
	As a semi-developer who never had official experiences in modern front-end JavaScript frameworks,
	I got to learn some of them while working for a IT books publisher: Angular, React, Vue.js, Svelte
	and Solid. Later I also learned how to deploy productions with CI (continuous integration) jobs.
	At that moment I knew exactly what I can do with this, although it took some time to finally make
	it happen.
</p>
<p class="indent">
	It is always such a fun ride to try to make something on your own, to explore and experiment new
	ideas, and a great learning experience too. The front-end technologies is certainly something I'd
	'never imagined from the days of creating simple websites using Microsoft FrontPage.
</p>
<br />
<List list={siteTechList} title="List of Resource for Building This Site" />
