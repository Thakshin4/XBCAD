<!-- Script -->
<script>
	import { AppBar } from '@skeletonlabs/skeleton';

	let userRole = '';

	let name = '';

	let msg = '';

	// Add Employee
	async function addProducts() {}
</script>

<!-- HTML -->
<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Add Product</h1>

		<!-- Form for adding Product -->
		<div class="card p-4">
			<form on:submit|preventDefault={addProducts}>
				<label for="label">Name:</label><br />
				<input class="input" type="text" id="name" bind:value={name} /><br /><br />
			</form>
		</div>
		<div>
			{msg}
		</div>
		<div>
			<button type="button" class="btn variant-filled" on:click={addProducts}>Submit</button>
		</div>
	</div>
</div>
