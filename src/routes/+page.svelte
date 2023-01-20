<script>
	import { Rooms } from '$lib/stores';
	import RoomCard from '../lib/components/RoomCard.svelte';
</script>

<div class="scroll">
	<section class="col fill">
		<ul class="row jcenter xfill">
			{#each $Rooms as room}
				<li>
					<RoomCard {room} />
				</li>
			{/each}
			<li>
				<a href="/edit-room">
					<article class="col fcenter">
						<h1><b>+</b></h1>
						<h4>Añadir habitación</h4>
					</article>
				</a>
			</li>
		</ul>
	</section>
</div>

<style lang="postcss">
	section {
		padding: 4em;
	}

	ul {
		gap: 1em;
	}

	a {
		color: var(--c-neutral);
	}

	article {
		width: 40vmax;
		max-width: 350px;
		aspect-ratio: 3/2.5;
		border: 1px solid var(--c-neutral-800);
		border-radius: 0.25em;
		box-shadow: 0 0 20px -20px var(--c-neutral-800);
		overflow: hidden;
		transition: 150ms;

		&:hover {
			box-shadow: 0 0 50px -20px var(--c-accent-800);
		}
	}
</style>
