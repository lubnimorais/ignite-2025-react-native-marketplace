import { useCallback, useState } from 'react';
import { Alert } from 'react-native';

import { ImagePickerOptions } from 'expo-image-picker';
import * as ImagePicker from 'expo-image-picker';

import { Toast } from 'toastify-react-native';
import { Linking } from 'react-native';

export function useGallery({
  allowsEditing,
  aspect,
  exif,
  quality,
}: ImagePickerOptions) {
  const [isLoading, setIsLoading] = useState(false);

  const requestGalleryPermission = useCallback<
    () => Promise<boolean>
  >(async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      const currentStatus = status === 'granted';

      if (!currentStatus) {
        Alert.alert(
          'Permissão negada',
          'Precisamos da permissão para acessarmos sua galeria',
          [
            {
              text: 'Cancelar',
              style: 'cancel',
            },
            {
              text: 'Abrir configurações',
              onPress: () => {
                Linking.openSettings();
              },
            },
          ]
        );
      }

      return currentStatus;
    } catch {
      Toast.error('Erro ao abrir sua galeria', 'top');

      return false;
    }
  }, []);

  const onOpenGallery = useCallback<() => Promise<string | null>>(async () => {
    setIsLoading(true);

    try {
      const hasPermission = await requestGalleryPermission();

      if (!hasPermission) return null;

      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing,
        aspect,
        exif,
        quality,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        Toast.success('Foto selecionada com sucesso', 'top');

        return result.assets[0].uri;
      }

      return null;
    } catch {
      Toast.error('Erro ao selecionar a foto', 'top');

      return null;
    } finally {
      setIsLoading(false);
    }
  }, [requestGalleryPermission]);

  return {
    isLoading,
    requestGalleryPermission,
    onOpenGallery,
  };
}
