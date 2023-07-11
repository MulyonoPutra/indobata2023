import { Address } from './address';
import { Avatar } from './avatar';
import { Cover } from './cover';

export interface User {
	_id: string;
	username: string;
	email: string;
	role: string;
	phone: string;
	dob: string;
	description: string;
	avatar: Avatar;
	cover: Cover;
	address: Address;
	occupation: string;
	company: string;
}

export interface UserIdentity {
	id: string;
}
