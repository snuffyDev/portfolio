import { browser } from '$app/environment';
import { readable, type StartStopNotifier, type Subscriber } from 'svelte/store';

function mediaQuery(query: string): StartStopNotifier<boolean> {
	return (set: Subscriber<boolean>) => {
		let stop = () => {};
		if (browser) {
			const media = window.matchMedia(query);
			const updateStoreValue = () => set(media.matches);
			media.addEventListener('change', updateStoreValue);
			updateStoreValue();
			stop = () => media.removeEventListener('change', updateStoreValue);
		}
		return stop;
	};
}

export const isSmallViewport = readable(false, mediaQuery('screen and (max-width: 639px'));
export const isLargeViewport = readable(false, mediaQuery('screen and (min-width: 640px'));
