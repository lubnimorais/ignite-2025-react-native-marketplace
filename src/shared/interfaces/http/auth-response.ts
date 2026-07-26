import { IUser } from '../user';

export type IAuthResponse = {
  token: string;
  refreshToken: string;
  user: IUser;
};
