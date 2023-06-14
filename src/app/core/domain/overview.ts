export interface Overview {
	content: Content;
	_id: string;
	header: string;
	images: string[];
}

export interface OverviewSection {
	content: string;
	images: string[];
}

export interface Content {
	paragraph1: string;
	paragraph2: string;
	paragraph3: string;
	paragraph4: string;
	paragraph5: string;
}
