import { ImagePickerOptions } from 'expo-image-picker';

import { useCamera } from './useCamera';
import { useGallery } from './useGallery';
import { useModal } from './useModal';
import { useModalStore } from '../store/modal-store';

type IUseImagePrams = ImagePickerOptions & {
  callback: (uri: string | null) => void;
};

export function useImage({
  allowsEditing,
  aspect,
  exif,
  quality,
  callback,
}: IUseImagePrams) {
  const modals = useModal();
  const { isLoading: isLoadingCamera, onOpenCamera } = useCamera({
    allowsEditing,
    aspect,
    exif,
    quality,
  });
  const { isLoading: isLoadingGallery, onOpenGallery } = useGallery({
    allowsEditing,
    aspect,
    exif,
    quality,
  });

  const { close } = useModalStore();

  const loading = Boolean(isLoadingCamera || isLoadingGallery);

  function handleCallback(uri: string | null) {
    close();
    callback(uri);
  }

  async function onSelectImage() {
    modals.showSelection({
      title: 'Selecionar foto',
      message: 'Escolha uma opção:',
      options: [
        {
          text: 'Galeria',
          icon: 'images',
          variant: 'primary',
          onPress: async () => {
            const imageUri = await onOpenGallery();
            handleCallback(imageUri);
          },
        },

        {
          text: 'Câmera',
          icon: 'camera',
          variant: 'primary',
          onPress: async () => {
            const imageUri = await onOpenCamera();
            handleCallback(imageUri);
          },
        },
      ],
    });
  }

  return {
    loading,
    onSelectImage,
  };
}
