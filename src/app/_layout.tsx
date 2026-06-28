import { Stack } from "expo-router";

import { QueryClientProvider} from '@tanstack/react-query'

import { queryClient } from "../libs/query-client";

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{
    // headerShown: false
  }} />
    </QueryClientProvider>
  )
}