<script lang="ts">
	import List from '../common/List.svelte';
	import Image from '../common/Image.svelte';

	import info from '../../data/info/BasicInfo.json';
	import fact from '../../data/lists/PersonalFacts.json';
	import hobbies from '../../data/lists/Hobbies.json';

	const getAge = () => {
		const birth = new Date('10 Mar 1984 12:00:00 GMT+8');
		const diff = new Date(Date.now() - birth.getTime());
		return diff.getUTCFullYear() - 1970;
	};

	fact[2].description = fact[2].description.replace('<age>', String(getAge()));
</script>

<p><span class="h4 justify">TL; DR</span></p>
<p class="justify">
	I am <b>{info.name}</b>, a native Taiwanese born, raised and educated in {info.location}. I work
	primarily as a {info.title[0]}.
</p>
<p class="indent justify">
	I am a seasoned writer with 10+ years of writing and translating backgrounds that have resulted in
	50+ full-length published works, dozens of articles and several writing projects, and has
	professional experience in technical writing (including documentation), copywriting, content
	marketing, publishing, software engineering and STEM education.
</p>
<p class="indent justify">
	I also have personal interests in reading, watching movies, photography and occasionally making
	software or embedded projects.
</p>
<p>
	<br />
</p>
<p>
	<Image src="/about-me/profile.jpg" alt="profile" footnote="" widthRatios={[70, 80, 90, 95]} />
</p>
<p>
	<br />
</p>
<p><span class="h4 justify">Now a short bio about me</span></p>
<p class="justify">
	I grew up with computers. My dad bought a 80486 PC when I was 10. I learned how to play the DOOM
	and Duke Nukem 3D demos by myself. As fascinated as a kid can be, I proceeded to learn MS-DOS
	commands and then tried to write a few QuickBASIC scripts in the summer immediately after
	graduating elementary school.
</p>
<p class="indent justify">
	Into middle school, I found Visual Basic v4 and then v6 in high school. I joined the computing
	club. While everyone in it was learning C++, I spent most of the time writing Windows mini-games
	and even showcased them on the school's anniversary day.
</p>
<p class="indent justify">
	Then fate (if there is such a thing) dealt a heavy blow. I did not find my way into any
	information technology-related department as hoped. I had to choose a major that I had no interest
	at all - at least it is in a reputed university. I spent two years study like crazy for getting
	into a related graduate school, and made it barely. If I didn't, I'll have to go to the mandatory
	military service and have a year or two doing nothing!
</p>
<p class="indent justify">
	My first job (also as my 3-year alternative military service) was a web programmer in a local
	system integration provider. It is where I learned most of the "modern" software engineering
	stuff. The working condition and culture though, it was not ideal at all - I was pretty exhausted
	and frustrated and decide to leave.
</p>
<p class="indent justify">If not for an engineer, what else can I be? Maybe a...translator?</p>
<p class="indent justify">
	I already did some part-time translation work before, so I went full-time freelance. And it did
	take off; I actually made quite some money in the first few years, and I enjoyed it. I also
	occasionally got to write book reviews and introductions for publishers. I wrote a column on a
	monthly magazine for a short while.
</p>
<p class="indent justify">
	Sadly, the publishing market started to decline rapidly after about five or six years. With less
	and less contracts available, I knew it was time to get out and adapt.
</p>
<p class="indent justify">
	So I jumped back to the software slash education field - first write materials for a small STEM
	agency, then as an editor in a tech book publisher. It was where I learned practical machine
	learning and most of the embedded programming knowledge - including how to use a soldering gun.
</p>
<p class="indent justify">
	My next stop was working as a technical writer in a software startup, to write documentations and
	technical marketing materials for a data integration platform. After the startup failed two years
	later, I decided to take some rest then go back into freelance writing and translating.
</p>
<p class="indent justify">
	That is all for now! Click the other sections of this website to learn more about me. See <kbd
		>Links & About</kbd
	> for contacting me.
</p>
<p>
	<br />
</p>
<p>
	<Image
		src="/about-me/profile2.jpg"
		alt="profile2"
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
		footnote="Two of my favorite things: film camera and coffee.<br />(The camera is a Eastern Germany-made Zeiss Ikon
		Ercona;<br />this copy is possibly manufactured in early 1950s.<br />Photo by me with a Canon EOS 300 film SLR.)"
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
		footnote="Cherry blossoms on medium format still film<br />(with an early-1950s Mamiya Six IV),<br />Kumamoto Castle, Japan, 2018."
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
