import { writable } from 'svelte/store';
import { persistBrowserSession } from '@macfja/svelte-persistent-store';

// Create your Svelte stores
export const LOGGED_IN = writable(false);
export const USER_ROLE = writable('Owner');

// Use the persistBrowserSession function to make them persist in session storage
export const PERSIST_LOGGED_IN = persistBrowserSession(LOGGED_IN, 'LOGGED_IN');
export const PERSIST_USER_ROLE = persistBrowserSession(USER_ROLE, 'USER_ROLE');

export const APP_NAME = 'App Name';
