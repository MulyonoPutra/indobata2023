import { Address } from './address';

export interface User {
	_id: string;
	username: string;
	email: string;
	role: string;
	phone: any;
	dob: string;
	description: string;
	avatar: Avatar;
	cover: Cover;
	address: Address;
}

export interface Avatar {
	id: any;
	url: string;
}

export interface Cover {
	id: any;
	url: string;
}

export interface UserIdentity {
	id: string;
}
