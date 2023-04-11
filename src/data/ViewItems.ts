import { name, title, location } from './Bio';

type Items = 'About Me' | 'Experience' | 'Skills' | 'Works' | 'Hobbies';

export interface ViewItem {
	id: number;
	name: Items;
	description?: string;
	imgUrl?: string;
}

export const ViewItems: ViewItem[] = [
	{
		id: 0,
		name: 'About Me',
		description: `${name}, ${title} | he/him | based in ${location}`,
		imgUrl: '/main/about-me.jpg'
	},
	{
		id: 1,
		name: 'Experience',
		description: 'Software development | STEM education | translating and publishing',
		imgUrl: '/main/experience.jpg'
	},
	{
		id: 2,
		name: 'Skills',
		description: 'Software developing | professional translating | content writing',
		imgUrl: '/main/skills.jpg'
	},
	{
		id: 3,
		name: 'Works',
		description: 'Authored and translated books | blog posts | documentation | Maker projects',
		imgUrl: '/main/works.jpg'
	},
	{
		id: 4,
		name: 'Hobbies',
		description: 'Reading | music | movies and TV shows | PC gaming | coffee | film photography',
		imgUrl: '/main/hobbies.jpg'
	}
];
