import { ReactNode } from 'react';
import { create } from 'zustand';

type IModalConfig = {
  animationType?: 'none' | 'fade' | 'slide';
  transparent?: boolean;
  statusBarTranslucent?: boolean;
};

type IModalStore = {
  isOpen: boolean;
  content: ReactNode | null;
  config: IModalConfig;
  open: (content: ReactNode, config?: IModalConfig) => void;
  close: () => void;
};

export const useModalStore = create<IModalStore>((set, get) => ({
  isOpen: false,
  content: null,
  config: {
    animationType: 'fade',
    transparent: true,
    statusBarTranslucent: false,
  },

  open: (content: ReactNode, config?: IModalConfig) =>
    set({
      isOpen: true,
      content,
      config: {
        ...get().config,
        ...config,
      },
    }),

  close: () =>
    set({
      isOpen: false,
      content: null,
    }),
}));
