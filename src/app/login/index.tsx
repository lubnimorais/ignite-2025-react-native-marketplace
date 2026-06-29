import { Text, TouchableOpacity, View } from "react-native";

import { router } from "expo-router";

export default function LoginScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-base">Login</Text>

      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  )
}