import { writable } from 'svelte/store';	
	
export const LOGGED_IN = writable(false);
export const USER_ROLE = writable('Owner');