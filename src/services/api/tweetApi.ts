import axios from 'axios';
import { ITweet } from '../../redux/slices/Tweets/state';

export async function fetchTweetApi(): Promise<ITweet> {
	return await axios.get('/tweets').then(({ data }) => data);
}
