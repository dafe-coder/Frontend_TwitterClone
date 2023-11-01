import axios from 'axios';
import { ITweet, TweetsState } from '../../redux/slices/Tweets/state';

export async function fetchTweetsApi(): Promise<TweetsState['items']> {
	return await axios.get('/tweets').then(({ data }) => data);
}

export async function AddTweetRequest(payload: ITweet): Promise<ITweet> {
	return await axios.post('/tweets', payload).then(({ data }) => data);
}
