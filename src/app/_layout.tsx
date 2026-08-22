import { Stack } from 'expo-router';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { QueryClientProvider } from '@tanstack/react-query';

import ToastManager from 'toastify-react-native';

import { queryClient } from '../libs/query-client';

import { Modal } from '../shared/components/Modal';

import '../styles/global.css';

export default function RootLayout() {
  return (
    <GestureHandlerRootView className="flex-1">
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
    </GestureHandlerRootView>
  );
}
