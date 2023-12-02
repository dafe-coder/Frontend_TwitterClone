import { IUser } from '../User/state';

export enum LoadingState {
	LOADING = 'loading',
	LOADED = 'loaded',
	ERROR = 'error',
	NEVER = 'never',
}

export interface UserState {
	data: IUser[] | null;
	status: LoadingState;
}
