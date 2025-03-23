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
	I am a seasoned technical writer and bilingual translator with over 10 years of experience in
	software, technology, education, and publishing. Translated, edited, or authored more than 60
	full-length titles and produced dozens of technical articles and marketing materials.
</p>
<p class="indent justify">
	Expertise spans copywriting, content marketing, software engineering, embedded programming, and
	AI. Known for rapid adaptability, cross-disciplinary skill integration and strong communication
	skills to translate complex concepts into accessible content for diverse audiences, and delivered
	high-impact works that improved user engagement and business growth.
</p>
<p class="indent justify">I have personal interests in reading, music, movies and photography.</p>
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
		widthRatios={[70, 80, 90, 95]}
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
