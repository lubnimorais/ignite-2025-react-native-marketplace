import { baseURL, marketPlaceApiClient } from '../api/marketplace';

import { IRegisterHttpParams } from '../interfaces/http/register';
import { ILoginHttpParams } from '../interfaces/http/login';
import { IAuthResponse } from '../interfaces/http/auth-response';
import { IUploadAvatarResponse } from '../interfaces/http/upload-avatar';

export async function register(userData: IRegisterHttpParams) {
  const response = await marketPlaceApiClient.post<IAuthResponse>(
    '/auth/register',
    userData
  );

  return response.data;
}

export async function login(loginData: ILoginHttpParams) {
  const response = await marketPlaceApiClient.post<IAuthResponse>(
    '/auth/login',
    loginData
  );

  return response.data;
}

export async function uploadAvatar(avatarUri: string) {
  const formData = new FormData();

  const avatarData = {
    uri: avatarUri,
    type: 'image/jpeg',
    name: 'avatar.jpg',
  } as unknown as Blob;

  formData.append('avatar', avatarData);

  const response = await marketPlaceApiClient.post<IUploadAvatarResponse>(
    '/user/avatar',
    formData
  );

  const responseData = {
    message: response.data.message,
    filename: response.data.filename,
    url: `${baseURL}/${response.data.url}`,
  };

  return responseData;
}
