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

<p><span class="h2 justify">Who am I?</span></p>
<p class="justify">
	My name is <b>{info.name}</b>, currently based in {info.location}.
</p>
<p class="indent justify">
	I am an experienced writer, editor and translator with 10+ years across software, technology,
	education, publishing and journalism with 60+ published works and versatile skills, including
	technical writing, copywriting, content marketing, software engineering, embedded systems design,
	photography, video making and mechanical watch repairing. Currently working for a local wristwatch
	magazine as an social media content creator and editor.
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
		src="/about-me/profile.jpg"
		alt="profile"
		footnote="Me just before turing 40"
		widthRatios={{
			992: 0.7,
			768: 0.8,
			576: 0.9,
			0: 0.95
		}}
	/>
</p>
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
		widthRatios={{
			992: 0.7,
			768: 0.8,
			576: 0.9,
			0: 0.95
		}}
	/>
</p>
<p>
	<br />
</p>
<p>
	<Image
		src="/about-me/diy.jpg"
		alt="diy"
		footnote="Building and servicing my first DIY mechanical watch."
		widthRatios={{
			992: 0.7,
			768: 0.8,
			576: 0.9,
			0: 0.95
		}}
	/>
</p>
