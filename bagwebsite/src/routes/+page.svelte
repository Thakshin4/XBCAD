<!-- Script -->
<script>
	import { APP_NAME, LOGGED_IN } from '../lib/global';
	import { goto } from '$app/navigation';

	function goToLoginPage() {
		goto('/login');
	}
	function goToRegisterPage() {
		goto('/register');
	}
</script>

<!-- HTML -->
<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Welcome to {APP_NAME}!</h1>
		<div class="card">
			<header class="card-header">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</header>
		</div>
		<div>
			{#if !$LOGGED_IN}
				<button type="button" class="btn variant-filled" on:click={goToLoginPage}> Login </button>
				<button type="button" class="btn variant-filled" on:click={goToRegisterPage}>
					Register
				</button>
			{/if}
		</div>
	</div>
</div>
