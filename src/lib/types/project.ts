export interface Project {
	name: string;
	github_url: string;
	demo_url?: string;
	short_description: string;
	description: string;
	thumbnail?: {
		img_url: string;
		aspect_ratio: '1/1' | '16/9' | '9/16';
	};
	images?: string[];
	id: Lowercase<Project['name']>;
}
