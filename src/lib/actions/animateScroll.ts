export function animateScroll(node: HTMLElement) {
	const previousSibling = node.nextElementSibling!;
	let observer: IntersectionObserver;

	let once = false;
	function handleIntersection(entries: IntersectionObserverEntry[]) {
		if (!entries[0].isIntersecting && !once) {
			once = true;
			node.style.cssText = "--background-opacity: 1; --duration: 600ms; --delay: 600ms; --easing: ease-out;";
		} else if (once === true) {
			once = false;
			node.style.cssText = "--background-opacity: 0; --duration: 300ms;--delay: 600ms; --easing: ease-in-out;";
		}
	}

	if (IntersectionObserver) {
		observer = new IntersectionObserver(handleIntersection);
		observer.observe(previousSibling);
	}
	return {
		destroy: () => {
			if (observer) {
				observer.disconnect();
			}
		},
	};
}
