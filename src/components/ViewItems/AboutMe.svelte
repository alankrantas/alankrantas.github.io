<script lang="ts">
	import { name, title, location } from '../../data/NameTitle';
	import type { ListItem } from '../../data/Types';
	import List from '../List.svelte';

	const getAge = () => {
		const now = new Date();
		const birth = new Date('10 Mar 1984 12:00:00 GMT+8');
		return Math.floor(
			(now.getMonth() - birth.getMonth() + 12 * (now.getFullYear() - birth.getFullYear())) / 12
		);
	};

	const personalList: ListItem[] = [
		{
			name: 'Birth name',
			content: 'Pao-Hsiang Wang'
		},
		{
			name: 'Nationality',
			content: 'Taiwan (R.O.C.)'
		},
		{
			name: 'Year of birth',
			content: `1984 (age ${getAge()})`
		},
		{
			name: 'Zodiac sign',
			content: 'Pisces ♓'
		},
		{
			name: 'Blood type',
			content: 'A'
		},
		{
			name: 'Myers-Briggs Type Indicator (MBTI)',
			content: 'ISTJ',
			footnote: '(The Investigator/Inspector/Logistician)'
		},
		{
			name: 'Height',
			content: '178 cm (5′ 10″)'
		},
		{
			name: 'Marital status',
			content: 'Unmarried',
			footnote: 'Any takers? 😂'
		}
	];

	const interestList: ListItem[] = [
		{
			name: 'Movies & TV shows',
			content: 'Almost anything except scary or non-sci-fi horror works.',
			footnote: "And I love Wes Anderson's movies soooo much."
		},
		{
			name: 'Music',
			content: 'Classical, soundtracks, sometimes jazz and western.',
			footnote: "Actually I've learned amateur classical piano for 20+ years."
		},
		{
			name: 'Books',
			content: 'Mostly science fiction, fantasy with a few general fiction/non-fiction.',
			footnote: 'Nowadays I read ebooks mostly on commute.'
		},
		{
			name: 'Coffee',
			content: 'I seldom drink but a cup or two black coffee always make my day.'
		},
		{
			name: 'Photography',
			content:
				'Mostly film photography in 35mm or 120 still films, sometimes in digital. Had shot Polaroid/instax mini instant films.',
			footnote:
				'I have a collection of a dozen vintage cameras, over half of them are even older than I am.'
		},
		{
			name: 'City sightseeing',
			content:
				'I like visiting historical buildings and sites. This is often do with photography too.',
			footnote: 'Feel free to ask me to recommend great photo spots in Taipei and New Taipei City!'
		},
		{
			name: 'Maker projects',
			content: 'Building fun interactive physical computing devices.'
		}
	];
</script>

<p><span class="h5">Hello</span> there!</p>
<p class="indent">
	My name is <b>{name}</b>, a native Taiwanese born, raised and educated in {location}. I am
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
	<img src="/about-me/profile.jpg" width="350px" alt="profile" class="rounded-circle shadow" />
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
	touch of publishing, then finally moved back to a pure software business. I learned lots of new
	stuff in the span of a couple of years.
</p>
<p class="indent">
	And this is more of less how I ended up building this site - kind of unexpectedly.
</p>
<p class="indent">Click the other sections of this website to learn more about me.</p>
<br /><br />
<List title="Personal Facts" list={personalList} />
<br /><br />
<div class="text-center p-2 m-2">
	<img src="/about-me/hobbies.jpg" width="600px" alt="hobbies" class="rounded-pill shadow" />
</div>
<br /><br />
<List list={interestList} title="Personal hobbies" />
