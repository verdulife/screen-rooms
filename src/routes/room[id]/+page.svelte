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
			<h1>{room.content}</h1>
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
			padding: 1em;
		}
	}
</style>
