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
		const response = await AddTweetRequest(payload);
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

const selectTweetsState = (state: RootState) => state.tweets;

export const selectTweetsItems = (state: RootState) =>
	selectTweetsState(state).items;

export const selectTweetsStatus = createSelector(
	selectTweetsState,
	(state) => state.status
);
export const selectTweetsStatusAddTweet = createSelector(
	selectTweetsState,
	(state) => state.statusTweet
);

export const { setTweets, addTweet } = tweetsSlice.actions;
export default tweetsSlice.reducer;
