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
<p><span class="h3 justify">About This Site</span></p>
<p class="indent justify">
	This personal website, or the first major version of it, was completed in May 2023. I've learned
	modern front-end frameworks only a few years ago while working on a TypeScript book as an editor,
	and gained some CI/CD knowledge in my next job. I knew back then this is something I'd like to do,
	but still it took a while to make it happen.
</p>
<p class="indent justify">
	I really like Svelte (a relatively newer but popular JavaScript framework), especially for its
	built-in transition effects. SvelteKit, the framework for building and deploying Svelte apps, has
	a pretty simple yet powerful file-based routing mechanism, although I purposely make this app as a
	single page application (SPA) for smoother transitions. On the other hand, the site can read
	QueryString values to retain the illusion of page routing.
</p>
<p class="indent justify">
	I use Bootstrap for CSS styles (no JavaScript components since they are not compatible in Svelte).
	I built all components for the need of maintaining this site. (For Svelte 4 and before I imported
	a modal package written by someone else, but had to replace it with my own native implementation
	after upgrading to Svelte 5 syntax) This site also has a functional responsive web design based on
	screen inner width.
</p>
<p class="indent justify">
	The site is built and deployed to Github Pages using a Github Action workflow (the build time will
	be written into a file to be displayed in the production), but can be built and deployed as a
	container. The project is supported to be opened in DevContainer and CodeSpace.
</p>
<p class="indent justify">
	This site is thus an active side project which would be subjected to further changes and updates.
</p>
<p class="indent justify">
	You can find the full source code in my <Link
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
	<List list={site} title="Tools and Resource Used to Build This Site" />
</p>
