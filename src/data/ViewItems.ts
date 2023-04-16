import { name, title } from './NameTitle';

export interface ViewItem {
	id: number;
	name: string;
	description?: string | null;
	imgUrl?: string | null;
}

let id = 0;

export const ViewItems: ViewItem[] = [
	{
		id: id++,
		name: `About Me`,
		description: `${name}, a ${title} working in the software industry | he/him | short bio | interests`,
		imgUrl: '/main/about-me.jpg'
	},
	{
		id: id++,
		name: 'Experience',
		description: 'Programming | STEM education | translating and publishing | technical writing',
		imgUrl: '/main/experience.jpg'
	},
	{
		id: id++,
		name: 'Competencies',
		description:
			'Frontend, backend & cloud technologies | professional translating | content writing',
		imgUrl: '/main/skills.jpg'
	},
	{
		id: id++,
		name: 'Portfolio',
		description: 'Authored and translated books | blog posts | documentation | Maker projects',
		imgUrl: '/main/works.jpg'
	},
	{
		id: id++,
		name: 'Links',
		description: 'Email | Facebook | Linkedin | blogs | Instagram | Github repos | Misc',
		imgUrl: '/main/links.jpg'
	},
	{
		id: id++,
		name: 'About Site',
		description: 'A little bit details of how I built and deploy this site 😸',
		imgUrl: '/main/about.jpg'
	}
];
