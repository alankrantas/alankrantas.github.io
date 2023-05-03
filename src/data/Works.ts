import type { ListItem, WorkItem } from './Types';

let id = 0;
export const editorialWorks: WorkItem[] = [
	{
		id: id++,
		name: 'Essential TypeScript: From Beginner to Pro',
		description: `TypeScript 邁向專家之路：零基礎 JavaScript 打通 Angular、React 與 Vue.js 前端框架實戰; Adam Freeman, 2019; Flag Publishing, Nov 2021. A comprehensive learning book for getting into modern front-end development.`,
		category: [
			'Translation',
			'Programming',
			'JavaScript',
			'TypeScript',
			'Angular',
			'React',
			'Vue.js'
		],
		language: ['Traditional Chinese'],
		imgUrl: '/work/ts.jpg',
		link: 'https://www.flag.com.tw/books/product/F1485'
	},
	{
		id: id++,
		name: 'The The Go Workshop: Learn to Write Clean, Efficient Code and Build High-performance Applications with Go',
		description:
			'完全自學！Go 語言 (Golang) 實戰聖經; Delio D\'Anna, Andrew Hayes, Sam Hennessy, Jeremy Leasor, Gobin Sougrakpam, Daniel Szabo, 2019; Flag Publishing, Jul 2021. The first "modern" Golang book in Taiwan.',
		category: ['Translation', 'Programming', 'Golang'],
		language: ['Traditional Chinese'],
		imgUrl: '/work/go.jpg',
		link: 'https://www.flag.com.tw/books/product/F1741'
	},
	{
		id: id++,
		name: 'Automated Machine Learning with AutoKeras: Deep learning made accessible for everyone with just few lines of coding',
		description:
			'AutoML 自動化機器學習：用 AutoKeras 超輕鬆打造高效能 AI 模型; Luis Sobrecueva, 2021; Flag Publishing, Dec 2021. The first AutoML book in Taiwan; IT bookstore bestseller.',
		category: [
			'Translation',
			'Programming',
			'Python',
			'Machine Learning',
			'Deep Learning',
			'AutoML'
		],
		language: ['Traditional Chinese'],
		imgUrl: '/work/automl.jpg',
		link: 'https://www.flag.com.tw/books/product/F1385'
	},
	{
		id: id++,
		name: 'Raspberry Pi 4: Python + AI Complete Application Bible',
		description:
			'Raspberry Pi 樹莓派：Python x AI 超應用聖經; 陳會安, 2021; Flag Publishing, Jan 2022. Tons of examples of Maker and machine learning projects to do on a Raspberry Pi 4B. IT bookstore bestseller.',
		category: ['Programming', 'Python', 'Machine Learning', 'Embedded programming', 'Maker'],
		language: ['Traditional Chinese'],
		imgUrl: '/work/rpi.jpg',
		link: 'https://www.flag.com.tw/books/product/F1786'
	},
	{
		id: id++,
		name: 'Python Workout: 50 Ten-minute Exercises',
		description:
			'Python 刷題鍛鍊班：老手都刷過的 50 道程式題, 求職面試最給力; Reuven M. Lerner, 2020; Flag Publishing, Jul 2021. Tricks and tips to write Pythonic code.',
		category: ['Translation', 'Programming', 'Python'],
		language: ['Traditional Chinese'],
		imgUrl: '/work/workout.jpg',
		link: 'https://www.flag.com.tw/books/product/F1750'
	},
	{
		id: id++,
		name: 'Python Tricks: A Buffet of Awesome Python Features',
		description:
			'Python 神乎其技 全新超譯版 - 快速精通 Python 進階功能, 寫出 Pythonic 的程式; Dan Bader, 2017; Flag Publishing, Jul 2021. Also tricks and tips to write Pythonic code.',
		category: ['Translation', 'Programming', 'Python'],
		language: ['Traditional Chinese'],
		imgUrl: '/work/trick.jpg',
		link: 'https://www.flag.com.tw/books/product/FT746A'
	},
	{
		id: id++,
		name: 'Pythonで動かして学ぶ！あたらしい深層学習の教科書 機械学習の基本から深層学習まで',
		description:
			'必學！Python 資料科學‧機器學習最強套件 － NumPy、Pandas、Matplotlib、OpenCV、scikit-learn、tf.Keras; Reuven M. 石川 聡彦, 2018; Flag Publishing, Apr 2021. A guide for common Python data science and machine learning packages.',
		category: [
			'Translation',
			'Programming',
			'Python',
			'Data Science',
			'Machine Learning',
			'Deep Learning'
		],
		language: ['Traditional Chinese'],
		imgUrl: '/work/ml.jpg',
		link: 'https://www.flag.com.tw/books/product/F1378'
	}
];

export const authoredWorks: WorkItem[] = [
	{
		id: id++,
		name: 'The Python Book for Interdisciplinary Learning',
		description:
			'跨領域學 Python：資料科學基礎養成; Flag Publishing, Nov 2020. A Python and data science/mechine learning introduction written for readers with almost no programming background.',
		category: ['Programming', 'Python', 'Data Science', 'Machine Learning'],
		language: ['Traditional Chinese'],
		imgUrl: '/work/learn.jpg',
		link: 'https://www.flag.com.tw/books/product/F0753'
	},
	{
		id: id++,
		name: "Flag's Maker Workshop: Using Smart Cloud Sensors with Python",
		description:
			"Flag's 創客‧自造者工作坊 - Python 感測器大應用 - 智慧生活X雲端; Flag Publishing, Mar 2020. Examples building IoT-related projects with ESP8266 microcontroller (all materials are included).",
		category: [
			'Translation',
			'Programming',
			'Python',
			'Embedded Programming',
			'Internet of Things'
		],
		language: ['Traditional Chinese'],
		imgUrl: '/work/sensor.jpg',
		link: 'https://www.flag.com.tw/books/product/FM622A'
	},
	{
		id: id++,
		name: 'My First micro:bit Programming Book',
		description:
			'孩子的第一本micro:bit程式學習書; Taiwan Coding Education Association, Sep 2019. The BBC micro:bit is a microcontroller with graphical code editors designed for STEM purpose from 2016.',
		category: ['Programming', 'Embedded Programming', 'STEM Education'],
		language: ['Traditional Chinese'],
		imgUrl: '/work/microbit.jpg',
		link: 'https://www.beyond-coding.org.tw/index.php?option=com_sppagebuilder&view=page&id=61'
	},
	{
		id: id++,
		name: 'My First micro:bit Maker Guide: micro:bit Plus Thunder:bit',
		description:
			"micro:bit x Thunder:bit：孩子的第一本創客指南; Taiwan Coding Education Association, Nov 2019. Thunder:bit is a micro:bit expansion board deeply inspired by Kitronik's Motor Driver Board and Kittenbot's Robot:bit.",
		category: ['Programming', 'Embedded Programming', 'STEM Education'],
		language: ['Traditional Chinese'],
		imgUrl: '/work/thunderbit.jpg',
		link: 'https://www.beyond-coding.org.tw/index.php?option=com_sppagebuilder&view=page&id=71'
	}
];

export const programmingWorks: ListItem[] = [
	{
		name: 'LOC Documentation',
		content: "FST Network's official user documentation for Logic Operating Centre (LOC)",
		footnote:
			"Built with React and Docusaurus 2.0; deployed on Amazon ECS; I'm the creator and sole maintainer",
		language: ['English'],
		category: ['Documentation', 'Content Writing', 'Front-end', 'JavaScript', 'TypeScript'],
		link: 'https://documentation.loc.fst.network/'
	},
	{
		name: 'svelteapp-typescript-go',
		content: 'A Svelte Demo Web App with Golang Backend Service and SQLite',
		footnote: 'Built with Svelte, SvelteKit and Golang; a full-stack app in a single container',
		category: ['Front-end', 'JavaScript', 'TypeScript'],
		link: 'https://github.com/alankrantas/svelteapp-typescript-go'
	},
	{
		name: 'micropython-TEA5767',
		content: 'MicroPython Driver for TEA5767 FM Radio Module',
		footnote: 'Built with MicroPython (for ESP8266, ESP32, Raspberry Pi Pico, etc.)',
		category: ['Embedded Programming', 'Python'],
		link: 'https://github.com/alankrantas/micropython-TEA5767'
	},
	{
		name: 'edge-impulse-esp32-cam-image-classification',
		content:
			'Live Image Classification on ESP32-CAM and ST7735 TFT using MobileNet v1 from Edge Impulse',
		footnote:
			'Built with Arduino C++ and Tensorflow Lite Micro; the first TinyML demo without using WiFi for photos',
		category: ['Embedded Programming', 'Machine Learning', 'Deep Learning', 'TinyML'],
		link: 'https://github.com/alankrantas/edge-impulse-esp32-cam-image-classification'
	},
	{
		name: 'colab-python-cookbooks',
		content: 'Python, Data Science & AutoML cookbooks in Google Colaboratory',
		footnote: 'Mostly using AutoKeras and FLAML',
		category: ['Machine Learning', 'Deep Learning', 'Python'],
		link: 'https://github.com/alankrantas/colab-python-cookbooks'
	}
];
