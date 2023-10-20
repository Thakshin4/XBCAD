<script>
	import { goto } from '$app/navigation';
	let name = '';
	let email = '';
	let password = '';
	let msg = '';

	// User login
	function handleRegister() {
		goto('/home');
	}
</script>

<!-- HTML -->

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Register</h1>

		<!-- Form for Login -->
		<div class="card p-4">
			<section class="p-4">
				<form on:submit|preventDefault={handleRegister}>
					<label for="label">Name:</label><br />
					<input class="input" type="text" id="name" bind:value={name} /><br /><br />

					<label for="label">Email:</label><br />
					<input class="input" type="text" id="email" bind:value={email} /><br /><br />

					<label for="label">Password:</label><br />
					<input class="input" type="password" id="password" bind:value={password} />
				</form>
			</section>
		</div>
		<div>
			{msg}
		</div>
		<div>
			<button type="button" class="btn variant-filled" on:click={handleRegister}>Register</button>
		</div>
	</div>
</div>
