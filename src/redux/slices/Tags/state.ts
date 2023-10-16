export enum LoadingState {
	LOADING = 'loading',
	LOADED = 'loaded',
	ERROR = 'error',
	NEVER = 'never',
}

export interface ITag {
	_id: number;
	count: number;
	categories: string;
	name: string;
}

export interface TagsState {
	items: ITag[];
	status: LoadingState;
}
