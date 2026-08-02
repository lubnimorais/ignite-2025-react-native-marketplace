import { useCallback, useState } from 'react';

import * as ImagePicker from 'expo-image-picker';
import { ImagePickerOptions } from 'expo-image-picker';

import { Toast } from 'toastify-react-native';

export function useCamera({
  aspect,
  quality,
  allowsEditing,
  exif,
}: ImagePickerOptions) {
  const [isLoading, setIsLoading] = useState(false);

  // SOLICITAR PERMISSÕES
  const requestCameraPermission = useCallback<
    () => Promise<boolean>
  >(async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();

      const currentStatus = status === 'granted';

      if (!currentStatus) {
        Toast.error(
          'Precisamos da permissão para acessarmos sua câmera',
          'top'
        );
      }

      return currentStatus;
    } catch {
      Toast.error('Erro ao solicitar permissões da câmera', 'top');

      return false;
    }
  }, []);

  const onOpenCamera = useCallback<() => Promise<string | null>>(async () => {
    setIsLoading(true);

    try {
      const hasPermission = await requestCameraPermission();

      if (!hasPermission) return null;

      const result = await ImagePicker.launchCameraAsync({
        aspect,
        quality,
        allowsEditing,
        exif,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        Toast.success('Foto capturada com sucesso', 'top');

        return result.assets[0].uri;
      }

      return null;
    } catch {
      Toast.error('Erro ao abrir a camera', 'top');

      return null;
    } finally {
      setIsLoading(false);
    }
  }, [requestCameraPermission]);

  return {
    isLoading,
    requestCameraPermission,
    onOpenCamera,
  };
}
