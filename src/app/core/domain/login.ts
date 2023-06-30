import { User } from './user';

export interface Login {
	email: string;
	password: string;
}

export interface LoginDTO {
	accessToken: string;
	user: User;
}
