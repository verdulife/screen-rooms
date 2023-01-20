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
		background: radial-gradient(ellipse at top, var(--c-neutral-800), #000), radial-gradient(ellipse at bottom, var(--c-neutral-900), transparent),
			url(https://grainy-gradients.vercel.app/noise.svg);
		background-blend-mode: hard-light;
		color: var(--c-neutral);
	}
</style>
