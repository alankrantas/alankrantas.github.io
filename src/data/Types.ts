export interface ViewItem {
	id: number;
	name: string;
	description?: string;
	imgUrl: string;
}

export interface WorkItem extends ViewItem {
	loaded?: boolean;
	category: string[];
	language: string[];
	link?: string;
}

export interface ListItem {
	name: string;
	content?: string;
	location?: string;
	category?: string[];
	language?: string[];
	link?: string;
	linkedTitle?: boolean;
	footnote?: string;
}
