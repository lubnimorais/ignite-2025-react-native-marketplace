import { IProduct } from '../product';

export type IProductResponse = {
  data: IProduct[];
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
};
