<!-- Script -->
<script>
	import { getAllProducts } from '../../API/supabaseAPI'; // Import the function from your supabaseAPI

	let products = []; // Initialize an empty array to store the products

	// Load products when the page is initialized
	import { onMount } from 'svelte';
	onMount(async () => {
		const { data, error } = await getAllProducts();
		if (data) {
			products = data;
		} else {
			console.error('Error fetching products:', error);
		}
	});
</script>

<!-- HTML -->
<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Products</h1>

		<div class="container mx-auto">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
				{#each products as product (product.product_id)}
					<a href={`/products/${product.product_id}`} class="product-link">
						<div class="p-4 border rounded-lg">
							<h2 class="text-xl font-semibold">{product.name}</h2>
							<img src={product.image_path} alt={product.name} class="product-image" />
							<p class="text-sm">{product.description}</p>
							<p class="text-lg font-bold text-green-600">${product.price.toFixed(2)}</p>
							<p class="text-sm text-gray-500">{product.category}</p>
						</div>
					</a>
				{/each}
			</div>

			{#if products.length === 0}
				<p class="text-center mt-4">No products available.</p>
			{/if}
		</div>
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

	/* Define the CSS class for the product links */
	.product-link {
		text-decoration: none; /* Remove the default underline */
		color: inherit; /* Inherit the parent text color */
		cursor: pointer; /* Show a pointer cursor on hover */
	}
</style>
