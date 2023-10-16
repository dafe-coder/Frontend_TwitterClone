import axios from 'axios';
import { TagsState } from '../../redux/slices/Tags/state';

export async function fetchTagsApi(): Promise<TagsState['items']> {
	return await axios.get('/tags').then(({ data }) => data);
}
