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
	My name is <b>{info.name}</b> who is based in {info.location}.
</p>
<p class="indent justify">
	Currently working for a local luxury wristwatch magazine as an editor, advertorial writer,
	photographer and visual content creator.
</p>
<p class="indent justify">
	I had diverse experiences primary in publishing, education and software/information technology,
	with ~60 published works (translated, edited and authored) as well as versatile skills including
	content writing, translating, technical writing, copywriting, software engineering, embedded
	system, machine learning/deep learning (AI), digital/film photography and video making.
</p>
<p class="indent justify">
	I was also an amateur classical piano player, STEM Maker enthusiast and have self-taught basic
	mechanical watch movement servicing in 3 months.
</p>
<p class="indent justify">
	I have long-time personal interests in reading, movies, music, (film) photography,
	wristwatches/horology and others.
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
