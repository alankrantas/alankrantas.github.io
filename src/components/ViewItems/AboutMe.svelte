<script lang="ts">
	import { onMount } from 'svelte';
	import List from '../utils/List.svelte';

	import info from '../../data/BasicInfo.json';
	import fact from '../../data/lists/PersonalFacts.json';
	import hobbies from '../../data/lists/Hobbies.json';

	const getAge = () => {
		const now = new Date();
		const birth = new Date('10 Mar 1984 12:00:00 GMT+8');
		return Math.floor(
			(now.getMonth() - birth.getMonth() + 12 * (now.getFullYear() - birth.getFullYear())) / 12
		);
	};

	onMount(() => {
		fact[2].description = fact[2].description.replace('<age>', String(getAge()));
	});
</script>

<p><span class="h4">Hello there!</span></p>
<p class="indent">
	My name is <b>{info.name}</b>, a native Taiwanese born/raised and educated in {info.location}. I
	am currently a {info.title.toLocaleLowerCase()} working for a software startup which creates a cloud-based
	data integration and data lineage platform.
</p>
<p class="indent">
	With rare experiences and skills in software, education, translating and content writing, I am a
	quick, passionate learner with a creative mind, easy-going personality as well as down-to-earth
	working attitude.
</p>
<p>
	<br />
</p>
<hr />
<p>
	<br />
</p>
<p>
	I grew up with computers. I played the shareware version of DOOM when I was 10 and self-taught to
	write QuickBASIC programs when I was 12. In my middle- and high school days I mostly use Visual
	Basic versions to write mini games.
</p>
<p class="indent">
	I was not succeed to get into a information technology-related department in collage as planned
	(and later did so for my graduate degree). I went to a system integration company as a Java
	programmer and was deeply disappointed with the unhealthy overtime culture. I left and since I am
	also a big book lover, I decided to be a translator instead.
</p>
<p class="indent">
	It was a great time, but after six and half years the publishing market showed signs of dying. I
	had no choice but to find my next way out. I jumped back to the software world, first in
	education-related jobs - for which I've also learned a lot about embedded programming and machine
	learning - then (unexpectedly) find a job as a technical writer.
</p>
<p class="indent">
	I now write technical contents (user manuals and marketing materials) for my current company. I
	still write tech blogs and create Maker projects from time to time, not for profit or fame but for
	but pure joy of learning and sharing. I also have great interests in books, movies, music and
	photography.
</p>
<p class="indent">
	Click the other sections of this website to learn more about me. See <kbd>Links & About</kbd> for contacting
	me.
</p>
<p>
	<br />
</p>
<p class="text-center">
	<img
		loading="lazy"
		src="/about-me/profile.jpg"
		width="450px"
		alt="profile"
		class="rounded-5 p-2 m-2"
	/>
	<br />
	<span class="small"> Selfie with a Polaroid SX-70 Sonar </span>
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
<p class="text-center">
	<img
		loading="lazy"
		src="/about-me/camera.jpg"
		width="550px"
		alt="camera"
		class="rounded-5 p-2 m-2"
	/>
	<br />
	<span class="small">
		Two of my favorite things: camera and coffee. (The camera is a Eastern Germany-made Zeiss Ikon
		Ercona; this copy is possibly manufactured in early 1950s)</span
	>
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
<p class="text-center">
	<img
		loading="lazy"
		src="/about-me/sakura.jpg"
		width="500px"
		alt="sakura"
		class="rounded-5 p-2 m-2"
	/>
	<br />
	<span class="small"
		>Cherry blossoms on medium format still film, Kumamoto Castle, Japan, 2018.</span
	>
</p>
<p>
	<br />
</p>
<p class="text-center">
	<img loading="lazy" src="/about-me/diy.jpg" width="500px" alt="diy" class="rounded-5 p-2 m-2" />
	<br />
	<span class="small"
		>Japanese-made, hand-assembled Billy doll houses refitted with DIY lights and other stuff.</span
	>
</p>
