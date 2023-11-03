import {
	PayloadAction,
	createSlice,
	createAsyncThunk,
	createSelector,
} from '@reduxjs/toolkit';
import { ITweet, LoadingState, TweetsState } from './state';
import { RootState } from '../../store';
import {
	AddTweetRequest,
	fetchTweetsApi,
} from '../../../services/api/tweetsApi';

const initialState: TweetsState = {
	items: [],
	status: LoadingState.NEVER,
	statusTweet: LoadingState.NEVER,
};

export const fetchTweets = createAsyncThunk(
	'tweets/fetchTweetsStatus',
	async () => {
		const response = await fetchTweetsApi();
		return response;
	}
);

export const fetchAddTweet = createAsyncThunk(
	'tweets/addTweetStatus',
	async (payload: string) => {
		const data: ITweet = {
			_id: Math.random().toString(36).slice(2),
			user: {
				userName: 'Alex',
				login: 'alexider@cume',
				userAvatarUrl:
					'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
			},
			text: payload,
		};

		const response = await AddTweetRequest(data);
		return response;
	}
);

const tweetsSlice = createSlice({
	name: 'tweets',
	initialState,
	reducers: {
		setTweets(
			state: TweetsState,
			action: PayloadAction<TweetsState['items']>
		): any {
			state.items = action.payload;
		},
		addTweet(state: TweetsState, action: PayloadAction<ITweet>): any {
			state.items = [action.payload, ...state.items];
		},
	},
	extraReducers(builder) {
		builder.addCase(fetchTweets.pending, (state: TweetsState, action) => {
			state.items = [];
			state.status = LoadingState.LOADING;
		});
		builder.addCase(fetchTweets.fulfilled, (state: TweetsState, action) => {
			state.items = [];
			state.items = action.payload;
			state.status = LoadingState.LOADED;
		});
		builder.addCase(fetchTweets.rejected, (state: TweetsState, action) => {
			state.items = [];
			state.status = LoadingState.ERROR;
		});
		builder.addCase(fetchAddTweet.pending, (state: TweetsState, action) => {
			state.statusTweet = LoadingState.LOADING;
		});
		builder.addCase(fetchAddTweet.fulfilled, (state: TweetsState, action) => {
			state.items = [action.payload, ...state.items];
			state.statusTweet = LoadingState.LOADED;
		});
		builder.addCase(fetchAddTweet.rejected, (state: TweetsState, action) => {
			state.statusTweet = LoadingState.ERROR;
		});
	},
});

const selectTweets = (state: RootState) => state.tweets;

export const selectTweetsItems = createSelector(
	selectTweets,
	(state) => state.items
);
export const selectTweetsStatus = createSelector(
	selectTweets,
	(state) => state.status
);
export const selectTweetsStatusAddTweet = createSelector(
	selectTweets,
	(state) => state.statusTweet
);

export const { setTweets, addTweet } = tweetsSlice.actions;
export default tweetsSlice.reducer;
