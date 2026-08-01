import {
  Modal as ModalReactNative,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { useModalStore } from '../../store/modal-store';

export function Modal() {
  const { isOpen, content, config, close } = useModalStore();

  if (!isOpen || !content) {
    return null;
  }

  return (
    <ModalReactNative
      visible={isOpen}
      animationType={config.animationType}
      transparent={config.transparent}
      statusBarTranslucent={config.statusBarTranslucent}
      onRequestClose={close}
    >
      <TouchableWithoutFeedback onPress={close}>
        <TouchableWithoutFeedback onPress={() => {}}>
          <View className="flex-1 items-center justify-center bg-black/50 px-6">
            {content}
          </View>
        </TouchableWithoutFeedback>
      </TouchableWithoutFeedback>
    </ModalReactNative>
  );
}
