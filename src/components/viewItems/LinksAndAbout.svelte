<script lang="ts">
	import List from '../utils/List.svelte';
	import Link from '../utils/Link.svelte';
	import Image from '../utils/Image.svelte';

	import links from '../../data/lists/Links.json';
	import site from '../../data/lists/SiteTech.json';
</script>

<p>
	As a netizen myself, I too have left my own traces and bits. You can find me in the following
	links or contact me if you like:
</p>
<p>
	<br /><br />
</p>
<p>
	<List list={links} title="Contact & Social Links" />
</p>
<p>
	<br />
</p>
<hr />
<p>
	<br />
</p>
<p>
	<Image src="/svelte.jpg" alt="svelte" widthRatios={[60, 70, 80, 90]} />
</p>
<p>
	<br />
</p>
<p>Now some technical details about this site.</p>
<p class="indent">
	This site, or the first major version of it, is completed in May 2023. I've only learned modern
	front-end frameworks a few years ago while working on a TypeScript book as an editor, and learned
	some stuff about CI/CD in my next job. I knew back then this is something I'd like to do, but
	still it took a while to make it happen.
</p>
<p class="indent">
	I really like Svelte (a relatively newer but popular JavaScript framework), especially for its
	built-in transition effects. SvelteKit. the framework for deploying Svelte apps, has a pretty
	simple yet powerful file-based routing mechanism, however I decided to make this app as a
	single-page application (SPA) on purpose. On the other hand, the site can read QueryString to
	create the illusion of routing between pages.
</p>
<p class="indent">
	I use Bootstrap for CSS styles, although the Bootstrap components are not compatible in Svelte.
	Except for one library, I built all components for the need of maintaining this site. This site
	also has a basic support for responsive web design (based on window width).
</p>
<p class="indent">
	The site is built and deployed to Github Pages using Github Action as CI/CD (Continuous
	Integration/Continuous Deployment) but can be deployed as a container as well. Both will generate
	a build datetime string to be displayed at the bottom of pages.
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
<p class="text-center">
	<img src="/responsive.svg" width="100px" alt="responsive" />
	<br />
	<span class="small"><i>This site is responsive!</i></span>
</p>
<p>
	<br /><br />
</p>
<p>
	<List list={site} title="Tools and Resource for Building This Site" />
</p>
