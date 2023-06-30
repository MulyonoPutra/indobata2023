import { User } from './user';

export interface Login {
	username: string;
	password: string;
}

export interface LoginDTO {
	accessToken: string;
	user: User;
}
