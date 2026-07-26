import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { ILoginFormData, loginSchema } from './login.schema';
import { useLoginMutation } from '../../shared/queries/auth/user-login.mutation';

export function useLoginViewModel() {
  const { control, handleSubmit } = useForm<ILoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const loginMutation = useLoginMutation();

  const onSubmit = handleSubmit(async ({ email, password }) => {
    const response = await loginMutation.mutateAsync({ email, password });
  });

  return { control, onSubmit };
}
