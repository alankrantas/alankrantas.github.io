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
	I had experience and skills in software engineering, embedded system prototyping as well as
	practical machine learning/deep learning, but currently not maintained up-to-date.
</p>
<p class="indent justify">
	I was also an amateur classical piano player, analog film photography hobbyist and STEM Maker
	enthusiast. I have self-taught basic mechanical watch movement servicing and already successfully
	repaired/serviced several vintage watches.
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
