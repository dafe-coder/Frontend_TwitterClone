import {
	PayloadAction,
	createSlice,
	createAsyncThunk,
	createSelector,
} from '@reduxjs/toolkit';
import { LoadingState, TagsState } from './state';
import { RootState } from '../../store';
import { fetchTagsApi } from '../../../services/api/tagsApi';

const initialState: TagsState = {
	items: [],
	status: LoadingState.NEVER,
};

export const fetchTags = createAsyncThunk('tags/fetchTagsStatus', async () => {
	const response = await fetchTagsApi();
	return response;
});

const tagsSlice = createSlice({
	name: 'tags',
	initialState,
	reducers: {
		setTags(state: TagsState, action: PayloadAction<TagsState['items']>): any {
			state.items = action.payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(fetchTags.pending, (state, action) => {
			state.items = [];
			state.status = LoadingState.LOADING;
		});
		builder.addCase(fetchTags.fulfilled, (state, action) => {
			state.items = [];
			state.items = action.payload;
			state.status = LoadingState.LOADED;
		});
		builder.addCase(fetchTags.rejected, (state, action) => {
			state.items = [];
			state.status = LoadingState.ERROR;
		});
	},
});

export const { setTags } = tagsSlice.actions;
export default tagsSlice.reducer;
