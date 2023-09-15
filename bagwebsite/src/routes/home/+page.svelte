<!-- Script -->
<script>
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- HTML -->
<AppBar>
	<svelte:fragment slot="trail">
		<li><a href="/home">Home</a></li>
		<li><a href="/products">Browse Products</a></li>
		<li><a href="/requests">Request Products</a></li>
		<li><a href="/">Logout</a></li>
	</svelte:fragment>
</AppBar>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Home Page</h1>

		<div class="card p-4">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</div>
	</div>
</div>
