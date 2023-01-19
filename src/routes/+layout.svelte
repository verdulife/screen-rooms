<script>
	import '$lib/layout-classes/all.css';
	import { Rooms } from '$lib/stores';

	export let data;
	const { rooms } = data;
	$Rooms = rooms;
</script>

<main class="viewport">
	<slot />
</main>

<style lang="postcss">
	main {
		background-color: var(--c-neutral-900);
		color: var(--c-neutral);
	}
</style>
