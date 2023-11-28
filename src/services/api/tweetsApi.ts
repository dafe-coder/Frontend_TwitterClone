import { axios } from '../../core/axios';
import { ITweet, TweetsState } from '../../redux/slices/Tweets/state';

interface IResponse<T> {
	status: string;
	data: T;
}

export async function fetchTweetsApi(): Promise<TweetsState['items']> {
	const { data } = await axios
		.get<IResponse<TweetsState['items']>>('/tweets')
		.then(({ data }) => data);

	return data;
}

export async function AddTweetRequest(payload: string): Promise<ITweet> {
	const { data } = await axios
		.post<IResponse<ITweet>>('/tweets', { text: payload })
		.then(({ data }) => data);
	return data;
}
