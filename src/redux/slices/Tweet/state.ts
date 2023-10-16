import { ITweet } from '../Tweets/state';

export enum LoadingState {
	LOADING = 'loading',
	LOADED = 'loaded',
	ERROR = 'error',
	NEVER = 'never',
}

export interface TweetState {
	data: ITweet | null;
	status: LoadingState;
}
