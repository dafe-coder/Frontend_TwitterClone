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

export async function AddTweetRequest(payload: {
	text: string;
	images: string[];
}): Promise<ITweet> {
	const { data } = await axios
		.post<IResponse<ITweet>>('/tweets', payload)
		.then(({ data }) => data);
	return data;
}

export async function DeleteTweetRequest(payload: string): Promise<ITweet> {
	return await axios.delete(`/tweets/${payload}`).then(({ data }) => data);
}
