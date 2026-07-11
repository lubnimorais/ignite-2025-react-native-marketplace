import { marketPlaceApiClient } from '../api/marketplace';

import { IRegisterHttpParams, IRegisterHttpResponse } from '../interfaces/http/register';

export async function register(userData: IRegisterHttpParams) {
  const response = await marketPlaceApiClient.post<IRegisterHttpResponse>(
    '/auth/register',
    userData
  );

  return response.data;
}
