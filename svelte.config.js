import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({ scss: { enabled: true, renderSync: true }, sass: false }),

	kit: {
		adapter: adapter(),
		prerender: { enabled: true }
	}
};

export default config;
