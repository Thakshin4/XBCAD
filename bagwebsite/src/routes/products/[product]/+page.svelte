<!-- Script -->
<script>
	import { getProductById } from '../../../API/supabaseAPI';
	import { onMount } from 'svelte';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';

	export let data;

	let id = data.data.product;
	/**
	 * @type {{ name: any; image_path: any; description: any; price: number; category: any; } | null}
	 */
	let product = null;
	let isLoading = true;

	onMount(async () => {
		const { data, error } = await getProductById(id);

		if (error) {
			// Handle the error, for example, display an error message
			console.error(error);
		} else {
			product = data;
		}
		isLoading = false;
	});

	function addToCart() {}
</script>

<!-- HTML -->
<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		{#if isLoading}
			<ProgressRadial value={undefined} />
		{:else if product}
			<h1 class="h1">{product.name}</h1>
			<div class="card p-4">
				<img src={product.image_path} alt={product.name} class="product-image" />
				<p class="text-sm">{product.description}</p>
				<p class="text-lg font-bold text-primary-500">${product.price.toFixed(2)}</p>
				<p class="text-sm text-gray-500">{product.category}</p>
				<button type="button" class="btn variant-ghost-primary m-4" on:click={addToCart}>
					Add to Cart
				</button>
			</div>
		{/if}
	</div>
</div>

<!-- CSS -->
<style>
	/* Define the CSS class for the product images */
	.product-image {
		max-width: 200px; /* Set the maximum width */
		height: auto; /* Maintain the aspect ratio */
		display: block; /* Remove extra space below the image */
		margin: 0 auto; /* Center the image horizontally */
	}
</style>
