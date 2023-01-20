<script>
	import { formatDate } from '$lib/utils';
	import Image from '$lib/components/Image.svelte';

	export let room;
	const { id, type, content, name, created } = room;
</script>

<article id="{name}-{id}">
	<a href="/edit-room{id}">
		<section class="col fcenter xfill">
			{#if type === 'text'}
				<h1 class="tcenter">{content}</h1>
			{:else}
				<picture>
					<Image width="100%" height="100%" src={content} alt={name} />
				</picture>
			{/if}
		</section>
	</a>

	<footer class="row acenter xfill">
		<span>{id}</span>

		<aside class="col">
			<h3 class="clamp">
				<a href="/room{id}">{name}</a>
			</h3>
			<small class="clamp">{formatDate(created)}</small>
		</aside>
	</footer>
</article>

<style lang="postcss">
	a {
		color: var(--c-neutral);
	}

	article {
		--footer-h: 80px;

		width: 40vmax;
		max-width: 350px;
		aspect-ratio: 3/2.5;
		backdrop-filter: blur(10px);
		border: 1px solid var(--c-neutral-800);
		border-radius: 0.25em;
		box-shadow: 0 1px 6px #000;
		overflow: hidden;
		transition: 150ms;

		&:hover {
			box-shadow: 0 1px 6px #000, 0 0 40px -10px var(--c-accent-800);
		}

		&:active {
			transform: translateY(1px);
			border-color: var(--c-accent-900);
			box-shadow: 0 1px 2px #000, 0 0 40px -10px var(--c-accent-800);
		}
	}

	section {
		height: calc(100% - var(--footer-h));
		overflow: hidden;
		user-select: none;

		& h1 {
			color: var(--c-neutral);
			font-family: var(--f-text);
			font-size: clamp(20px, 5vw, 40px);
			line-height: 1;
			text-shadow: 0 0 10px var(--c-neutral-700);
		}

		& picture {
			width: calc(100% - 1em);
			border-radius: 0.1em;
			margin: 0.5em;
			overflow: hidden;
		}
	}

	footer {
		height: var(--footer-h);
		gap: 1em;
		padding: 0 1em;
		border-top: 1px solid var(--c-neutral-800);
		overflow: hidden;

		& span {
			background-color: var(--c-accent);
			color: var(--c-neutral-900);
			font-size: 26px;
			font-weight: bold;
			border-radius: 0.25em;
			padding: 0.25em 0.75em;
		}

		& h3 {
			font-size: 16px;
			text-transform: uppercase;
		}

		& small {
			font-family: var(--f-text);
			font-size: 12px;
			color: var(--c-neutral-400);
		}
	}
</style>
