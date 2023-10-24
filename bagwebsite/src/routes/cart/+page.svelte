<!-- Script -->
<script>
   	import { SHOPPING_CART } from '../../lib/global'; 
       let shopping_cart;
    SHOPPING_CART.subscribe((value) => {
        shopping_cart = value;
    });
</script>

{SHOPPING_CART}