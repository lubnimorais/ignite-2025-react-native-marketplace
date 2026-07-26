import { useMutation } from '@tanstack/react-query';

import { ILoginHttpParams } from '../../interfaces/http/login';

import { login } from '../../services/auth.service';
import { useUserStore } from '../../store/user-store';

export function useLoginMutation() {
  const { setSession } = useUserStore();

  const mutation = useMutation({
    mutationFn: (loginData: ILoginHttpParams) => login(loginData),
    onSuccess: (response) => {
      setSession({
        user: response.user,
        token: response.token,
        refreshToken: response.refreshToken,
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return mutation;
}
