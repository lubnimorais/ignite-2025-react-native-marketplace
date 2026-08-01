import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { IRegisterFormData, registerSchema } from './register.schema';
import { useRegisterMutation } from '../../shared/queries/auth/user-register.mutation';
import { useUserStore } from '../../shared/store/user-store';
import { useModal } from '../../shared/hooks/useModal';

export function useRegisterViewModel() {
  const userRegisterMutation = useRegisterMutation();
  const { setSession } = useUserStore();
  const modals = useModal();

  function handleSelectAvatar() {
    modals.showSelection({
      title: 'Selecionar foto',
      message: 'Escolha uma opção:',
      options: [
        {
          text: 'Galeria',
          icon: 'images',
          variant: 'primary',
          onPress: () => {},
        },

        {
          text: 'Câmera',
          icon: 'camera',
          variant: 'primary',
          onPress: () => {},
        },
      ],
    });
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
    },
  });

  const onSubmit = handleSubmit(async (userData) => {
    const { confirmPassword, ...registerData } = userData;

    const mutationResponse =
      await userRegisterMutation.mutateAsync(registerData);

    setSession({
      user: mutationResponse.user,
      token: mutationResponse.token,
      refreshToken: mutationResponse.refreshToken,
    });
  });

  return {
    control,
    errors,
    onSubmit,
    handleSelectAvatar,
  };
}
