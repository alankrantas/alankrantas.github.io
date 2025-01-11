export interface ViewItem {
	id: number;
	fileName: string;
	viewName: string;
	title: string;
	description: string;
	imgUrl: string;
}

interface BaseItem {
	name: string;
	description: string | null;
	category: string[] | null;
	language: string[] | null;
	link: string | null;
}

export interface ListItem extends BaseItem {
	location: string | null;
	footnote: string | null;
	tooltip: string | null;
	linkedTitle: boolean;
}

export interface WorkItem extends BaseItem {
	imgUrl: string;
	videoId: string | null;
}
