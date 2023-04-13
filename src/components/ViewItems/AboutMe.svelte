<script lang="ts">
	import { name, title, location } from '../../data/NameTitle';
	import { personalFacts } from '../../data/FactLists';
	import List from '../List.svelte';

	const getAge = () => {
		const now = new Date();
		const birth = new Date('10 Mar 1984 12:00:00 GMT+8');
		return Math.floor(
			(now.getMonth() - birth.getMonth() + 12 * (now.getFullYear() - birth.getFullYear())) / 12
		);
	};
</script>

<p><span class="h5">Hello</span> there!</p>
<p class="indent">
	My name is <b>{name}</b>, a Taiwanese born (b. 1984), raised and educated in {location}. I am
	currently a <b>{title}</b>
	working for a local software startup.
</p>
<p class="indent">
	With rare experiences in both software and publishing industry, I am a quick, passionate learner
	with versatile combination of skills. I am creative with an easy-going personality as well as
	down-to-earth working attitude.
</p>
<br /><br />
<div class="text-center p-2 m-2">
	<img src="/about-me/profile.jpg" width="300px" alt="profile" class="rounded-circle shadow" />
</div>
<br /><br />
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
	touch of publishing, then finally moved back to a pure software business.
</p>
<p class="indent">Click the other sections of this website to learn more about me.</p>
<br /><br />
<List title="Personal Facts" factList={personalFacts} />
