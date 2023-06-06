export type BlogArrayType = Blog[];

export interface Blog {
	id: string;
	title: string;
	author: string;
	date: string;
	content: string;
	tags: string[];
	images: string[];
	category: string;
}
