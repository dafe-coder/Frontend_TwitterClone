import { axios } from '../../core/axios';
import { LoginFormProps } from '../../Components/modals';
import { IUser } from '../../redux/slices/User/state';

interface ResponseApi {
	status: string;
	data: IUser[];
}

export async function fetchUsers(
	postData: LoginFormProps
): Promise<ResponseApi> {
	return await axios.get<ResponseApi>(`/users/`).then(({ data }) => data);
}

export async function fetchGetMe(): Promise<ResponseApi> {
	return await axios.get<ResponseApi>(`/users/me`).then(({ data }) => data);
}

// @ts-ignore
window.fetchGetMe = fetchGetMe;
