<script lang="ts">
	import GitHub from '$lib/assets/icons/GitHub.svelte';
	import type { Project } from '$lib/types/project';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{ click: { idx: number } }>();

	export let content: Project;
	export let idx: number;
	export let active = false;
</script>

<article on:click={() => dispatch('click', { idx })}>
	<div class="card-image" style="--aspect-ratio: {content?.thumbnail?.aspect_ratio};">
		<div class="thumbnail-container">
			<div class="thumbnail">
				<img
					src={content?.thumbnail?.img_url}
					alt={content?.short_description}
					loading="lazy"
					decoding="sync"
				/>
			</div>
		</div>
		<div class="card-info">
			<span class="h4"><slot name="title" /></span>
			<div class="description">
				<slot name="description" />
			</div>
		</div>
	</div>

	<div class="card-links">
		<slot name="github" />
	</div>
</article>

<style src="./index.scss" lang="scss">
</style>
