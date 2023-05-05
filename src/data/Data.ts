import type { ViewItem, ListItem } from './Types';

export const name = 'Alan Wang';
export const title = 'Technical Writer';
export const location = 'Taipei, Taiwan';
export const industry = 'software industry';

export const viewItems: ViewItem[] = [
	{
		id: 0,
		name: 'About Me',
		description: `${name}, a ${title} working in the ${industry} | he/him | short bio | facts`,
		imgUrl: '/main/about-me.jpg'
	},
	{
		id: 1,
		name: 'Career & SKills',
		description:
			'Programming | STEM education | translating and publishing | technical content writing',
		imgUrl: '/main/skills.jpg'
	},
	{
		id: 2,
		name: 'Portfolio',
		description:
			'Editorial, authored and translated works | Maker projects | programming projects | articles',
		imgUrl: '/main/works.jpg'
	},
	{
		id: 3,
		name: 'Links & About',
		description: 'Contact information | external resources | social media | about this site',
		imgUrl: '/main/links.jpg'
	}
];

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
		content: 'Pao-Hsiang Wang (王寶翔)'
	},
	{
		name: 'Nationality',
		content: 'Taiwan (R.O.C.)'
	},
	{
		name: 'Year of birth',
		content: `1984 (age ${getAge()})`,
		footnote: 'The age is auto-updated'
	},
	{
		name: 'Gender',
		content: 'Male ♂'
	},
	{
		name: 'Height',
		content: '178 cm (5′ 10″)'
	},
	{
		name: 'Blood type',
		content: 'A'
	},
	{
		name: 'Zodiac sign',
		content: 'Pisces ♓'
	},
	{
		name: 'Myers-Briggs Type Indicator (MBTI)',
		content: 'ISTJ',
		footnote: '(The Investigator/Inspector/Logistician)'
	},
	{
		name: 'Marital status',
		content: 'Single/unmarried',
		footnote: "I'm heterosexual. I'm free for a cpu of coffee... 😊"
	}
];

export const hobbiesList: ListItem[] = [
	{
		name: 'Movies & TV shows',
		content: 'Almost anything except scary or non-sci-fi horror films. Disney+ and Netflix addict.'
	},
	{
		name: 'Music',
		content: 'Classical, soundtracks, sometimes some jazz and western.',
		footnote: "Actually I've learned amateur classical piano for 20+ years."
	},
	{
		name: 'Books',
		content:
			'Mostly science fiction, fantasy with a few literature/non-fiction. I read ebooks on commute.'
	},
	{
		name: 'Coffee',
		content: 'A cup or two black coffee always make my day.'
	},
	{
		name: 'Photography',
		content:
			'Mostly film photography in 35mm or 120 still films, sometimes in digital. Had shot Polaroid/instax mini instant films.'
	},
	{
		name: 'City sightseeing',
		content:
			"I'm deeply interested in visiting and photographing historical sites. I can even give you a tour around Taipei and New Taipei City."
	},
	{
		name: 'Maker projects',
		content: 'Building fun interactive physical computing devices.'
	}
];

export const professionalList: ListItem[] = [
	{
		name: 'Technical Marketing Writer',
		content: 'FST Network Co., Ltd.',
		location: 'Taipei, Taiwan',
		footnote: 'Apr 2022 ~ Present',
		category: ['Software', 'Developer', 'Content Writing', 'Technical Writing']
	},
	{
		name: 'Editor/Product Development Engineer',
		content: 'Flag Publishing Co., Ltd.',
		location: 'Taipei, Taiwan',
		footnote: 'Aug 2019 ~ Mar 2022',
		category: ['Software', 'Education', 'Content Writing', 'Technical Writing']
	},
	{
		name: 'STEM Content Writer',
		content: 'Taiwan Coding Education Association',
		location: 'Taipei, Taiwan',
		footnote: 'May 2018 ~ Jul 2019',
		category: ['Software', 'Education', 'Content Writing']
	},
	{
		name: 'Book Translator',
		content: 'Freelance Translator',
		location: 'Taipei, Taiwan',
		footnote: 'Oct 2011 ~ Apr 2018',
		category: ['Translating', 'Content Writing']
	},
	{
		name: 'J2EE Web Programmer',
		content: 'MiTAC Information Technology Crop.',
		location: 'Taipei, Taiwan',
		footnote: 'Oct Aug 2008 ~ Oct 2011',
		category: ['Software', 'Developer']
	}
];

export const educationList: ListItem[] = [
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

export const clubList: ListItem[] = [
	{
		name: 'Visual Basic Education Oficer',
		content: 'Computing Club',
		location: 'Chenggong High School',
		footnote: '2000 ~ 2002'
	}
];

export const certList: ListItem[] = [
	{
		name: 'Arduino Fundamentals Certification on Electronics and Physical Computing',
		content: 'Arduino Certification Program',
		link: '/experience/cb9fe1b6-a805-443c-914e-06d69bd1ba7c.pdf'
	}
];

export const softwareList: ListItem[] = [
	{
		name: 'Programming languages',
		content:
			'Python (advanced), JavaScript (intermediate), Golang (intermediate), TypeScript (intermediate), C/C++ (beginner), Rust (preliminary)'
	},
	{
		name: 'Embedded programming languages',
		content: 'Arduino C++, micro:bit MakeCode Blockly, MicroPython, CircuitPython, TinyGo',
		footnote: 'Have contributed a few open sourced hardware drivers for various languages.'
	},
	{
		name: 'Front-end frameworks',
		content: 'React.js, Vue.js, Svelte/SvelteKit, Solid.js/SolidStart, Docusaurus, Bootstrap'
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
			'Proficient in full-English reading/writing; professional translation between English and Traditional Chinese'
	},
	{
		name: 'Technical/marketing content writing',
		content:
			'Write and revise software-related technical content for education, reference or marketing purposes'
	},
	{
		name: 'Photography & video making',
		content:
			'Amateur digital and analog film photography; basic knowledge for using camera hardwares; videos shooting; photo and video editing'
	},
	{
		name: 'Maker projects/electronics prototyping',
		content:
			'Design and create Raspberry Pi or 8-bit/32-bit microcontroller-based devices; use of soldering guns; identify sensor modules and read datasheet'
	}
];

export const linkList: ListItem[] = [
	{
		name: 'krantas@gmail.com',
		link: 'mailto:krantas@gmail.com',
		linkedTitle: true
	},
	{
		name: 'alan.wang@fstk.io',
		content: 'Work email at FST Network',
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
		footnote: "For film photography purpose. You won't see me here",
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

export const siteTechList: ListItem[] = [
	{
		name: 'Svelte 3',
		content: 'Component framework',
		link: 'https://svelte.dev/',
		linkedTitle: true
	},
	{
		name: 'SvelteKit',
		content: 'Application framework',
		link: 'https://kit.svelte.dev/',
		linkedTitle: true
	},
	{
		name: '@sveltejs/adapter-static',
		content: 'SSG (static-site generation)',
		link: 'https://kit.svelte.dev/docs/adapter-static',
		linkedTitle: true
	},
	{
		name: 'Bootstrap 5',
		content: 'CSS library',
		link: 'https://getbootstrap.com/',
		linkedTitle: true
	},
	{
		name: 'svelte-simple-modal',
		content: 'Svelte modal component',
		footnote: "Used for the protfolio showcases since Bootstrap components won't work for Svelte",
		link: 'https://www.npmjs.com/package/svelte-simple-modal',
		linkedTitle: true
	},
	{
		name: 'Fontsource',
		content: 'Font library (NPM package form of Google Fonts)',
		link: 'https://fontsource.org/',
		linkedTitle: true
	},
	{
		name: 'Unsplash',
		content: 'Free images',
		link: 'https://unsplash.com/',
		linkedTitle: true
	},
	{
		name: 'SVG Repo',
		content: 'Favicon icon',
		link: 'https://www.svgrepo.com/',
		linkedTitle: true
	},
	{
		name: 'Github Actions',
		content: 'CI (continuous integration)',
		link: 'https://docs.github.com/en/actions',
		linkedTitle: true
	},
	{
		name: 'Github Pages',
		content: 'Website hosting',
		link: 'https://pages.github.com/',
		linkedTitle: true
	}
];
