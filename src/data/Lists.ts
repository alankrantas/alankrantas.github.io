export interface ListItem {
	name: string;
	location?: string;
	content?: string;
	link?: string;
	linkedContent?: boolean;
	footnote?: string;
}

const getAge = () => {
	const now = new Date();
	const birth = new Date('10 Mar 1984 12:00:00 GMT+8');
	return Math.floor(
		(now.getMonth() - birth.getMonth() + 12 * (now.getFullYear() - birth.getFullYear())) / 12
	);
};

export const personalList: ListItem[] = [
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

export const interestList: ListItem[] = [
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

export const professionalList: ListItem[] = [
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

export const educationList: ListItem[] = [
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

export const clubList: ListItem[] = [
	{
		name: 'Computing Club',
		location: 'Chenggong High School',
		content: 'Visual Basic Education Oficer',
		footnote: '2000 ~ 2002'
	}
];

export const certList: ListItem[] = [
	{
		name: 'Arduino Certification Program',
		content: 'Arduino Fundamentals Certification on Electronics and Physical Computing',
		link: '/experience/cb9fe1b6-a805-443c-914e-06d69bd1ba7c.pdf'
	}
];

export const softwareList: ListItem[] = [
	{
		name: 'Programming languages',
		content:
			'Python (advanced), JavaScript (intermediate), Golang (intermediate), TypeScript (proficient), C/C++ (proficient), Rust (preliminary)'
	},
	{
		name: 'Embedded programming languages',
		content: 'Arduino C++, micro:bit MakeCode, MicroPython, CircuitPython, TinyGo'
	},
	{
		name: 'Front-end frameworks',
		content: 'React.js, Docusaurus, Vue.js, Svelte/SvelteKit, Solid.js/SolidStart'
	},
	{
		name: 'Machine learning packages (mostly in Python)',
		content: 'Scikit-learn, Tensorflow/Tensorflow Lite/Tensorflow.js, several AutoML packages'
	},
	{
		name: 'Development tools/cloud and container',
		content:
			'VS Code, Node.js, Docker, DevContainer, Kubernetes (using minikube/Kind/Docker Desktop)'
	},
	{
		name: 'Operating systems',
		content: 'Windows, Linux (Debian on amd64/arm64/armf)'
	}
];

export const generalSkillsList: ListItem[] = [
	{
		name: 'English',
		content:
			'Intermediate to advanced; full-English writing; professional translation between English and Traditional Chinese'
	},
	{
		name: 'Technical/marketing content writing',
		content:
			'Write and revise software-related technical content for education, reference or marketing purposes'
	},
	{
		name: 'Photography & video making',
		content: 'Amateur digital and analog film photography; videos shooting; photo and video editing'
	},
	{
		name: 'Maker projects/electronics prototyping',
		content:
			'Design and create Raspberry Pi or microcontroller-based devices; use of soldering guns; identify sensor modules and read datasheet'
	}
];

export const linkList: ListItem[] = [
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

export const siteTechList: ListItem[] = [
	{
		name: 'Component framework',
		content: 'Svelte 3',
		link: 'https://svelte.dev/',
		linkedContent: true
	},
	{
		name: 'Application framework',
		content: 'SvelteKit',
		link: 'https://kit.svelte.dev/',
		linkedContent: true
	},
	{
		name: 'SSG (static-site generation)',
		content: '@sveltejs/adapter-static',
		link: 'https://kit.svelte.dev/docs/adapter-static',
		linkedContent: true
	},
	{
		name: 'CSS library',
		content: 'Bootstrap 5',
		link: 'https://svelte.dev/',
		linkedContent: true
	},
	{
		name: 'Font library',
		content: 'Fontsource',
		footnote: 'NPM package form of Google Fonts',
		link: 'https://fontsource.org/',
		linkedContent: true
	},
	{
		name: 'Free images',
		content: 'Unsplash',
		link: 'https://unsplash.com/',
		linkedContent: true
	},
	{
		name: 'Free icons',
		content: 'Flaticon.com',
		link: 'https://www.flaticon.com/',
		linkedContent: true
	},
	{
		name: 'CI (continuous integration)',
		content: 'Github Actions',
		link: 'https://docs.github.com/en/actions',
		linkedContent: true
	},
	{
		name: 'Website hosting',
		content: 'Github Pages',
		link: 'https://pages.github.com/',
		linkedContent: true
	},
	{
		name: 'Website source repository',
		footnote: 'Supports Dependabot, Docker and DevContainer',
		link: 'https://github.com/alankrantas/alankrantas.github.io'
	}
];
