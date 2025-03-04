<script lang="ts">
	import List from '$lib/components/common/List.svelte';
	import Image from '$lib/components/common/Image.svelte';

	import info from '$lib/data/info/BasicInfo.json';
	import fact from '$lib/data/lists/PersonalFacts.json';
	import hobbies from '$lib/data/lists/Hobbies.json';

	import { getAge } from '$lib/util/util';

	fact[2].description = fact[2].description.replace('<age>', String(getAge()));
</script>

<p><span class="h3 justify">Who am I?</span></p>
<p class="justify">
	My name is <b>{info.name}</b>; I am born, raised and educated in {info.location}. I currently work
	under the title of {info.title[0]}.
</p>
<p class="indent justify">
	I am a seasoned writer and expert translator with professional experience in fields including
	software, technology, AI, literature and STEM education. I also had professional responsibilities
	in social media content marketing, as well as in software engineering and embedded programming.
</p>
<p class="indent justify">
	I have personal interests in reading, movie watching, photography and others.
</p>
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
