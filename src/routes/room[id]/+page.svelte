<script>
	import { page } from '$app/stores';
	import { Rooms } from '$lib/stores';
	import Image from '$lib/components/Image.svelte';

	const { id } = $page.params;
	const room = $Rooms.find((r) => r.id == id);
</script>

{#if room}
	<main id={room.id} class="col fcenter fill">
		{#if room.type === 'text'}
			<h1 class="text">{room.content}</h1>
		{:else}
			<Image width="100%" height="100%" src={room.content} alt={room.name} />
		{/if}
	</main>
{/if}

<style lang="postcss">
	main {
		background-color: var(--c-neutral-900);
		color: var(--c-neutral);

		& h1 {
			font-size: clamp(30px, 10vw, 20vh);
			line-height: 1.1;
			text-shadow: 0 0 30px var(--c-neutral-700);
			padding: 1em;
		}
	}
</style>
