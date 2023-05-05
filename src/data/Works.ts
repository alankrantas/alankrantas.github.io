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
			'MicroPython',
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
		imgUrl: '/work/microbit.jpg'
	},
	{
		id: id++,
		name: 'My First micro:bit Maker Guide: micro:bit Plus Thunder:bit',
		description:
			"micro:bit x Thunder:bit：孩子的第一本創客指南; Taiwan Coding Education Association, Nov 2019. Thunder:bit is a micro:bit expansion board deeply inspired by Kitronik's Motor Driver Board and Kittenbot's Robot:bit.",
		category: ['Programming', 'Embedded Programming', 'STEM Education'],
		language: ['Traditional Chinese'],
		imgUrl: '/work/thunderbit.jpg'
	},
	{
		id: id++,
		name: 'Web 2.0 meta-architecture analysis incorporated into UML requirements modeling: By the Case of ETF platform',
		description:
			'結合UML需求塑模的Web2.0後設架構分析─以ETF平台為例; 2008. My master thesis at National Chengchi University.',
		category: ['Web 2.0', 'Thesis'],
		language: ['English'],
		imgUrl: '/work/thesis.jpg',
		link: 'https://www.beyond-coding.org.tw/index.php?option=com_sppagebuilder&view=page&id=71'
	}
];

export const makerWorks: WorkItem[] = [
	{
		id: id++,
		name: 'TinyML: Live Image Classification on ESP32-CAM and TFT',
		description:
			'A hand-held device that can display the captured image and its classification directly on a 160x128 ST7725 TFT LCD color display. The model is MobileNet v1 trained on Edge Impulse. Model inferring time is 2.6 seconds per image.',
		category: ['Embedded Programming', 'Arduino', 'Machine Learning', 'Deep Learning', 'TinyML'],
		language: ['English'],
		imgUrl: '/work/espcam.jpg',
		link: 'https://github.com/alankrantas/edge-impulse-esp32-cam-image-classification'
	},
	{
		id: id++,
		name: 'The Falcon Audio Visualizer',
		description:
			'Convert a 2004 Hasbro Millennium Falcon toy set into a fully-functional Bluetooth player/audio visualizer with TinyGo and 45 NeoPixel color LEDs.',
		category: ['Embedded Programming', 'TinyGo', 'Audio'],
		language: ['English'],
		imgUrl: '/work/falcon.jpg',
		link: 'https://www.hackster.io/alankrantas/the-falcon-audio-visualizer-a-tinygo-project-260360'
	},
	{
		id: id++,
		name: 'Practical, WiFi-Calibrated Mini Wall Clock',
		description:
			"An accurate $20 DIY clock with beautiful effects made with ESP8266 and MircoPython. It's running on my room wall for many years.",
		category: ['Embedded Programming', 'MicroPython', 'Internet of Things', 'MicroPython'],
		language: ['English'],
		imgUrl: '/work/clock.jpg',
		link: 'https://medium.com/@alankrantas/how-i-made-a-totally-practical-wifi-calibrated-mini-wall-clock-for-20-47ec3bb7542'
	},
	{
		id: id++,
		name: "X'mas Music Box",
		description:
			'A simple, decorated MP3 player housing in a off-the-shelf wood cabin model using a SAMD51 microcontroller and CircuitPython.',
		category: ['Embedded Programming', 'CircuitPython', 'Audio', 'MP3'],
		language: ['English'],
		imgUrl: '/work/xmas.jpg',
		link: 'https://www.hackster.io/alankrantas/x-mas-music-box-super-simple-circuitpython-mp3-player-262381'
	},
	{
		id: id++,
		name: 'MetroWatch - Heat & UVI Edition',
		description:
			'Basically a wearable IoT mix applications inspired by the watch in the game Metro Exidus. It can measure apparent temperature and ultraviolet index (UVI).',
		category: ['Embedded Programming', 'Arduino', 'Internet of Things'],
		language: ['English'],
		imgUrl: '/work/metro.jpg',
		link: 'https://www.hackster.io/alankrantas/x-mas-music-box-super-simple-circuitpython-mp3-player-262381'
	},
	{
		id: id++,
		name: 'Retro FM Radio',
		description:
			'A simple radio built inside an off-the-shelf wooden retro-radio style smartphone rack using ESP8266, a TEA5767 radio module, a 0.5 watt speaker and MicroPython.',
		category: ['Embedded Programming', 'MicroPython', 'Audio', 'Radio'],
		language: ['English'],
		imgUrl: '/work/radio.jpg',
		link: 'https://www.hackster.io/alankrantas/retro-fm-radio-with-tea5767-and-wemos-d1-mini-38e24c'
	},
	{
		id: id++,
		name: 'Simple Kerbal Space Program Controller',
		description:
			'Custom controller built with an Arduino Leonardo (as a keyboard emulator) that have 18 different switches. Tested on Kerbal Space Program 1.',
		category: ['Embedded Programming', 'Arduino', 'Keyboard'],
		language: ['English'],
		imgUrl: '/work/kerbal.jpg',
		link: 'https://www.hackster.io/alankrantas/a-simple-kerbal-space-program-arduino-leonardo-controller-95704c'
	},
	{
		id: id++,
		name: 'DIY Mini Breakout Arcade',
		description: 'A simple Breakout-like arcade built with ESP32 and MicroPython.',
		category: ['Embedded Programming', 'MicroPython', 'Game'],
		language: ['English'],
		imgUrl: '/work/arcade.jpg',
		link: 'https://www.hackster.io/alankrantas/diy-micropython-arcade-esp32-413d9e'
	},
	{
		id: id++,
		name: 'Raspberry Pi Zero Flash Action Cam',
		description:
			'Make an action camera in a vintage flash unit with Raspberry Pi Zero and camera module. Can mount on any hot shoes and record 12-second videos in a USB stick.',
		category: ['Embedded Programming', 'Python', 'Camera'],
		language: ['English'],
		imgUrl: '/work/picam.jpg',
		link: 'https://www.hackster.io/alankrantas/retro-fm-radio-with-tea5767-and-wemos-d1-mini-38e24c'
	}
];

export const codeWorks: ListItem[] = [
	{
		name: 'LOC Documentation',
		content:
			"FST Network's official user documentation and a code tool for Logic Operating Centre (LOC) built on React-based Docusaurus 2.",
		footnote:
			"I'm the creator and currently the sole maintainer. The repo is private from general viewers.",
		language: ['English'],
		category: ['Documentation', 'Content Writing', 'Front-end', 'JavaScript', 'TypeScript'],
		link: 'https://documentation.loc.fst.network/'
	},
	{
		name: 'Svelte/Golang Full-Stack Demo App',
		content:
			'A monolithic full-stack shopping app with its own database inspired by the book Essential TypeScript.',
		category: ['Full-stack', 'JavaScript', 'TypeScript', 'Golang'],
		link: 'https://github.com/alankrantas/svelteapp-typescript-go'
	},
	{
		name: 'MicroPython Driver for TEA5767 FM Radio Module',
		content:
			'A radio driver that works much better than existing Arduino drivers utilizing features documented in the data sheet. A CircuitPython version is also available.',
		category: ['Embedded Programming', 'MicroPython'],
		link: 'https://github.com/alankrantas/micropython-TEA5767'
	},
	{
		name: 'SEFR Multiclass Classifier',
		content:
			'The first multi-class classifier implementation based on SEFR, a fast linear-time binary classifier designed for model training on low-powered microcontrollers.',
		category: ['Embedded Programming', 'Arduino', 'MicroPython', 'Machine Learning', 'TinyML'],
		link: 'https://github.com/alankrantas/micropython-TEA5767'
	},
	{
		name: 'MakeCode Editor Extension for Nexus:bit and NexusBot',
		content:
			'A MakeCode editor extension (written in TypeScript) for operating the micro:bit expansion board, Nexus:bit (a KittenBot Robot:bit clone) and Nexusbot (an OTTO robot-clone). Supports three languages.',
		footnote:
			'My former boss changed the author name to his after I left, however you can still find my name in the source code (including the original repo he forked).',
		language: ['English'],
		category: ['STEM', 'micro:bit', 'MakeCode', 'TypeScript', 'Robotic'],
		link: 'https://makecode.microbit.org/pkg/beyond-coding-tw/pxt-nexusbot'
	}
];

export const techArticleWorks: ListItem[] = [
	{
		name: 'Data Mesh: A Paradigm Shift to Make Your Data Great Again',
		language: ['English'],
		category: ['Data', 'Data Mesh'],
		link: 'https://www.fst.network/post/data-mesh'
	},
	{
		name: "A Brief History of Google's Kubernetes and Why It's Fantastic",
		language: ['English'],
		category: ['Cloud', 'Container', 'Kubernetes'],
		link: 'https://medium.com/fstnetwork/a-brief-history-of-googles-kubernetes-and-why-it-s-fantastic-658ad4248e3'
	},
	{
		name: "Trying Out Kubernete's Gateway API (Beta) — Using Contour with Kind",
		language: ['English'],
		category: ['Cloud', 'Container', 'Kubernetes'],
		link: 'https://alankrantas.medium.com/trying-out-kubernetes-gateway-api-beta-using-contour-with-kind-b5a6491096c1'
	},
	{
		name: 'KMeans: the Unsupervised Learning Algorithm to Find K Classes in Data. What Exactly Is It Useful For?',
		content:
			'KMeans：能從資料中找出 K 個分類的非監督式機器學習演算法 — — 所以它到底有啥用？（使用 scikit-learn 與 Python）',
		language: ['Traditional Chinese'],
		category: ['Data Science', 'Machine Learning'],
		link: 'https://medium.com/fstnetwork/a-brief-history-of-googles-kubernetes-and-why-it-s-fantastic-658ad4248e3'
	},
	{
		name: 'No-Code TinyML: Using Edge Impulse to Train a Embedded AI Model for Voice Recognition on Arduino Nano 33 BLE Sense',
		content:
			'圖形化 TinyML：使用 Edge Impulse 網站訓練嵌入式 AI 模型，免寫半行程式在 Arduino Nano 33 BLE Sense 開發板實現語音辨識',
		language: ['Traditional Chinese'],
		category: [
			'Embedded Programming',
			'Data Science',
			'Machine Learning',
			'Deep Learning',
			'TinyML'
		],
		link: 'https://alankrantas.medium.com/%E5%9C%96%E5%BD%A2%E5%8C%96-tinyml-%E7%94%A8-edge-impulse-%E7%B6%B2%E7%AB%99%E8%A8%93%E7%B7%B4%E5%B5%8C%E5%85%A5%E5%BC%8F-ai-%E6%A8%A1%E5%9E%8B-%E5%85%8D%E5%AF%AB%E5%8D%8A%E8%A1%8C%E7%A8%8B%E5%BC%8F%E5%9C%A8-arduino-nano-33-ble-sense-%E9%96%8B%E7%99%BC%E6%9D%BF%E5%AF%A6%E7%8F%BE%E8%AA%9E%E9%9F%B3%E8%BE%A8%E8%AD%98-6e4c16b08310'
	},
	{
		name: "Understanding Raspberry Pi's PIO (Programmed I/O) with MicroPython and pioasm Module",
		content: '白話解密 Raspberry Pi Pico 的 PIO（Programmed I/O） — — 使用 MicroPython 撰寫 pioasm',
		language: ['Traditional Chinese'],
		category: ['Embedded Programming'],
		link: 'https://alankrantas.medium.com/%E7%99%BD%E8%A9%B1%E8%A7%A3%E5%AF%86-raspberry-pi-pico-%E7%9A%84-pio-programmed-i-o-%E4%BD%BF%E7%94%A8-micropython-%E6%92%B0%E5%AF%AB-pioasm-part-i-e801a161cf98'
	}
];

export const bookArticleWorks: ListItem[] = [
	{
		name: "An Brief Introduction to Ursula K. Le Guin's Ekumen Series",
		content: '淺談勒瑰恩的瀚星系列; The Affairs, May 2020',
		language: ['Traditional Chinese'],
		category: ['Column', 'Book Review', 'Science Fiction'],
		link: 'https://www.theaffairs.com/%e6%b7%ba%e8%ab%87%e5%8b%92%e7%91%b0%e6%81%a9%e7%9a%84%e7%80%9a%e6%98%9f%e7%b3%bb%e5%88%97/'
	},
	{
		name: 'The Dark Grim Dream Realm of Neil Gaiman',
		content: '尼爾‧蓋曼的黑色夢境王國; The Affairs, May 2020',
		language: ['Traditional Chinese'],
		category: ['Column', 'Book Review', 'Fantasy'],
		link: 'https://www.theaffairs.com/%e5%b0%bc%e7%88%be%e2%80%a7%e8%93%8b%e6%9b%bc%e7%9a%84%e9%bb%91%e8%89%b2%e5%a4%a2%e5%a2%83%e7%8e%8b%e5%9c%8b/'
	},
	{
		name: 'The Secret History of Star Wars That You May Not Know',
		content: '那些年，你也許不知道的星戰黑歷史; The Affairs, May 2020',
		language: ['Traditional Chinese'],
		category: ['Column', 'Book Review', 'Movie', 'Science Fiction'],
		link: 'https://www.theaffairs.com/%e9%82%a3%e4%ba%9b%e5%b9%b4%ef%bc%8c%e4%bd%a0%e4%b9%9f%e8%a8%b1%e4%b8%8d%e7%9f%a5%e9%81%93%e7%9a%84%e6%98%9f%e6%88%b0%e9%bb%91%e6%ad%b7%e5%8f%b2/'
	}
];
