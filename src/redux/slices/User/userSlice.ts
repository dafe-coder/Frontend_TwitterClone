import {
	PayloadAction,
	createSlice,
	createAsyncThunk,
	createSelector,
} from '@reduxjs/toolkit';
import { IUser, LoadingState, UserState } from './state';
import { RootState } from '../../store';
import { fetchSignIn, fetchSignUp } from '../../../services/api/authApi';
import { LoginFormProps } from '../../../Components/modals/LoginModal';
import { RegisterFormProps } from '../../../Components/modals';

const initialState: UserState = {
	data: null,
	status: LoadingState.NEVER,
};

export const fetchUserSignIn = createAsyncThunk(
	'user/fetchUserStatus',
	async (postData: LoginFormProps) => {
		const response = await fetchSignIn(postData);
		window.localStorage.setItem('token', response.data.token);
		return response;
	}
);
export const fetchUserSignUp = createAsyncThunk(
	'user/fetchUserSignUpStatus',
	async (postData: RegisterFormProps) => {
		const response = await fetchSignUp(postData);
		return response;
	}
);

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state: UserState, action: PayloadAction<IUser>): any {
			state.data = action.payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(fetchUserSignIn.pending, (state) => {
			state.data = null;
			state.status = LoadingState.LOADING;
		});
		builder.addCase(fetchUserSignIn.fulfilled, (state, action) => {
			state.data = null;
			state.data = action.payload.data;
			state.status = LoadingState.LOADED;
		});
		builder.addCase(fetchUserSignIn.rejected, (state) => {
			state.data = null;
			state.status = LoadingState.ERROR;
		});
		builder.addCase(fetchUserSignUp.pending, (state) => {
			state.data = null;
			state.status = LoadingState.LOADING;
		});
		builder.addCase(fetchUserSignUp.fulfilled, (state, action) => {
			state.data = null;
			state.status = LoadingState.LOADED;
		});
		builder.addCase(fetchUserSignUp.rejected, (state) => {
			state.data = null;
			state.status = LoadingState.ERROR;
		});
	},
});

const selectUserState = (state: RootState) => state.user;

export const selectUser = createSelector(
	selectUserState,
	(state) => state.data
);

export const selectUserStatus = createSelector(
	selectUserState,
	(state) => state.status
);

export const selectIsAuth = createSelector(selectUserState, (state): boolean =>
	state.data !== null ? true : false
);
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
