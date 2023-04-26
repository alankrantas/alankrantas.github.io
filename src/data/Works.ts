import type { WorkItem } from './Types';

let id = 0;
export const editorialWorks: WorkItem[] = [
	{
		id: id++,
		name: 'Raspberry Pi 4: Python + AI Complete Application Bible',
		subName: 'Raspberry Pi 樹莓派：Python x AI 超應用聖經',
		description: '陳會安 / 2021',
		publisher: 'Flag Publishing',
		date: 'Jan 2022',
		category: 'Programming: Python, machine learning, embedded',
		language: 'Traditional Chinese',
		link: 'https://www.flag.com.tw/books/product/F1786',
		imgUrl: '/work/rpi.jpg'
	},
	{
		id: id++,
		name: 'Automated Machine Learning with AutoKeras: Deep learning made accessible for everyone with just few lines of coding',
		subName: 'AutoML 自動化機器學習：用 AutoKeras 超輕鬆打造高效能 AI 模型',
		description: 'Luis Sobrecueva / 2021',
		publisher: 'Flag Publishing',
		date: 'Dec 2021',
		category: 'Programming: Python, machine learning, AutoML',
		language: 'Traditional Chinese',
		link: 'https://www.flag.com.tw/books/product/F1385',
		imgUrl: '/work/automl.jpg'
	},
	{
		id: id++,
		name: 'Essential TypeScript: From Beginner to Pro',
		subName:
			'TypeScript 邁向專家之路：零基礎 JavaScript 打通 Angular、React 與 Vue.js 前端框架實戰',
		description: 'Adam Freeman / 2019',
		publisher: 'Flag Publishing',
		date: 'Nov 2021',
		category: 'JProgramming: avaScript, TypeScript, Angular, React, Vue.js',
		language: 'Traditional Chinese',
		link: 'https://www.flag.com.tw/books/product/F1485',
		imgUrl: '/work/ts.jpg'
	},
	{
		id: id++,
		name: 'The The Go Workshop: Learn to Write Clean, Efficient Code and Build High-performance Applications with Go',
		subName: '完全自學！Go 語言 (Golang) 實戰聖經',
		description:
			"Delio D'Anna, Andrew Hayes, Sam Hennessy, Jeremy Leasor, Gobin Sougrakpam, Daniel Szabo / 2019",
		publisher: 'Flag Publishing',
		date: 'Jul 2021',
		category: 'Programming: Golang',
		language: 'Traditional Chinese',
		link: 'https://www.flag.com.tw/books/product/F1741',
		imgUrl: '/work/go.jpg'
	},
	{
		id: id++,
		name: 'Python Workout: 50 Ten-minute Exercises',
		subName: 'Python 刷題鍛鍊班：老手都刷過的 50 道程式題, 求職面試最給力',
		description: 'Reuven M. Lerner / 2020',
		publisher: 'Flag Publishing',
		date: 'Jul 2021',
		category: 'Programming: Python',
		language: 'Traditional Chinese',
		link: 'https://www.flag.com.tw/books/product/F1750',
		imgUrl: '/work/workout.jpg'
	},
	{
		id: id++,
		name: 'Python Tricks: A Buffet of Awesome Python Features',
		subName: 'Python 刷題鍛鍊班：老手都刷過的 50 道程式題, 求職面試最給力',
		description: 'Dan Bader / 2017',
		publisher: 'Flag Publishing',
		date: 'Jul 2021',
		category: 'Programming: Python',
		language: 'Traditional Chinese',
		link: 'https://www.flag.com.tw/books/product/FT746A',
		imgUrl: '/work/trick.jpg'
	}
];
