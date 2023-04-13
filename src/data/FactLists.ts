export interface FactItem {
	name: string;
	location?: string;
	content?: string;
	footnote?: string;
	link?: string;
}

const getAge = () => {
	const now = new Date();
	const birth = new Date('10 Mar 1984 12:00:00 GMT+8');
	return Math.floor(
		(now.getMonth() - birth.getMonth() + 12 * (now.getFullYear() - birth.getFullYear())) / 12
	);
};

export const personalFacts: FactItem[] = [
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

export const professionalFacts: FactItem[] = [
	{
		name: 'FST Network Co., Ltd.',
		location: 'Taipei, Taiwan',
		content: 'Technical Marketing Writer',
		footnote: 'Apr 2022 ~ Present'
	},
	{
		name: 'Flag Publishing Co., Ltd.',
		location: 'Taipei, Taiwan',
		content: 'Editor/Product Development Engineer',
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
		content: 'Translator',
		footnote: 'Oct 2011 ~ Apr 2018'
	},
	{
		name: 'MiTAC Information Technology Crop.',
		location: 'Taipei, Taiwan',
		content: 'Java Web Programmer',
		footnote: 'Oct Aug 2008 ~ Oct 2011'
	}
];

export const educationFacts: FactItem[] = [
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

export const clubFacts: FactItem[] = [
	{
		name: 'Computing Club',
		location: 'Chenggong High School',
		content: 'Visual Basic Education Oficer',
		footnote: '2000 ~ 2002'
	}
];

export const certFacts: FactItem[] = [
	{
		name: 'Arduino Certification Program',
		content: 'Arduino Fundamentals Certification on Electronics and Physical Computing',
		link: '/experience/cb9fe1b6-a805-443c-914e-06d69bd1ba7c.pdf'
	}
];
