import { Text, View } from "react-native";

import { userRegisterViewModel } from "./userRegister.viewModel";

/**
 * Essa tipagem quer dizer que o RegisterView vai receber todos 
 * os parâmentos que o custom hook userRegisterViewModel
 *   está retornado
 */
export function RegisterView({ userData, setUserData}: ReturnType<typeof userRegisterViewModel>) {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>{userData.name}</Text>
    </View>
  )
}