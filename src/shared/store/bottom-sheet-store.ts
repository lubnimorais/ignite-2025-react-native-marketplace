import { ReactNode } from 'react';

import { create } from 'zustand';

type IBottomSheetConfig = {
  snapPoints?: string[];
  enablePanDownToClose?: boolean;
};

type IBottomSheetStore = {
  isOpen: boolean;
  content: ReactNode | null;
  config: IBottomSheetConfig;

  open: (content: { content: ReactNode; config?: IBottomSheetConfig }) => void;
  close: () => void;
};

const defaultConfig: IBottomSheetConfig = {
  snapPoints: ['80%', '90%'],
  enablePanDownToClose: true,
};

export const useBottomSheetStore = create<IBottomSheetStore>((set) => ({
  isOpen: false,
  content: null,
  config: defaultConfig,

  open: ({ content, config }) =>
    set({
      isOpen: true,
      content,
      config: { ...defaultConfig, ...config },
    }),

  close: () =>
    set({
      isOpen: false,
      content: null,
      config: defaultConfig,
    }),
}));
