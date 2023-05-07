<script lang="ts">
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

	fact[2].description = fact[2].description.replace('<age>', String(getAge()));
</script>

<p><span class="h4">Hello there!</span></p>
<p class="indent">
	My name is <b>{info.name}</b>, a native Taiwanese born, raised and educated in {info.location}. I
	am currently a <b>{info.title}</b>
	working for a local software startup.
</p>
<p class="indent">
	With rare experiences in both software and publishing industry, I am a quick, passionate learner
	with versatile combination of skills. I am creative with an easy-going personality as well as
	down-to-earth working attitude.
</p>
<p class="indent">
	I grew up with computers. I played the shareware version of DOOM when I was 10 and self-taught
	myself to write simple (and bad) Quick-BASIC programs when I was 12. I moved on to Visual Basic 4
	in middle school then Visual Basic 6 in high school, mostly writing mini games.
</p>
<p class="indent">
	I didn't know what exactly where I wanted to go. In college I picked a major that I had no
	interest in, and my first job as a overworked programmer frustrated me. I decided to try out one
	of my other interests, which is translating. I had some little reputation in the book circle as a
	reviewer and blogger, and got introduced into the publishing circle.
</p>
<p class="indent">
	After six and half years and the publishing market showed signs of dying quickly if not already, I
	had no choice but to find my next way out. I want back to the software world, at first still in
	touch of publishing, then finally moved back to a pure software business. I learned lots of new
	stuff in the span of a couple of years.
</p>
<p class="indent">
	And this is more of less how I ended up building this site - kind of unexpectedly.
</p>
<p class="indent">
	Click the other sections of this website to learn more about me. See <kbd>Links</kbd> for contacting
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
<p>
	<List list={fact} title="Personal Facts" />
</p>
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
