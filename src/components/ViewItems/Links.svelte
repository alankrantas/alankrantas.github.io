<script lang="ts">
	import type { ListItem } from '../../data/Types';
	import List from '../utils/List.svelte';

	const linkList: ListItem[] = [
		{
			name: 'Personal email',
			content: 'krantas@gmail.com',
			link: 'mailto:krantas@gmail.com',
			linkedContent: true
		},
		{
			name: 'Work email',
			content: 'alan.wang@fstk.io',
			link: 'mailto:alan.wang@fstk.io',
			linkedContent: true
		},
		{
			name: 'Résumé',
			content: 'Cakeresume',
			language: ['English'],
			link: 'https://www.cakeresume.com/krantas',
			linkedContent: true
		},
		{
			name: 'Professional profile',
			content: 'Linkedin',
			language: ['English'],
			link: 'https://www.linkedin.com/in/alankrantas/',
			linkedContent: true
		},
		{
			name: 'Personal profile',
			content: 'Facebook',
			language: ['Traditional Chinese'],
			link: 'https://www.facebook.com/alankrantas/',
			linkedContent: true
		},
		{
			name: 'Personal blog',
			content: 'Blogger',
			footnote: 'Mostly book, movie & game reviews, photography journals',
			language: ['Traditional Chinese'],
			link: 'https://krantasblog.blogspot.com/',
			linkedContent: true
		},
		{
			name: 'Tech blog',
			content: 'Medium',
			footnote: 'Programming-related with a few marketing pieces',
			language: ['English', 'Traditional Chinese'],
			link: 'https://alankrantas.medium.com/',
			linkedContent: true
		},
		{
			name: 'Maker blog/project showcases',
			content: 'Hackster.io',
			language: ['English'],
			link: 'https://www.hackster.io/alankrantas',
			linkedContent: true
		},
		{
			name: 'Code repositories',
			content: 'Github',
			language: ['English'],
			link: 'https://github.com/alankrantas',
			linkedContent: true
		},
		{
			name: 'Film photography',
			content: 'Instagram',
			language: ['English'],
			link: 'https://www.instagram.com/alankrantas/',
			linkedContent: true
		},
		{
			name: 'Film photography',
			content: 'Pexels',
			footnote: 'The best of my works free for download; high-resolution re-scanned',
			language: ['English'],
			link: 'https://www.pexels.com/@alan-wang-207740683/',
			linkedContent: true
		},
		{
			name: 'Film photography',
			content: 'Google Albums',
			footnote: 'The best of my medium format films, 2015~2019; re-scanned',
			link: 'https://photos.app.goo.gl/rYKF5fUb5anRPx8z5',
			linkedContent: true
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
