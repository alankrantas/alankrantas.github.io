export interface ViewItem {
	id: number;
	name: string;
	description?: string;
	imgUrl: string;
}

export interface WorkItem extends ViewItem {
	category: string[];
	language: string[];
	link?: string;
}

export interface ListItem {
	name: string;
	location?: string;
	content?: string;
	category?: string[];
	language?: string[];
	link?: string;
	linkedContent?: boolean;
	footnote?: string;
}
