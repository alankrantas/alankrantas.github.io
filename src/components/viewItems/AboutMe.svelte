<script lang="ts">
	import { onMount } from 'svelte';
	import List from '../common/List.svelte';
	import Image from '../common/Image.svelte';

	import info from '../../data/BasicInfo.json';
	import fact from '../../data/lists/PersonalFacts.json';
	import hobbies from '../../data/lists/Hobbies.json';

	const getAge = () => {
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
	work or worked as {info.title.map((item) => item.toLowerCase()).join(', ')} in several industries,
	but currently in {info.industry}.
</p>
<p class="indent">
	With the rare combinations of experiences and skills, I am a quick, passionate learner with a
	creative mind, easy-going personality as well as down-to-earth working attitude.
</p>
<p>
	<br />
</p>
<hr />
<p>
	<br />
</p>
<p>
	I grew up with computers. I played the shareware version of DOOM when I was 10 and tried to learn
	how to write QuickBASIC programs when I was 12. In my middle- and high school days I use Visual
	Basic 4 then 6 to write mini Windows games.
</p>
<p class="indent">
	I did not go to a information technology-related department in collage as planned (but later did
	so in my graduate degree, after spending two years study like crazy). I first went to a local
	system integration company as a Java programmer - where I learned basic of the early front/back
	end programming - and was deeply disappointed with the unhealthy overtime working culture. I left
	and decided to be a full-time translator instead, out of my passion for reading novels.
</p>
<p class="indent">
	It was a great time, I did make some money, and occasionally got to write book reviews and
	introductions for publishers. I wrote a column on a monthly magazine for a short while. But after
	six and half years the publishing market declined rapidly, and less books published means less
	work available. I had no choice but to find my next way out.
</p>
<p class="indent">
	I jumped back to the software world, first in STEM/education-related jobs - even got to learn a
	few things about embedded programming (including how to use a soldering gun) and practical machine
	learning - then find a job as a technical writer in a startup to write product user documentation
	as well as marketing materials.
</p>
<p class="indent">
	For my own free time, I write tech blogs and create website/Maker side projects from time to time,
	never for profit or fame but for the pure joy of learning and sharing. I also have great interests
	in books, movies, music and film photography. I also collect vintage film cameras and shared photo
	works on my Instagram.
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
		footnote="Selfie just before turning 40"
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
		footnote="Two of my favorite things: film camera and coffee. (The camera is a Eastern Germany-made Zeiss Ikon
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
		footnote="Japanese-made, hand-assembled Billy doll houses refitted with DIY lights, sensors and other stuff."
	/>
</p>
