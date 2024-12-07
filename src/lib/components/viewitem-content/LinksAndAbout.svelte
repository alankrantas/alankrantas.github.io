<script lang="ts">
	import List from '$lib/components/common/List.svelte';
	import Link from '$lib/components/common/Link.svelte';
	import Image from '$lib/components/common/Image.svelte';

	import links from '$lib/data/lists/Links.json';
	import site from '$lib/data/lists/SiteTech.json';
</script>

<p class="justify">
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
	<Image src="/website/svelte.jpg" alt="svelte" widthRatios={[60, 70, 80, 90]} />
</p>
<p>
	<br />
</p>
<p class="justify">Now some technical details about this site.</p>
<p class="indent justify">
	This site, or the first major version of it, was completed in May 2023. I've learned modern
	front-end frameworks only a few years ago while working on a TypeScript book as an editor, and
	gained some CI/CD knowledge in my next job. I knew back then this is something I'd like to do, but
	still it took a while to make it happen.
</p>
<p class="indent justify">
	I really like Svelte (a relatively newer but popular JavaScript framework), especially for its
	built-in transition effects. SvelteKit, the framework for building and deploying Svelte apps, has
	a pretty simple yet powerful file-based routing mechanism, however I decided to make this app as a
	single page application (SPA) on purpose for smoother transitions. On the other hand, the site can
	read QueryString to create the illusion of routing between pages.
</p>
<p class="indent justify">
	I use Bootstrap for CSS styles, although Bootstrap JavaScript components are not compatible in
	Svelte. I built all components for the need of maintaining this site. (I used a modal package
	written by someone, but replaced it with native modal implementation after upgrading to Svelte 5
	syntax) This site also has a functional responsive web design based on screen width.
</p>
<p class="indent justify">
	The site is built and deployed to Github Pages using Github Action as CI/CD (Continuous
	Integration/Continuous Deployment) but can be built and deployed as a container as well. The
	project is supported to be opened in DevContainer and CodeSpace. Both will generate the build
	datetime to be displayed at the bottom of pages.
</p>
<p class="indent justify">
	You can find the full source code at the <Link
		url="https://github.com/alankrantas/alankrantas.github.io"
		name="original repository"
	/>.
</p>
<p>
	<br />
</p>
<p class="text-center">
	<Image
		src="/website/responsive.svg"
		alt="responsive"
		footnote="This site is <b><i>responsive!</i></b>"
		widthRatios={[20, 20, 20, 20]}
	/>
</p>
<p>
	<br /><br />
</p>
<p>
	<List list={site} title="Tools and Resource for Building This Site" />
</p>
