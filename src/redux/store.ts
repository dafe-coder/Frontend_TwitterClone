import { configureStore } from '@reduxjs/toolkit';
import tweetsSlice from './slices/Tweets/tweetsSlice';
import tagsSlice from './slices/Tags/tagsSlice';
import tweetSlice from './slices/Tweet/tweetSlice';
export type AppDispatch = typeof store.dispatch;

// @ts-ignore

export const store = configureStore({
	reducer: {
		tweets: tweetsSlice,
		tweet: tweetSlice,
		tags: tagsSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
