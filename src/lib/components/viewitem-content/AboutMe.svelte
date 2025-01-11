<script lang="ts">
	import List from '$lib/components/common/List.svelte';
	import Image from '$lib/components/common/Image.svelte';

	import info from '$lib/data/info/BasicInfo.json';
	import fact from '$lib/data/lists/PersonalFacts.json';
	import hobbies from '$lib/data/lists/Hobbies.json';

	const getAge = () => {
		const birth = new Date('10 Mar 1984 12:00:00 GMT+8');
		const diff = new Date(Date.now() - birth.getTime());
		return diff.getUTCFullYear() - 1970;
	};

	fact[2].description = fact[2].description.replace('<age>', String(getAge()));
</script>

<p><span class="h3 justify">Who am I?</span></p>
<p class="justify">
	My name is <b>{info.name}</b>; I am born, raised and educated in {info.location}. I currently work
	under the titles include {info.title.join(', ')}.
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
