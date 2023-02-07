export interface Project {
	name: string;
	description: string;
	link?: string;
	github?: string;
	stack: Stack[];
	image: string;
	category: string;
	featured?: boolean;
	cta: string;
	blurb: string;
	recording?: string;
	screenshots?: Screenshot[];
	priority: number;
	icon?: string;
}

export interface Stack {
	name: string;
}

export interface Screenshot {
	image: string;
}
