export enum LoadingState {
	LOADING = 'loading',
	LOADED = 'loaded',
	ERROR = 'error',
	NEVER = 'never',
}

export type User = {
	userName: string;
	fullName: string;
	userAvatarUrl: string;
	createdAt: string;
};

export interface ITweet {
	_id: string;
	id?: number;
	user: User;
	text: string;
	createdAt: string;
	images?: string[];
}

export interface TweetsState {
	items: ITweet[];
	status: LoadingState;
	statusTweet: LoadingState;
}
