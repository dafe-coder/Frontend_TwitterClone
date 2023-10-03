import {
	PayloadAction,
	createSlice,
	createAsyncThunk,
	createSelector,
} from '@reduxjs/toolkit';
import { LoadingState, ITweet, TweetsState } from './state';
import { RootState } from '../../store';
import { fetchTweetsApi } from '../../../services/api/tweetsApi';

const initialState: TweetsState = {
	items: [],
	status: LoadingState.NEVER,
};

export const fetchTweets = createAsyncThunk(
	'tweets/fetchTweetsStatus',
	async () => {
		const response = await fetchTweetsApi();
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
	},
	extraReducers(builder) {
		builder.addCase(fetchTweets.pending, (state, action) => {
			state.items = [];
			state.status = LoadingState.LOADING;
		});
		builder.addCase(fetchTweets.fulfilled, (state, action) => {
			state.items = [];
			state.items = action.payload;
			state.status = LoadingState.LOADED;
		});
		builder.addCase(fetchTweets.rejected, (state, action) => {
			state.items = [];
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
