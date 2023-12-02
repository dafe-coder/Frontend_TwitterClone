import { axios } from '../../core/axios';
import { LoginFormProps } from '../../Components/modals';

interface ResponseApi {
	status: string;
	data: any;
}

export async function fetchSignIn(
	postData: LoginFormProps
): Promise<ResponseApi> {
	return await axios
		.post<ResponseApi>(`/auth/login`, {
			username: postData.email,
			password: postData.password,
		})
		.then(({ data }) => data);
}

export async function fetchGetMe(): Promise<ResponseApi> {
	return await axios.get<ResponseApi>(`/users/me`).then(({ data }) => data);
}

// @ts-ignore
window.fetchGetMe = fetchGetMe;
