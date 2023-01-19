<script>
	import { Rooms } from '$lib/stores';
	import RoomCard from '../lib/components/RoomCard.svelte';
</script>

<div class="scroll">
	<section class="col fill">
		<ul class="row xfill">
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
		color: var(--c-neutral-900);
	}

	article {
		cursor: pointer;
		width: 400px;
		height: 350px;
		background-color: var(--c-neutral-200);
		border: 1px solid var(--c-neutral-400);
		border-radius: 0.5em;
		box-shadow: 0 20px 20px -20px var(--c-neutral-400);
		overflow: hidden;
		user-select: none;
	}
</style>
