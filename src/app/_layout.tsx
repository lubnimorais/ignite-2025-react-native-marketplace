import { Stack } from 'expo-router';

import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '../libs/query-client';

import ToastManager from 'toastify-react-native';

import { Modal } from '../shared/components/Modal';

import '../styles/global.css';
import { useUserStore } from '../shared/store/user-store';

export default function RootLayout() {
  const { token } = useUserStore();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(public)" />
        <Stack.Screen name="(private)" />
      </Stack>

      <Modal />

      <ToastManager useModal={false} />
    </QueryClientProvider>
  );
}
