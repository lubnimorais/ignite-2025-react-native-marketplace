import { IUser } from '../user';

export type IRegisterHttpParams = {
  name: string;
  email: string;
  avatarUrl?: string;
  phone: string;
  password: string;
};

export type IRegisterHttpResponse = {
  token: string;
  refreshToken: string;
  user: IUser;
};
