<script module lang="ts">
	import List from '$lib/components/common/List.svelte';
	import Image from '$lib/components/common/Image.svelte';

	import info from '$lib/data/info/BasicInfo.json';
	import fact from '$lib/data/lists/PersonalFacts.json';
	import hobbies from '$lib/data/lists/Hobbies.json';

	import { getAge } from '$lib/util/util';

	fact[2].description = fact[2].description.replace('<age>', String(getAge()));
</script>

<script lang="ts">
</script>

<p><span class="h2 justify">Introduction</span></p>
<p class="justify">Hello and welcome to my homepage!</p>
<p class="indent justify">
	My name is <b>{info.name}</b>, a {info.title[0].toLowerCase()} based in {info.location}.
</p>
<p class="indent justify">
	A seasoned writer and expert translator who has 10+ years of proven work experience and a rare,
	diverse skill set mostly in software, technology, education and publishing industry, with
	professional responsibilities in copywriting/content marketing, editing/proofreading, software
	engineering/embedded programming and AI. Published 60+ full-length translated, edited or authored
	titles, dozens of articles and many social media content, as well as a couple of
	document/documentation writing projects.
</p>
<p class="indent justify">Browse this site to find out more about me!</p>
<p>
	<br />
</p>
<p>
	<Image
		src="/about-me/profile.jpg"
		alt="profile"
		footnote="Me just before turing 40"
		widthRatios={[70, 80, 90, 95]}
	/>
</p>
<p>
	<br />
</p>
<hr />
<p>
	<br />
</p>
<p>
	<List list={fact} title="Personal Facts" />
</p>
<p>
	<br />
</p>
<hr />
<p>
	<br />
</p>
<p>
	<Image
		src="/about-me/camera.jpg"
		alt="camera"
		footnote="Two of my favorite things: film camera and coffee.<br />(The camera is a 1950s Eastern Germany-made Zeiss Ikon
		Ercona.)"
	/>
</p>
<p>
	<br />
</p>
<p>
	<List list={hobbies} title="Interests and Hobbies" />
</p>
<p>
	<br />
</p>
<p>
	<Image
		src="/about-me/sakura.jpg"
		alt="sakura"
		footnote="Cherry blossoms on medium format still film,<br />Kumamoto Castle, Japan, 2018."
		widthRatios={[75, 85, 90, 95]}
	/>
</p>
<p>
	<br />
</p>
<p>
	<Image
		src="/about-me/diy.jpg"
		alt="diy"
		footnote="Japanese-made, hand-assembled Billy doll houses<br />refitted with DIY lights, sensors and other stuff."
	/>
</p>
