<script lang="ts">
	import type { ListItem } from '../../data/Types';
	import List from '../utils/List.svelte';

	const professionalList: ListItem[] = [
		{
			name: 'FST Network Co., Ltd.',
			location: 'Taipei, Taiwan',
			content: 'Technical Marketing Writer',
			footnote: 'Apr 2022 ~ Present'
		},
		{
			name: 'Flag Publishing Co., Ltd.',
			location: 'Taipei, Taiwan',
			content: 'Book Editor/Product Development Engineer',
			footnote: 'Aug 2019 ~ Mar 2022'
		},
		{
			name: 'Taiwan Coding Education Association',
			location: 'Taipei, Taiwan',
			content: 'STEM Content Writer/Developer',
			footnote: 'May 2018 ~ Jul 2019'
		},
		{
			name: 'Freelance Translator',
			location: 'Taipei, Taiwan',
			content: 'Book Translator',
			footnote: 'Oct 2011 ~ Apr 2018'
		},
		{
			name: 'MiTAC Information Technology Crop.',
			location: 'Taipei, Taiwan',
			content: 'Java/J2EE Web Programmer',
			footnote: 'Oct Aug 2008 ~ Oct 2011'
		}
	];

	const educationList: ListItem[] = [
		{
			name: 'National Chengchi University',
			location: 'Taipei, Taiwan',
			content: 'Master of Management Information Systems',
			footnote: '2006 ~ 2008'
		},
		{
			name: 'National Chengchi University',
			location: 'Taipei, Taiwan',
			content: 'Bachelor of Public Finance',
			footnote: '2002 ~ 2006'
		},
		{
			name: 'Taipei Municipal Chenggong High School',
			location: 'Taipei, Taiwan',
			footnote: '1999 ~ 2002'
		}
	];

	const clubList: ListItem[] = [
		{
			name: 'Computing Club',
			location: 'Chenggong High School',
			content: 'Visual Basic Education Oficer',
			footnote: '2000 ~ 2002'
		}
	];

	const certList: ListItem[] = [
		{
			name: 'Arduino Certification Program',
			content: 'Arduino Fundamentals Certification on Electronics and Physical Computing',
			link: '/experience/cb9fe1b6-a805-443c-914e-06d69bd1ba7c.pdf'
		}
	];
</script>

<List list={professionalList} title="Professional Experience" />
<p>
	<span class="small"
		>*Note: See <kbd>Competencies</kbd> for my available skills and <kbd>Links</kbd> for my full résumés.</span
	>
</p>
<br /><br />
<List list={educationList} title="Education" />
<p>
	<span class="small"
		>*Note: <kbd>Public Finance</kbd> focuses on government tax, accounting and financial policies, which
		is quite different from private sector banking and finance, and for which I had no interest at all.</span
	>
</p>
<br /><br />
<List list={clubList} title="Club" />
<br /><br />
<List list={certList} title="Certification" />
