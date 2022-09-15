<script lang="ts">
	import GitHub from '$lib/assets/icons/GitHub.svelte';
	import X from '$lib/assets/icons/X.svelte';
	import { isLargeViewport, isSmallViewport } from '$lib/stores/viewport';
	import type { Project } from '$lib/types/project';
	import { fade } from 'svelte/transition';
	import Section from '../Section';
	import ImageSlider from './ImageSlider';

	export let project: Project;
</script>

<div
	class="backdrop"
	on:click|self
	on:scroll|preventDefault={() => {}}
	transition:fade={{ duration: 300 }}
>
	<div class="modal" on:click|stopPropagation={() => {}}>
		<div class="resp-content-width mb-1 top-bar" title="Close Modal">
			<span class="x" on:click><X /></span>
		</div>
		<ImageSlider images={project.images} />
		<Section>
			{#if $isLargeViewport}
				<div class="mb-2">{@html project.description}</div>
			{/if}
			<div class="resp-content-width">
				<button class="is-translucent is-small" on:click><GitHub /> Repository</button>
			</div>
		</Section>
	</div>
</div>

<style src="./index.scss" lang="scss">
</style>
