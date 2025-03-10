// https://authjs.dev/reference/sveltekit#per-path

import { redirect, type Handle } from '@sveltejs/kit';
import { handle as authenticationHandle } from '$lib/auth';
import { sequence } from '@sveltejs/kit/hooks';

export const authorizationHandle: Handle = async ({ event, resolve }) => {
	// Protect any routes under /authenticated
	if (event.url.pathname.startsWith('/authenticated')) {
		const session = await event.locals.auth();
		if (!session) {
			// Redirect to the signin page
			redirect(303, '/');
		}
	}

	// If the request is still here, just proceed as normally
	return resolve(event);
}

// First handle authentication, then authorization
// Each function acts as a middleware, receiving the request handle
// And returning a handle which gets passed to the next function
export const handle: Handle = sequence(authenticationHandle, authorizationHandle)
