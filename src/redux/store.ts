import { configureStore } from '@reduxjs/toolkit';
import tweetsSlice from './slices/Tweets/tweetsSlice';
export type AppDispatch = typeof store.dispatch;

// @ts-ignore

export const store = configureStore({
	reducer: {
		tweets: tweetsSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
