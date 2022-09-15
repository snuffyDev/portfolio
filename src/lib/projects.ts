import type { Project } from "$lib/types/project";
import { BEATBUMP_IMAGES, FavifetchURL, FlatlistURL, FavifetchJSON } from "./assets/images";

export const projects: Project[] = [
	{
		name: "Beatbump",
		id: "beatbump",
		short_description: "An alternative, privacy-respecting YouTube Music frontend",
		github_url: "https://github.com/snuffyDev/Beatbump",
		description: `Beatbump is a privacy-respecting, self-hosted alternative frontend for YouTube Music.\n\n<br/><b>Tech used</b><ul>\n <li>SvelteKit</li> <li>TypeScript</li> <li>SCSS</li>\n</ul>There are two audio streaming proxy-servers which instance owners can choose to use: one using TypeScript/Deno, or one written in Rust.`,
		demo_url: "https://beatbump.ml",
		thumbnail: {
			img_url: "https://i.ibb.co/dtjjH0S/Web-capture-10-9-2022-111913-beatbump-ml.jpg",
			aspect_ratio: "16/9",
		},
		images: BEATBUMP_IMAGES,
	},
	{
		name: "Svelte Flatlist",
		id: "svelte-flatlist",
		short_description: "A draggable, customizable, mobile-friendly menu that's simple and easy to use.",
		github_url: "https://github.com/snuffyDev/svelte-flatlist",
		demo_url: "https://svelte-flatlist.netlify.app/",
		description: `A simple mobile-friendly draggable drawer component for Svelte`,
		thumbnail: { img_url: "https://i.ibb.co/s1nDwmT/image.png", aspect_ratio: "1/1" },
		images: [FlatlistURL],
	},
	{
		id: "favifetch",
		github_url: "https://github.com/snuffyDev/Favifetch",
		thumbnail: { img_url: FavifetchJSON, aspect_ratio: "16/9" },
		name: "Favifetch",
		description:
			"Attempts to extract the icon(s) for any website, as well as the Web App Manifest.<br/>Built with TypeScript, deployed to Cloudflare Workers.",
		short_description: "A web app icon & manifest fetcher API.",
		demo_url: "https://favifetch.beatbump.workers.dev/",
		images: [FavifetchURL, FavifetchJSON],
	},
];
