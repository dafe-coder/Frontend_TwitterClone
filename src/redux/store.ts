import { configureStore } from '@reduxjs/toolkit';
import tweetsSlice from './slices/Tweets/tweetsSlice';
import tagsSlice from './slices/Tags/tagsSlice';
import tweetSlice from './slices/Tweet/tweetSlice';
import userSlice from './slices/User/userSlice';
import usersSlice from './slices/Users/usersSlice';
export type AppDispatch = typeof store.dispatch;

// @ts-ignore

export const store = configureStore({
	reducer: {
		tweets: tweetsSlice,
		tweet: tweetSlice,
		tags: tagsSlice,
		user: userSlice,
		users: usersSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
