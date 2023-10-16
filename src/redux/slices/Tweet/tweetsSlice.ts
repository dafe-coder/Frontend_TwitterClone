import {
	PayloadAction,
	createSlice,
	createAsyncThunk,
	createSelector,
} from '@reduxjs/toolkit';
import { LoadingState, TweetState } from './state';
import { RootState } from '../../store';
import { fetchTweetApi } from '../../../services/api/tweetApi';
import { ITweet } from '../Tweets/state';

const initialState: TweetState = {
	data: null,
	status: LoadingState.NEVER,
};

export const fetchTweets = createAsyncThunk(
	'tweets/fetchTweetsStatus',
	async () => {
		const response = await fetchTweetApi();
		return response;
	}
);

const tweetsSlice = createSlice({
	name: 'tweets',
	initialState,
	reducers: {
		setTweets(state: TweetState, action: PayloadAction<ITweet>): any {
			state.data = action.payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(fetchTweets.pending, (state, action) => {
			state.data = null;
			state.status = LoadingState.LOADING;
		});
		builder.addCase(fetchTweets.fulfilled, (state, action) => {
			state.data = null;
			state.data = action.payload;
			state.status = LoadingState.LOADED;
		});
		builder.addCase(fetchTweets.rejected, (state, action) => {
			state.data = null;
			state.status = LoadingState.ERROR;
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

export const { setTweets } = tweetsSlice.actions;
export default tweetsSlice.reducer;
