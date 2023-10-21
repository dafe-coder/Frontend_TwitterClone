export enum LoadingState {
	LOADING = 'loading',
	LOADED = 'loaded',
	ERROR = 'error',
	NEVER = 'never',
}

export type User = {
	userName: string;
	login: string;
	userAvatarUrl: string;
};

export interface ITweet {
	_id: string;
	user: User;
	text: string;
}

export interface TweetsState {
	items: ITweet[];
	status: LoadingState;
}
