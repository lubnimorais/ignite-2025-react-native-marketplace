import { Stack } from 'expo-router';

import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '../libs/query-client';

import ToastManager from 'toastify-react-native';

import { Modal } from '../shared/components/Modal';

import '../styles/global.css';

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
        <Stack.Screen name="(private)" />
      </Stack>

      <Modal />

      <ToastManager useModal={false} />
    </QueryClientProvider>
  );
}
