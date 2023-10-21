import axios from 'axios';
import { ITweet } from '../../redux/slices/Tweets/state';

export async function fetchTweetApi(id: string): Promise<ITweet[]> {
	return await axios.get(`/tweets?_id=${id}`).then(({ data }) => data);
}
