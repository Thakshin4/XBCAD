<script>
	import { goto } from '$app/navigation';
	import { AppBar } from '@skeletonlabs/skeleton';
	let email = '';
	let password = '';
	let msg = '';

	// User login
	function handleLogin() {
		goto('/home');
	}
</script>

<!-- HTML -->
<AppBar>
	<svelte:fragment slot="trail">
		<li><a href="/home">Test Login as Customer</a></li>
		<li><a href="/add-product">Test Login as Employee</a></li>
		<li><a href="/add-product">Test Login as Owner</a></li>
	</svelte:fragment>
</AppBar>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Login</h1>

		<!-- Form for Login -->
		<div class="card p-4">
			<section class="p-4">
				<form on:submit|preventDefault={handleLogin}>
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
			<button type="button" class="btn variant-filled" on:click={handleLogin}>Login</button>
		</div>
	</div>
</div>
