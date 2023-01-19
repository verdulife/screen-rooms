<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Rooms } from '$lib/stores';

	let files;
	let room = {
		id: $Rooms.length + 1
	};

	const { id } = $page.params;
	if (id) room = $Rooms.find((r) => r.id == id);

	function processImage() {
		let [file] = files;
		const reader = new FileReader();

		reader.readAsDataURL(file);
		reader.onload = () => {
			room.content = reader.result;
		};
	}

	function goHome() {
		goto('/');
	}

	function contentIsImage() {
		const { content } = room;
		return !content.includes('.jpg') && !content.includes('base64');
	}

	async function uploadRoom() {
		const res = await fetch('/edit-room', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify($Rooms)
		});

		return await res.json();
	}

	async function addRoom() {
		if (!id) room.created = new Date();

		const rooms = $Rooms.filter((r) => r.id != room.id);
		$Rooms = [...rooms, room].sort((a, b) => a.id - b.id);
		const { done } = await uploadRoom();

		if (done) goHome();
		else alert('Algo ha salido mal. Vuelve a intentarlo');
	}

	async function deleteRoom() {
		const check = confirm('⚠ ¿Deseas borrar la habitación?');
		if (!check) return;

		$Rooms = $Rooms.filter((r) => r.id != id);
		const { done } = await uploadRoom();

		if (done) goHome();
	}

	$: if (files) processImage();
</script>

<section class="col acenter xfill">
	<form class="col xfill" autocomplete="off" on:submit|preventDefault={addRoom}>
		<h1>Datos habitación</h1>

		<div class="input-wrapper col xfill">
			<label for="id">Número</label>
			<input
				class="underline -900 xfill"
				type="number"
				id="id"
				bind:value={room.id}
				placeholder="ej. 1"
				required
			/>
		</div>

		<div class="input-wrapper col xfill">
			<label for="name">Nombre</label>
			<input
				class="underline -900 xfill"
				type="text"
				id="name"
				bind:value={room.name}
				placeholder=" ej. Sala de conferencias"
				required
			/>
		</div>

		<div class="input-wrapper col xfill">
			<label for="type">Tipo de contenido</label>
			<select class="underline -900 xfill" id="type" bind:value={room.type} required>
				<option value="" disabled>Selecciona un tipo</option>
				<option value="text">Texto</option>
				<option value="image">Imágen</option>
			</select>
		</div>

		{#if room.type === 'text'}
			<div class="input-wrapper col xfill">
				<label for="content">Nombre</label>
				<input
					class="underline -900 xfill"
					type="text"
					id="content"
					bind:value={room.content}
					placeholder=" ej. Sala de conferencias"
					required
				/>
			</div>
		{/if}

		{#if room.type === 'image'}
			<div class="input-wrapper col xfill">
				<label for="file">Nombre</label>
				<input type="file" accept="image/jpeg" id="file" bind:files required={contentIsImage()} />
			</div>
		{/if}

		<footer class="row xfill">
			<button class="accent round">Guardar cambios</button>
			<button type="button" class="accent outline round" on:click={goHome}>Cancelar</button>

			{#if id}
				<button type="button" class="delete-btn alt round" on:click={deleteRoom}>
					Borrar habitación
				</button>
			{/if}
		</footer>
	</form>
</section>

<style lang="postcss">
	section {
		padding: 4em;
	}

	form {
		max-width: 900px;
		gap: 2em;
		background-color: var(--c-neutral-200);
		padding: 2em;
	}

	footer {
		gap: 1em;
	}

	.delete-btn {
		margin-left: auto;
	}
</style>
