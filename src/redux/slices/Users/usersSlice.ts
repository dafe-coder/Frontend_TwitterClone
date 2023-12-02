import {
	PayloadAction,
	createSlice,
	createAsyncThunk,
	createSelector,
} from '@reduxjs/toolkit';
import { LoadingState, UserState } from './state';
import { RootState } from '../../store';
import { fetchSignIn } from '../../../services/api/authApi';
import { LoginFormProps } from '../../../Components/modals/LoginModal';
import { IUser } from '../User/state';

const initialState: UserState = {
	data: null,
	status: LoadingState.NEVER,
};

export const fetchUsersItems = createAsyncThunk(
	'users/fetchUsersItemsStatus',
	async (postData: LoginFormProps) => {
		const response = await fetchSignIn(postData);
		window.localStorage.setItem('token', response.data.token);
		return response;
	}
);

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUsers(state: UserState, action: PayloadAction<IUser[]>): any {
			state.data = action.payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(fetchUsersItems.pending, (state) => {
			state.data = null;
			state.status = LoadingState.LOADING;
		});
		builder.addCase(fetchUsersItems.fulfilled, (state, action) => {
			state.data = null;
			state.data = action.payload.data;
			state.status = LoadingState.LOADED;
		});
		builder.addCase(fetchUsersItems.rejected, (state) => {
			state.data = null;
			state.status = LoadingState.ERROR;
		});
	},
});

const selectUsersState = (state: RootState): UserState => state.users;

export const selectUsers = createSelector(
	selectUsersState,
	(state) => state.data
);

export const selectUsersStatus = createSelector(
	selectUsersState,
	(state) => state.status
);

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;
