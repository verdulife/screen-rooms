<script>
	import { Rooms } from '$lib/stores';

	export let data;
	const { rooms } = data;
	$Rooms = rooms;
</script>

<main class="viewport">
	<slot />
</main>

<style global lang="postcss">
	@import '../lib/layout-classes/all.css';
</style>
