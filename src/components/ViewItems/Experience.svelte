<script lang="ts">
	import { professionalFacts, educationFacts, clubFacts, certFacts } from '../../data/FactLists';
	import List from '../List.svelte';
</script>

<br />
<List factList={professionalFacts} title="Professional Experience" />
<p>
	<span class="small"
		>*Note: I am not really a fan with Java or J2EE technologies. Nowadays we have better and
		efficient stuff to do the jobs.</span
	>
</p>
<br /><br />
<List factList={educationFacts} title="Education" />
<p>
	<span class="small"
		>*Note: Public Finance focuses on government tax and financial policies, which is quite
		different from private sector banking and finance.</span
	>
</p>
<br /><br />
<List factList={clubFacts} title="Club" />
<br /><br />
<List factList={certFacts} title="Certification" />
