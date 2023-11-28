import { axios } from '../../core/axios';
import { ITweet } from '../../redux/slices/Tweets/state';

interface ITweetResponse {
	status: string;
	data: ITweet;
}

export async function fetchTweetApi(id: string): Promise<ITweet> {
	const { data } = await axios
		.get<ITweetResponse>(`/tweets/${id}`)
		.then(({ data }) => data);

	return data;
}
