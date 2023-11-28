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

export const fetchTweet = createAsyncThunk(
	'tweet/fetchTweetStatus',
	async (id: string) => {
		const response = await fetchTweetApi(id);
		return response;
	}
);

const tweetSlice = createSlice({
	name: 'tweet',
	initialState,
	reducers: {
		setTweet(state: TweetState, action: PayloadAction<ITweet>): any {
			state.data = action.payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(fetchTweet.pending, (state) => {
			state.data = null;
			state.status = LoadingState.LOADING;
		});
		builder.addCase(fetchTweet.fulfilled, (state, action) => {
			state.data = null;
			state.data = action.payload;
			state.status = LoadingState.LOADED;
		});
		builder.addCase(fetchTweet.rejected, (state) => {
			state.data = null;
			state.status = LoadingState.ERROR;
		});
	},
});

const selectTweet = (state: RootState) => state.tweet;

export const selectTweetItem = createSelector(
	selectTweet,
	(state) => state.data
);

export const selectTweetStatus = createSelector(
	selectTweet,
	(state) => state.status
);

export const { setTweet } = tweetSlice.actions;
export default tweetSlice.reducer;
