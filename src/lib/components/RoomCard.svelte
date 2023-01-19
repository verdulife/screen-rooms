<script>
	import { formatDate } from '$lib/utils';
	import Image from '$lib/components/Image.svelte';

	export let room;
	const { id, type, content, name, created } = room;
</script>

<a href="/edit-room{id}">
	<article id="{name}-{id}">
		<section class="col fcenter xfill">
			{#if type === 'text'}
				<h1 class="tcenter">{content}</h1>
			{:else}
				<Image width="100%" height="100%" src={content} alt={name} />
			{/if}
		</section>
		<footer class="col jcenter xfill">
			<h3 class="clamp">#{id} - {name}</h3>
			<small class="clamp">{formatDate(created)}</small>
		</footer>
	</article>
</a>

<style lang="postcss">
	a {
		color: var(--c-neutral-900);
	}

	article {
		--footer-h: 80px;

		cursor: pointer;
		width: 400px;
		height: 350px;
		border: 1px solid var(--c-neutral-400);
		border-radius: 0.5em;
		box-shadow: 0 20px 20px -20px var(--c-neutral-400);
		overflow: hidden;
	}

	section {
		height: calc(100% - var(--footer-h));
		background-color: var(--c-neutral-900);
		overflow: hidden;
		user-select: none;

		& h1 {
			color: var(--c-neutral);
			font-size: 50px;
			line-height: 1;
		}
	}

	footer {
		height: var(--footer-h);
		padding: 1em;
		overflow: hidden;

		& h3 {
			font-size: 1.5em;
		}
	}
</style>
