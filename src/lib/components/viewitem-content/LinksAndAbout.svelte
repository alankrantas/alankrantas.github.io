<script lang="ts">
	import List from '$lib/components/common/List.svelte';
	import Link from '$lib/components/common/Link.svelte';
	import Image from '$lib/components/common/Image.svelte';

	import links from '$lib/data/lists/Links.json';
	import site from '$lib/data/lists/SiteTech.json';
</script>

<p class="justify">
	As a netizen myself, I too have left my own traces and bits. You can find me in the following
	links or contact me:
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
<p class="justify">
	This website, or the first major version of it, was completed and deployed in May 2023. I always
	wanted to build my own personal site from scratch. This is essentially an on-going side project
	that I can tinker in ways I see fit. I also built it as a single-page application (SPA) on purpose
	for the cool Svelte animation effects.
</p>
<p class="indent justify">
	I've learned the related skills from two of my jobs. I picked Svelte (and SvelteKit) simply out of
	the simplicity of it, even though it has became slightly more complicated after Svelte updated to
	v5 in late 2024.
</p>
<p class="indent justify">
	You can check out the source code and extra information in my <Link
		url="https://github.com/alankrantas/alankrantas.github.io"
		name="Github repository"
	/>.
</p>
<p>
	<br />
</p>
<p class="text-center">
	<Image
		src="/website/responsive.svg"
		alt="responsive"
		footnote="This site is also <b><i>responsive!</i></b>"
		widthRatios={[20, 20, 20, 20]}
	/>
</p>
<p>
	<br /><br />
</p>
<p>
	<List list={site} title="Tools and Resource Used to Build This Site" />
</p>
