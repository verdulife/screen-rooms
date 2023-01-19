<script>
	import Image from '$lib/components/Image.svelte';

	export let data;
	let room;

	$: if (data.room) {
		room = data.room;
	}
</script>

{#if room}
	<main id={room.id} class="col fcenter fill">
		{#if room.type === 'text'}
			<h1 class="tcenter">{room.content}</h1>
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
