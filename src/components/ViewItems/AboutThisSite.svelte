<script lang="ts">
	import Link from '../Link.svelte';
</script>

<div class="text-white">
	<p class="indent">
		As a semi-developer who never had official experiences in modern front-end JavaScript
		frameworks, I happened got to learn some of them while working for the IT books publisher:
		Angular, React, Vue.js, Svelte and Solid. Later I learned more about how to deploy them with CI
		(continuous integration) jobs. At that moment I knew exactly what I can do with this.
	</p>
	<p class="indent">
		It is always such a fun ride to try to make something on your own, and a great learning
		experience too. I can experiment things or rewrite anything if I get new ideas. The front-end
		technologies is certainly something I'd 'never imagined from the days of creating simple
		websites using Microsoft FrontPage.
	</p>
	<p class="indent">This site is built with the following frameworks, tools and resources:</p>
	<ul>
		<li class="pt-1 pb-1 mt-1 mb-1">
			The whole SPA (single-page application) is developed
			<Link url="https://svelte.dev/" name="Svelte 3" />
			and <Link url="https://kit.svelte.dev/" name="SvelteKit" />, including the CSS animations.
		</li>
		<li class="pt-1 pb-1 mt-1 mb-1">
			The app is compiled as a SSG (static-site generation) production using <Link
				url="https://kit.svelte.dev/docs/adapter-static"
				name="@sveltejs/adapter-static"
			/>.
		</li>
		<li class="pt-1 pb-1 mt-1 mb-1">
			I use <Link url="https://docs.github.com/en/actions" name="Github Actions" /> to build and deploy/host
			the site to
			<Link url="https://pages.github.com/" name="Github Pages" />.
		</li>
		<li class="pt-1 pb-1 mt-1 mb-1">
			Most CSS styles are provided by <Link url="https://getbootstrap.com/" name="Bootstrap 5" />.
		</li>
		<li class="pt-1 pb-1 mt-1 mb-1">
			The site uses several fonts from <Link url="https://fontsource.org/" name="Fontsource" />,
			which are <Link url="https://fonts.google.com/" name="Google Fonts" /> in the form of NPM packages.
		</li>
		<li class="pt-1 pb-1 mt-1 mb-1">
			I use free images downloaded from <Link url="https://unsplash.com/" name="Unsplash" />.
		</li>
	</ul>
	<p class="indent">
		You can find the source code in <Link
			url="https://github.com/alankrantas/alankrantas.github.io"
			name="this repo"
		/>.
	</p>
</div>
