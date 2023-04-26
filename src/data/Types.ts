export interface ViewItem {
	id: number;
	name: string;
	description?: string;
	imgUrl?: string;
}

export interface WorkItem extends ViewItem {
	subName?: string;
	publisher?: string;
	date?: string;
	category?: string;
	language?: string;
	link?: string;
}

export interface ListItem {
	name: string;
	location?: string;
	content?: string;
	link?: string;
	linkedContent?: boolean;
	footnote?: string;
}
