<!-- Script -->
<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '../theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar, Avatar } from '@skeletonlabs/skeleton';
	import Logo from '$lib/Images/logo.png';
	import { APP_NAME } from '../lib/global';

	import { LOGGED_IN, USER_ROLE } from '../lib/global';

	let currentUserRole: string;
	USER_ROLE.subscribe((value) => {
		currentUserRole = value;
	});

	let isLoggedIn: boolean;
	LOGGED_IN.subscribe((value) => {
		isLoggedIn = value;
	});

	function handleLogout() {
		LOGGED_IN.set(false);
	}
</script>

<!-- HTML -->
<AppShell>
	<!-- Page Header -->
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/"><Avatar src={Logo} width="w-10" rounded="rounded-full" /></a>
			</svelte:fragment>
			<strong class="text-xl uppercase">{APP_NAME}</strong>
			<svelte:fragment slot="trail">
				<!-- AppBar links -->
				{#if $LOGGED_IN}
					Hello, {$USER_ROLE}
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!--AppBar-->

	{#if isLoggedIn}
		<AppBar>
			<svelte:fragment slot="trail">
				<li><a href="/home">Home</a></li>
				<li><a href="/products">Browse Products</a></li>
				<li><a href="/requests">Request Products</a></li>
				{#if currentUserRole === 'Owner' || currentUserRole === 'Employee'}
					<li><a href="/add-products">Add Products</a></li>
				{/if}
				{#if currentUserRole === 'Owner'}
					<li><a href="/add-employees">Add Employees</a></li>
				{/if}
				<li><a href="/profile-home">Profile</a></li>
				<li><a href="/" on:click={handleLogout}>Logout</a></li>
			</svelte:fragment>
		</AppBar>
	{/if}

	<!-- Router Slot -->
	<slot />
	<!-- Page Footer -->
	<svelte:fragment slot="footer">
		<AppBar>
			{APP_NAME} | 2023 | This Website was made possible thanks to
			<a class="anchor" href="https://kit.svelte.dev">SvelteKit</a>,
			<a class="anchor" href="https://www.skeleton.dev">SkeletonUI</a> and
			<a class="anchor" href="https://supabase.com">Supabase</a>
		</AppBar>
	</svelte:fragment>
</AppShell>
