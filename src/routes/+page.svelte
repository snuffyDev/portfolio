<script lang="ts">
	import Section from '$lib/components/Section';
	import Group from '$lib/components/Group';
	import GitHub from '$lib/assets/icons/GitHub.svelte';
	import Heart from '$lib/assets/icons/Heart.svelte';

	import Card from '$lib/components/Card';
	import { projects } from '$lib/projects';
	import Nav from '$lib/components/Nav';
	import Modal from '$lib/components/Modal';

	let isModalOpen = false;
	let contentIndex: number | null = null;

	function handleCardClick(event: CustomEvent<{ idx: number }>) {
		const { detail } = event;
		if (isModalOpen) {
			isModalOpen = false;
		}

		contentIndex = detail.idx;
		isModalOpen = true;
	}
</script>

{#if isModalOpen}
	<Modal
		on:click={() => {
			isModalOpen = false;
		}}
		project={projects[contentIndex]}
	/>
{/if}

<Section>
	<Section>
		<h1>SnuffyDev</h1>
		<p class="h5 c-text-gray">Open-Source Developer</p>

		<Group gap={'0.8em'} row>
			<a href="https://github.com/snuffyDev" target="_blank" rel="no opener noreferrer"
				><button class="is-translucent is-large"><GitHub /> GitHub</button></a
			>
			<a href="https://www.buymeacoffee.com/snuffydev" target="_blank" rel="no opener noreferrer"
				><button class="is-primary is-large"><Heart /> Donate</button></a
			>
		</Group>
	</Section>
	<hr />
</Section>
<Nav />
<main>
	<Section>
		<a name="about" />
		<h2>About Me</h2>

		<p>Always looking to see what else I can accomplish next -</p>
		<p>
			This page may be sparse in terms of content, but at least it looks good for around less than a
			day's worth of work!
		</p>
	</Section>
	<Section>
		<a name="projects" />
		<h2>Projects</h2>
		<p>Below you can find some of my work!</p>
		<Group gap="1em" row style="">
			{#each projects as project, idx (project.id)}
				<Card content={project} {idx} on:click={handleCardClick}>
					<svelte:fragment slot="title">{project.name}</svelte:fragment>
					<svelte:fragment slot="description">{project.short_description}</svelte:fragment>
					<svelte:fragment slot="github">
						{#if project.github_url}
							<a
								href={project.github_url}
								target="_blank"
								rel="noopener noreferrer"
								on:click|stopPropagation={() => {}}
								><button aria-label="{project.name} GitHub Repository" class="is-transparent"
									><GitHub /></button
								></a
							>
						{/if}
					</svelte:fragment>
				</Card>
			{/each}
		</Group>
	</Section>
</main>
