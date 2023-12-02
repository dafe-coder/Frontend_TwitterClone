export enum LoadingState {
	LOADING = 'loading',
	LOADED = 'loaded',
	ERROR = 'error',
	NEVER = 'never',
}

export interface IUser {
	_id?: string;
	email: string;
	fullName: string;
	userName: string;
	password: string;
	confirmed_hash: string;
	confirmed?: boolean;
	location?: string;
	about?: string;
	website?: string;
}

export interface UserState {
	data: IUser | null;
	status: LoadingState;
}
