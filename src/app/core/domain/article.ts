import { Author } from './author';
import { Category } from './category';
import { Images } from './images';

export interface Article {
	images: Images;
	_id?: string;
	title: string;
	subtitle: string;
	content: string;
	author?: Author;
	tags: string[];
	category: Category;
	createdAt?: string;
	updatedAt?: string;
}
