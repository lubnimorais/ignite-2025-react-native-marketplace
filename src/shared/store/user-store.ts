import { create } from 'zustand';

// PARA IMPLEMENTAR O ASYNC STORAGE COM O ZUSTAND
import { persist, createJSONStorage } from 'zustand/middleware';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { IUser } from '../interfaces/user';

type ISetSessionParams = {
  user: IUser;
  token: string;
  refreshToken: string;
};

type IUpdateTokensParams = {
  token: string;
  refreshToken: string;
};

export type IUserStore = {
  user: IUser | null;
  token: string | null;
  refreshToken: string | null;

  setSession: (sessionData: ISetSessionParams) => void;
  logout: () => void;
  updateTokens: (updatedTokensData: IUpdateTokensParams) => void;
  // PARTIL vai com que todas a propriedades se tornem opcionais
  updateUser: (updatedUser: Partial<IUser>) => void;
};

// CONFIGURANDO O ZUSTAND
export const useUserStore = create<IUserStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      refreshToken: null,

      setSession: (sessionData) => {
        set({
          user: sessionData.user,
          token: sessionData.token,
          refreshToken: sessionData.refreshToken,
        });
      },
      logout: () => {
        set({
          user: null,
          token: null,
          refreshToken: null,
        });
      },
      updateTokens: (updatedTokensData) => {
        set({
          token: updatedTokensData.token,
          refreshToken: updatedTokensData.refreshToken,
        });
      },

      updateUser: (updatedUser) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...updatedUser } : null,
        })),
    }),
    {
      name: '@marketplace:auth',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
