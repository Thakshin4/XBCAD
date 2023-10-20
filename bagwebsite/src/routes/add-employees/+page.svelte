<!-- Script -->
<script>
	import { AppBar } from '@skeletonlabs/skeleton';

	let userRole = '';

	let name = '';
	let email = '';
	let password = '';

	let msg = '';

	// Add Employee
	async function addEmployee() {}
</script>

<!-- HTML -->
<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Add Employee</h1>

		<!-- Form for adding Farmer -->
		<div class="card p-4">
			<form on:submit|preventDefault={addEmployee}>
				<label for="label">Email:</label><br />
				<input class="input" type="text" id="email" bind:value={email} /><br /><br />

				<label for="label">Password:</label><br />
				<input class="input" type="text" id="password" bind:value={password} /><br /><br />

				<label for="name">Name:</label><br />
				<input class="input" type="text" id="name" bind:value={name} />
			</form>
		</div>
		<div>
			{msg}
		</div>
		<div>
			<button type="button" class="btn variant-filled" on:click={addEmployee}>Submit</button>
		</div>
	</div>
</div>
