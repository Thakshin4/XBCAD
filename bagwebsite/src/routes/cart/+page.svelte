<!-- Script -->
<script>
	import { SHOPPING_CART } from '../../lib/global';
	// Get the contents of the shopping cart
	/**
	 * @type {{ productId: any; quantity: any; }[]}
	 */
	let cartContents;

	SHOPPING_CART.subscribe((cart) => {
		const contents = [];
		for (const [productId, quantity] of cart) {
			contents.push({ productId, quantity });
		}
		cartContents = contents;
	});
</script>

{#if cartContents}
	<h2>Shopping Cart Contents</h2>
	<ul>
		{#each cartContents as item (item.productId)}
			<li>Product ID: {item.productId}, Quantity: {item.quantity}</li>
		{/each}
	</ul>
{/if}
