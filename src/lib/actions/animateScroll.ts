export function animateScroll(node: HTMLElement) {
	const previousSibling = node.previousElementSibling!;
	let observer: IntersectionObserver;

	let once = false;
	function handleIntersection(entries: IntersectionObserverEntry[]) {
		if (!entries[0].isIntersecting && !once) {
			once = true;
			node.style.cssText = "--background-opacity: 1; --duration: 160ms; --easing: ease-out;";
		} else if (once === true) {
			once = false;
			node.style.cssText = "--background-opacity: 0; --duration: 80ms; --easing: cubic-bezier(0.19, 1, 0.22, 1);";
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
