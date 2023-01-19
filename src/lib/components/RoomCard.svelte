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
				<Image width="100%" height="100%" src={content} alt={name} />
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

		width: 400px;
		height: 350px;
		border: 1px solid var(--c-neutral-800);
		border-radius: 0.5em;
		box-shadow: 0 20px 20px -20px var(--c-neutral-800);
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
		gap: 1em;
		padding: 0 1em;
		border-top: 1px solid var(--c-neutral-800);
		overflow: hidden;

		& span {
			background-color: var(--c-alt);
			color: var(--c-neutral);
			font-size: 26px;
			border-radius: 0.25em;
			padding: 0.25em 0.75em;
		}

		& h3 {
			font-size: 1.5em;
		}

		& small {
			font-size: 14px;
			color: var(--c-neutral-400);
		}
	}
</style>
