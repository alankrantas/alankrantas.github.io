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
			name: 'Résumé #1',
			content: 'Linkedin',
			footnote: 'English',
			link: 'https://www.linkedin.com/in/alankrantas/',
			linkedContent: true
		},
		{
			name: 'Résumé #2',
			content: 'Cakeresume',
			footnote: 'English',
			link: 'https://www.cakeresume.com/krantas',
			linkedContent: true
		},
		{
			name: 'Code repositories',
			content: 'Github',
			link: 'https://github.com/alankrantas',
			linkedContent: true
		},
		{
			name: 'Personal blog',
			content: 'Blogger',
			footnote: 'Traditional Chinese',
			link: 'https://krantasblog.blogspot.com/',
			linkedContent: true
		},
		{
			name: 'Tech blog',
			content: 'Medium',
			footnote: 'English/Traditional Chinese',
			link: 'https://alankrantas.medium.com/',
			linkedContent: true
		},
		{
			name: 'Maker blog/project showcases',
			content: 'Hackster.io',
			footnote: 'English',
			link: 'https://www.hackster.io/alankrantas',
			linkedContent: true
		},
		{
			name: 'Film photography #1',
			content: 'Instagram',
			link: 'https://www.instagram.com/alankrantas/',
			linkedContent: true
		},
		{
			name: 'Film photography #2',
			content: 'Pexels',
			link: 'https://www.pexels.com/@alan-wang-207740683/',
			linkedContent: true
		}
	];
</script>

<p>Links for my external resources and sites.</p>
<p class="indent">
	Like most people, I've left bits and pieces of my footprint on the Internet. There is no way I can
	relocate all of them onto this website.
</p>
<p class="indent">
	Here's some of the notable links that you might consider to pay a visit if you are interested to
	know more about me:
</p>
<br />
<List list={linkList} title="External Resources & Social Links" />
