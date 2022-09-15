<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { fly } from 'svelte/transition';

	export let images: string[] = [];

	const length = images.length - 1;

	let currentIndex = 0;
	let direction = 1;
	$: current = images[currentIndex];
	let timer: number | null = null;
	const next = async () => {
		direction = 1;
		await tick();
		currentIndex = currentIndex >= length ? 0 : currentIndex + 1;
	};

	const previous = async () => {
		direction = -1;
		await tick();
		currentIndex = currentIndex <= 0 ? length : currentIndex - 1;
	};
</script>

<div class="carousel">
	<div class="image-container">
		<div class="" style="height:100%; max-height: inherit;">
			{#key current}
				<div
					class="image"
					in:fly|local={{ x: direction * 500, delay: 250, duration: 1000 }}
					out:fly|local={{ x: direction * (0 - 500), duration: 1000 }}
				>
					<img src={current} alt="Image number {currentIndex} of the preview carousel" />
				</div>
			{/key}
		</div>
	</div>
	<div class="carousel-controls">
		<button class="circle is-translucent-100" on:click={previous}>&lt;</button><span>
			{currentIndex + 1}/{length + 1}
		</span><button class="circle is-translucent-100" on:click={next}>&gt;</button>
	</div>
</div>

<style src="./index.scss" lang="scss">
</style>
