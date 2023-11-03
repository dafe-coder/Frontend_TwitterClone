import React from 'react';
import { useSelector } from 'react-redux';
import {
	selectTweetsItems,
	selectTweetsStatus,
} from '../redux/slices/Tweets/tweetsSlice';
import { ITweet, LoadingState } from '../redux/slices/Tweets/state';
import { CircularProgress } from '@mui/material';
import { Tweet } from './Tweet';

export const TweetList = (): React.ReactElement => {
	const tweets = useSelector(selectTweetsItems);
	const tweetsStatus = useSelector(selectTweetsStatus);

	return (
		<div>
			{tweetsStatus === LoadingState.LOADED ? (
				Array.from(tweets, (item: ITweet) => (
					<Tweet
						_id={item._id}
						key={item._id}
						text={item.text}
						user={{
							userName: item.user.userName,
							userAvatarUrl: item.user.userAvatarUrl,
							login: item.user.login,
						}}
					/>
				))
			) : (
				<div
					style={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '100%',
					}}
				>
					<CircularProgress />
				</div>
			)}
		</div>
	);
};
