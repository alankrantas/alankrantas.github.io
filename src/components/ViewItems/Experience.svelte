<script lang="ts">
	import type { ListItem } from '../../data/Types';
	import List from '../utils/List.svelte';

	const professionalList: ListItem[] = [
		{
			name: 'Technical Marketing Writer',
			content: 'FST Network Co., Ltd.',
			location: 'Taipei, Taiwan',
			footnote: 'Apr 2022 ~ Present'
		},
		{
			name: 'Editor/Product Development Engineer',
			content: 'Flag Publishing Co., Ltd.',
			location: 'Taipei, Taiwan',
			footnote: 'Aug 2019 ~ Mar 2022'
		},
		{
			name: 'STEM Content Writer',
			content: 'Taiwan Coding Education Association',
			location: 'Taipei, Taiwan',
			footnote: 'May 2018 ~ Jul 2019'
		},
		{
			name: 'Book Translator',
			content: 'Freelance Translator',
			location: 'Taipei, Taiwan',
			footnote: 'Oct 2011 ~ Apr 2018'
		},
		{
			name: 'J2EE Web Programmer',
			content: 'MiTAC Information Technology Crop.',
			location: 'Taipei, Taiwan',
			footnote: 'Oct Aug 2008 ~ Oct 2011'
		}
	];

	const educationList: ListItem[] = [
		{
			name: 'Master of Management Information Systems',
			content: 'National Chengchi University',
			location: 'Taipei, Taiwan',
			footnote: '2006 ~ 2008'
		},
		{
			name: 'Bachelor of Public Finance',
			content: 'National Chengchi University',
			location: 'Taipei, Taiwan',
			footnote: '2002 ~ 2006'
		},
		{
			name: 'High School',
			content: 'Taipei Municipal Chenggong High School',
			location: 'Taipei, Taiwan',
			footnote: '1999 ~ 2002'
		}
	];

	const clubList: ListItem[] = [
		{
			name: 'Visual Basic Education Oficer',
			content: 'Computing Club',
			location: 'Chenggong High School',
			footnote: '2000 ~ 2002'
		}
	];

	const certList: ListItem[] = [
		{
			name: 'Arduino Fundamentals Certification on Electronics and Physical Computing',
			content: 'Arduino Certification Program',
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
<p>
	<br />
</p>
<p class="text-center">
	<img src="/about-me/work.jpg" width="550px" alt="work" class="rounded-5 p-2 m-2" />
	<br />
	<span class="small codetext-white-50">FST Network office's common area (before relocated).</span>
</p>
<p>
	<br />
</p>
<p>
	<List list={educationList} title="Education" />
</p>
<p>
	<span class="small"
		>*Note: <kbd>Public Finance</kbd> focuses on government tax, accounting and financial policies, which
		is quite different from private sector banking and finance, and for which I had no interest at all.</span
	>
</p>
<p>
	<br />
</p>
<p>
	<List list={clubList} title="Club" />
</p>
<p>
	<br />
</p>
<p>
	<List list={certList} title="Certification" />
</p>
