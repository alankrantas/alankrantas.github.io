<script lang="ts">
	import Link from '../Link.svelte';
</script>

<div class="text-white">
	<p class="indent">
		Like most people, I've left bits and pieces of my footprint on the Internet. There is no way I
		can relocate all of them onto this website.
	</p>
	<p class="indent">
		Here's some of the notable links that you might consider to pay a visit if you are interested to
		know more about me:
	</p>
	<ul>
		<li class="pt-1 pb-1 mt-1 mb-1">
			<Link url="https://www.linkedin.com/in/alankrantas/" name="Linkedin" />
		</li>
		<li class="pt-1 pb-1 mt-1 mb-1">
			<Link url="https://github.com/alankrantas" name="Github" />
		</li>
		<li class="pt-1 pb-1 mt-1 mb-1">
			<Link url="https://krantasblog.blogspot.com/" name="Blogger" />
			<ul>
				<li class="pt-1 pb-1 mt-1 mb-1">blog; mostly book/movie reviews and travel journals</li>
				<li class="pt-1 pb-1 mt-1 mb-1">Traditional Chinese</li>
			</ul>
		</li>
		<li class="pt-1 pb-1 mt-1 mb-1">
			<Link url="https://alankrantas.medium.com/" name="Medium" />
			<ul>
				<li class="pt-1 pb-1 mt-1 mb-1">blog; about software and embedding developments</li>
				<li class="pt-1 pb-1 mt-1 mb-1">English/Traditional Chinese</li>
			</ul>
		</li>
		<li class="pt-1 pb-1 mt-1 mb-1">
			<Link url="https://www.hackster.io/alankrantas" name="Hackster.io" />
			<ul>
				<li class="pt-1 pb-1 mt-1 mb-1">Maker projects showcases/instructions</li>
				<li class="pt-1 pb-1 mt-1 mb-1">English</li>
			</ul>
		</li>
		<li class="pt-1 pb-1 mt-1 mb-1">
			<Link url="https://www.instagram.com/alankrantas/" name="Instagram" />
			<ul>
				<li class="pt-1 pb-1 mt-1 mb-1">film photography works</li>
			</ul>
		</li>
	</ul>
	<p class="indent">
		Or contact me directly via my email: <Link
			url="mailto:krantas@gmail.com"
			name="krantas@gmail.com"
		/>.
	</p>
</div>
