import { Avatar } from './avatar';
import { Cover } from './cover';

export interface Author {
	avatar: Avatar;
	cover: Cover;
	username: string;
	email: string;
	dob: string;
}
