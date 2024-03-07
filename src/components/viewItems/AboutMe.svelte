<script lang="ts">
	import { onMount } from 'svelte';
	import List from '../utils/List.svelte';
	import Image from '../utils/Image.svelte';

	import info from '../../data/BasicInfo.json';
	import fact from '../../data/lists/PersonalFacts.json';
	import hobbies from '../../data/lists/Hobbies.json';

	const getAge = () => {
		const now = new Date();
		const birth = new Date('10 Mar 1984 12:00:00 GMT+8');
		const diff = new Date(Date.now() - birth.getTime());
		return diff.getUTCFullYear() - 1970;
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
	write QuickBASIC programs when I was 12, although it took me another few years to understand more
	of it. In my middle- and high school days I turned to early versions of Visual Basic to write mini
	games.
</p>
<p class="indent">
	I was not succeed to get into a information technology-related department in collage as planned
	(but later did so for my graduate degree, after spending two years studying in cram school). I
	went to a local system integration company as a Java programmer - I learned things about web and
	Java at that time - and was deeply disappointed with the unhealthy overtime culture. I left and
	since I am also a big book lover, I decided to be a full-time translator instead.
</p>
<p class="indent">
	It was a great time, I did make some money, and occasionally got to write book reviews and
	introductions for publishers. I even wrote for a monthly magazine for a short while. But after six
	and half years the publishing market showed signs of rapid decline. Less books published means
	there were less work opportunities. I had no choice but to find my next way out.
</p>
<p class="indent">
	I jumped back to the software world, first in STEM/education-related jobs - even got to learn a
	few things about embedded programming (including how to use a soldering gun) and training machine
	learning models - then finally (with a bit of luck) find a job as a technical writer.
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
<p>
	<Image
		src="/about-me/profile.jpg"
		alt="profile"
		footnote="Selfie with a Polaroid SX-70 Sonar"
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
		footnote="Two of my favorite things: camera and coffee. (The camera is a Eastern Germany-made Zeiss Ikon
		Ercona; this copy is possibly manufactured in early 1950s)"
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
		footnote="Cherry blossoms on medium format still film, Kumamoto Castle, Japan, 2018."
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
		footnote="Japanese-made, hand-assembled Billy doll houses refitted with DIY lights and other stuff."
	/>
</p>
