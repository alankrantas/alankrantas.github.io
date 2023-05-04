<script lang="ts">
	import type { ListItem } from '../../data/Types';
	import List from '../utils/List.svelte';

	const linkList: ListItem[] = [
		{
			name: 'krantas@gmail.com',
			link: 'mailto:krantas@gmail.com',
			linkedTitle: true
		},
		{
			name: 'alan.wang@fstk.io',
			footnote: 'Work email',
			link: 'mailto:alan.wang@fstk.io',
			linkedTitle: true
		},
		{
			name: 'Résumé',
			language: ['English'],
			link: 'https://www.cakeresume.com/krantas',
			linkedTitle: true
		},
		{
			name: 'Linkedin',
			language: ['English'],
			link: 'https://www.linkedin.com/in/alankrantas/',
			linkedTitle: true
		},
		{
			name: 'Facebook',
			footnote: 'For friends only',
			language: ['Traditional Chinese'],
			link: 'https://www.facebook.com/alankrantas/',
			linkedTitle: true
		},
		{
			name: 'Blogger',
			content: 'Personal blog; mostly book, movie & game reviews, photography journals',
			language: ['Traditional Chinese'],
			link: 'https://krantasblog.blogspot.com/',
			linkedTitle: true
		},
		{
			name: 'Medium',
			content: 'Tech blog; programming-related with a few marketing pieces',
			language: ['English', 'Traditional Chinese'],
			link: 'https://alankrantas.medium.com/',
			linkedTitle: true
		},
		{
			name: 'Hackster.io',
			content: 'Maker blog/project showcases',
			language: ['English'],
			link: 'https://www.hackster.io/alankrantas',
			linkedTitle: true
		},
		{
			name: 'Github',
			language: ['English'],
			link: 'https://github.com/alankrantas',
			linkedTitle: true
		},
		{
			name: 'Instagram',
			footnote: 'For film photography',
			language: ['English'],
			link: 'https://www.instagram.com/alankrantas/',
			linkedTitle: true
		},
		{
			name: 'Pexels',
			footnote: 'The best of my works free for download; high-resolution re-scanned',
			language: ['English'],
			link: 'https://www.pexels.com/@alan-wang-207740683/',
			linkedTitle: true
		}
	];
</script>

<p>Links for my external resources and sites.</p>
<p class="indent">
	Like most people, I've left bits and pieces of my footprint on the Internet. There is no way I can
	relocate all of them onto this website. Here's some of the notable links that you might consider
	to pay a visit if you are interested to know more about me:
</p>
<p>
	<br />
</p>
<List list={linkList} title="External Resources & Social Links" />
