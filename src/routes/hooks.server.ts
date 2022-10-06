import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	event.setHeaders({ "Access-Control-Allow-Origin": "*" });

	return await resolve(event);
};
