import axios from 'axios';
import { TweetsState } from '../../redux/slices/Tweets/state';

export async function fetchTweetsApi(): Promise<TweetsState['items']> {
	return await axios.get('/tweets').then(({ data }) => data);
}
