<script lang="ts">
	import { professionalList, educationList, clubList, certList } from '../../data/Lists';
	import List from '../List.svelte';
</script>

<br />
<List list={professionalList} title="Professional Experience" />
<p>
	<span class="small"
		>*Note: See <kbd>Competencies</kbd> for my available skills and <kbd>Links</kbd> for my full résumés.</span
	>
</p>
<br /><br />
<List list={educationList} title="Education" />
<p>
	<span class="small"
		>*Note: <kbd>Public Finance</kbd> focuses on government tax, accounting and financial policies, which
		is quite different from private sector banking and finance, and for which I had no interest at all.</span
	>
</p>
<br /><br />
<List list={clubList} title="Club" />
<br /><br />
<List list={certList} title="Certification" />
