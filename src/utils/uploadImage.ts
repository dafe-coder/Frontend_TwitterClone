import { axios } from '../core/axios';

interface UploadImagesReturn {
	url: string;
	height: number;
	size: number;
	width: number;
}

export async function uploadImage(file: any): Promise<UploadImagesReturn> {
	const formData = new FormData();
	formData.append('name', 'Chris');
	formData.append('image', file);

	const { data } = await axios.post('http://localhost:8888/upload', formData, {
		headers: { 'Content-Type': 'multipart/form-data' },
	});

	return data;
}
