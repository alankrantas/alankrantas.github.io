<script lang="ts">
	import type { ListItem } from '../../data/Types';
	import List from '../utils/List.svelte';

	const softwareList: ListItem[] = [
		{
			name: 'Programming languages',
			content:
				'Python (advanced), JavaScript (intermediate), Golang (intermediate), TypeScript (proficient), C/C++ (proficient), Rust (preliminary)'
		},
		{
			name: 'Embedded programming languages',
			content: 'Arduino C++, micro:bit MakeCode, MicroPython, CircuitPython, TinyGo',
			footnote: 'Have contributed a few drivers for micro:bit, microPython and TinyGo'
		},
		{
			name: 'Front-end frameworks',
			content: 'React.js, Vue.js, Svelte/SvelteKit, Solid.js/SolidStart',
			footnote:
				'I use Docusaurus at work which is React-based and did wrote React components for it'
		},
		{
			name: 'Machine learning packages (mostly in Python)',
			content: 'Scikit-learn, Tensorflow/Tensorflow Lite/Tensorflow.js, several AutoML packages',
			footnote: 'Have practiced with a few Kaggle community competitions'
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

	const generalSkillsList: ListItem[] = [
		{
			name: 'English',
			content:
				'Intermediate to advanced; fluent full-English reading/writing; professional translation between English and Traditional Chinese'
		},
		{
			name: 'Technical/marketing content writing',
			content:
				'Write and revise software-related technical content for education, reference or marketing purposes',
			footnote: 'Used to write book review/introductions for publishers in my translator days'
		},
		{
			name: 'Photography & video making',
			content:
				'Amateur digital and analog film photography; basic knowledge for using camera hardwares; videos shooting; photo and video editing'
		},
		{
			name: 'Maker projects/electronics prototyping',
			content:
				'Design and create Raspberry Pi or 8-bit/32-bit microcontroller-based devices; use of soldering guns; identify sensor modules and read datasheet',
			footnote:
				'In fact I got sponsored twice for my own projects after made a bit of fame with these'
		}
	];
</script>

<List list={softwareList} title="Software Development Skills" />
<p>
	<span class="small"
		>*Note: I use Eclipse, Java and several MVC-based J2EE web frameworks (Struts 2, JavaServer
		Faces 2, Spring 3) in my first job but I no longer consider them as my work skills. I have once
		tried Spring Boot for creating testing micrcoservices recently and that's pretty about it.</span
	>
</p>
<p>
	<span class="small"
		>I also revisited Quick Basic and TinyBasic in order to rewrite a piece of code I wrote as a
		kid.</span
	>
</p>
<p>
	<span class="small">See <kbd>Portfolio</kbd> for my selection of programming works.</span>
</p>
<p>
	<br />
</p>
<p>
	<List list={generalSkillsList} title="General Skills" />
</p>
<p>
	<span class="small">*Note: see <kbd>Portfolio</kbd> for my list of published works.</span>
</p>
