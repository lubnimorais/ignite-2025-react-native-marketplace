import { useMutation } from '@tanstack/react-query';

import { IRegisterHttpParams } from '../../interfaces/http/register';

import { useUserStore } from '../../store/user-store';

import { register } from '../../services/auth.service';

type IUseRegisterMutation = {
  onSuccess?: () => void;
};

export function useRegisterMutation({ onSuccess }: IUseRegisterMutation = {}) {
  const { setSession } = useUserStore();

  const mutation = useMutation({
    mutationFn: (userData: IRegisterHttpParams) => register(userData),
    onSuccess: (response) => {
      setSession({
        user: response.user,
        token: response.token,
        refreshToken: response.refreshToken,
      });

      onSuccess?.();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return mutation;
}
