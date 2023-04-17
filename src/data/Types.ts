export interface ViewItem {
	id: number;
	name: string;
	description?: string | null;
	imgUrl?: string | null;
}

export interface ListItem {
	name: string;
	location?: string;
	content?: string;
	link?: string;
	linkedContent?: boolean;
	footnote?: string;
}
