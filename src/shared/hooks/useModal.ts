import { Ionicons } from '@expo/vector-icons';
import { useModalStore } from '../store/modal-store';
import { createElement } from 'react';
import {
  ISelectionModalProps,
  SelectionModal,
} from '../components/Modal/SelectionModal';

export type ISelectionVariant = 'primary' | 'secondary' | 'danger';

export type ISelectionOption = {
  text: string;
  onPress: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
  variant?: ISelectionVariant;
};

export function useModal() {
  const { open, close } = useModalStore();

  function showSelection({
    title,
    message,
    options,
  }: {
    title: string;
    message?: string;
    options: ISelectionOption[];
  }) {
    open(
      createElement(SelectionModal, {
        title,
        message,
        options,
      } as ISelectionModalProps)
    );
  }

  return { showSelection };
}
