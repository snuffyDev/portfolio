<script lang="ts">
	import GitHub from '$lib/assets/icons/GitHub.svelte';
	import Link from '$lib/assets/icons/Link.svelte';
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
			<div class="resp-content-width" style="display: flex; justify-content: space-around;">
				<a
					href={project.github_url}
					target="_blank"
					rel="noopener noreferrer"
					on:click|stopPropagation={() => {}}
					><button aria-label="{project.name} GitHub Repository" class="is-translucent"
						><GitHub /> Repository</button
					></a
				>
				<a
					href={project.demo_url}
					target="_blank"
					rel="noopener noreferrer"
					on:click|stopPropagation={() => {}}
					><button aria-label="{project.name} Demo" class="is-translucent"><Link /> Demo</button></a
				>
			</div>
		</Section>
	</div>
</div>

<style src="./index.scss" lang="scss">
</style>
