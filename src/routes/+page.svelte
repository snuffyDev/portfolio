<script lang="ts">
	import Section from '$lib/components/Section';
	import Group from '$lib/components/Group';
	import GitHub from '$lib/assets/icons/GitHub.svelte';
	import Heart from '$lib/assets/icons/Heart.svelte';

	import Card from '$lib/components/Card';
	import { projects } from '$lib/projects';
	import Nav from '$lib/components/Nav';
	import Modal from '$lib/components/Modal';
	import Link from '$lib/assets/icons/Link.svelte';

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

<svelte:head>
	<title>SnuffyDev - Open Source Developer</title>
	<meta name="title" content="SnuffyDev - Open Source Developer" />
	<meta name="description" content="Welcome to my portfolio! See what I've got to offer." />

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://snuffydev.ml/" />
	<meta property="og:title" content="SnuffyDev - Open Source Developer" />
	<meta property="og:description" content="Welcome to my portfolio! See what I've got to offer." />


	<meta property="twitter:url" content="https://snuffydev.ml/" />
	<meta property="twitter:title" content="SnuffyDev - Open Source Developer" />
	<meta
		property="twitter:description"
		content="Welcome to my portfolio! See what I've got to offer."
	/>
</svelte:head>
{#if isModalOpen}
	<Modal
		on:click={() => {
			isModalOpen = false;
		}}
		project={projects[contentIndex]}
	/>
{/if}
<Nav />
<div />
<Section>
	<Section>
		<h1>SnuffyDev</h1>
		<p class="h5 c-text-gray">Open-Source Developer</p>

		<Group gap={'0.8em'} row>
			<a href="https://github.com/snuffyDev" target="_blank" rel="no opener noreferrer"
				><button class="is-translucent"><GitHub /> GitHub</button></a
			>
			<a href="https://www.buymeacoffee.com/snuffydev" target="_blank" rel="no opener noreferrer"
				><button class="is-primary"><Heart /> Donate</button></a
			>
		</Group>
	</Section>
	<hr />
</Section>
<main>
	<Section>
		<a name="about" />
		<h2>About Me</h2>

		<p>Always looking to see what else I can accomplish next -</p>
		<p>
			I'm a self-taught Web and Software Developer with experience in TypeScript, HTML, JavaScript,
			Rust, and SCSS. I also am relearning C#, which I used in the past for game development.
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
									><GitHub /> GitHub</button
								></a
							>
						{/if}
						{#if project.github_url}
							<a
								href={project.demo_url}
								target="_blank"
								rel="noopener noreferrer"
								on:click|stopPropagation={() => {}}
								><button aria-label="{project.name} Demo" class="is-transparent"
									><Link /> Demo</button
								></a
							>
						{/if}
					</svelte:fragment>
				</Card>
			{/each}
		</Group>
	</Section>
</main>
