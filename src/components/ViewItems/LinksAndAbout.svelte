<script lang="ts">
	import List from '../utils/List.svelte';
	import Link from '../utils/Link.svelte';

	import links from '../../data/lists/Links.json';
	import site from '../../data/lists/SiteTech.json';
</script>

<p>
	As a netizen myself, I have left my own traces and bits. You can find me in the following links:
</p>
<p>
	<br />
</p>
<p>
	<List list={links} title="External Resources & Social Links" />
</p>
<p>
	<br />
</p>
<p class="text-center">
	<img loading="lazy" src="/svelte.jpg" width="400px" alt="profile" class="rounded-5 p-2 m-2" />
	<br />
</p>
<p>
	<br />
</p>
<p>Now: some little things about this site (the technological side of it at least).</p>
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
<p class="indent">
	Although SvelteKit has a pretty neat routing system, I made this as a single-page application
	(SPA) on purpose. QueryString is added to create the illusion of routing between views.
</p>
<p class="indent">
	You can find the full source code at the <Link
		url="https://github.com/alankrantas/alankrantas.github.io"
		name="original repository"
	/> .
</p>
<p>
	<br />
</p>
<p>
	<List list={site} title="List of Resource for Building This Site" />
</p>
