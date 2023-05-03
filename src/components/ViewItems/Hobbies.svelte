<script lang="ts">
	import type { ListItem } from '../../data/Types';
	import List from '../utils/List.svelte';

	const hobbiesList: ListItem[] = [
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
			content: 'A cup or two black coffee always make my day.',
			footnote: "Actually I suspect I'm powered by caffeine..."
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

<List list={hobbiesList} title="Personal Interests" />
<p>
	<br />
</p>
<p class="text-center">
	<img src="/about-me/camera.jpg" width="550px" alt="camera" class="rounded-5 p-2 m-2" />
	<br />
	<span class="small codetext-white-50">
		Two of my favorite things: camera and coffee. (The camera is a Eastern Germany-made Zeiss Ikon
		Ercona; this copy is possibly manufactured in early 1950s)</span
	>
</p>
<p>
	<br />
</p>
<p class="text-center">
	<img src="/about-me/sakura.jpg" width="500px" alt="sakura" class="rounded-5 p-2 m-2" />
	<br />
	<span class="small codetext-white-50"
		>Cherry blossoms on medium format still film, Kumamoto Castle, Japan, 2018.</span
	>
</p>
<p>
	<br />
</p>
<p class="text-center">
	<img src="/about-me/diy.jpg" width="500px" alt="diy" class="rounded-5 p-2 m-2" />
	<br />
	<span class="small codetext-white-50"
		>Japanese-made, hand-assembled Billy doll houses refitted with DIY lights and other stuff.</span
	>
</p>
