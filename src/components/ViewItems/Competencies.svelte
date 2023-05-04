<script lang="ts">
	import type { ListItem } from '../../data/Types';
	import List from '../utils/List.svelte';

	const softwareList: ListItem[] = [
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

	const generalSkillsList: ListItem[] = [
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
