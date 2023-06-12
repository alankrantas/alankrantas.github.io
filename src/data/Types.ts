export interface ViewItem {
	id: number;
	name: string;
	description: string;
	imgUrl: string;
}

export interface ListItem {
	name: string;
	description: string | null;
	location: string | null;
	footnote: string | null;
	category: string[] | null;
	language: string[] | null;
	link: string | null;
	linkedTitle: boolean;
}

export interface WorkItem {
	name: string;
	description: string | null;
	category: string[] | null;
	language: string[] | null;
	link: string | null;
	imgUrl: string;
	loaded: boolean;
}

export interface BuildLog {
	build_time: string | null;
	build_message: string | null;
}
