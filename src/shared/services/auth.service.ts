import { marketPlaceApiClient } from '../api/marketplace';

import { IRegisterHttpParams } from '../interfaces/http/register';
import { ILoginHttpParams } from '../interfaces/http/login';
import { IAuthResponse } from '../interfaces/http/auth-response';

export async function register(userData: IRegisterHttpParams) {
  const response = await marketPlaceApiClient.post<IAuthResponse>('/auth/register', userData);

  return response.data;
}

export async function login(loginData: ILoginHttpParams) {
  const response = await marketPlaceApiClient.post<IAuthResponse>('/auth/login', loginData);

  return response.data;
}
