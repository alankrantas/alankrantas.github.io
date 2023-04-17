<script lang="ts">
	import type { ListItem } from '../../data/Types';
	import List from '../List.svelte';

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

<br />
<List list={hobbiesList} title="Personal hobbies" />
