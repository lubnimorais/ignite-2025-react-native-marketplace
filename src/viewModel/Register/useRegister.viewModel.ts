import { useState } from 'react';

import { CameraType } from 'expo-image-picker';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { IRegisterFormData, registerSchema } from './register.schema';

import { useRegisterMutation } from '../../shared/queries/auth/user-register.mutation';
import { useUploadAvatarMutation } from '../../shared/queries/auth/use-upload-avatar.mutation';

import { useUserStore } from '../../shared/store/user-store';

import { useImage } from '../../shared/hooks/useImage';

export function useRegisterViewModel() {
  const [avatarUri, setAvatarUri] = useState<string | null>(null);

  const { updateUser } = useUserStore();
  const { loading, onSelectImage } = useImage({
    callback: (uri: string | null) => setAvatarUri(uri),
    cameraType: CameraType.front,
  });

  async function handleSelectAvatar() {
    await onSelectImage();
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

  const uploadAvatarMutation = useUploadAvatarMutation();

  const userRegisterMutation = useRegisterMutation({
    onSuccess: async () => {
      if (avatarUri) {
        const { url } = await uploadAvatarMutation.mutateAsync(avatarUri);

        await updateUser({ avatarUrl: url });
      }
    },
  });

  const onSubmit = handleSubmit(async (userData) => {
    const { confirmPassword, ...registerData } = userData;

    await userRegisterMutation.mutateAsync(registerData);
  });

  return {
    control,
    errors,
    avatarUri,
    onSubmit,
    handleSelectAvatar,
  };
}
