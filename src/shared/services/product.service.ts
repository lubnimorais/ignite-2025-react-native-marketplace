import { marketPlaceApiClient } from '../api/marketplace';

import { IProductRequest } from '../interfaces/http/product';
import { IProductResponse } from '../interfaces/http/product-response';

export async function getProducts(params: IProductRequest) {
  const response = await marketPlaceApiClient.post<IProductResponse>(
    '/products',
    params
  );

  return response.data;
}
