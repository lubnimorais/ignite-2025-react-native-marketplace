import { Text, TouchableOpacity, View } from "react-native";

import { userRegisterViewModel } from "./userRegister.viewModel";

/**
 * Essa tipagem quer dizer que o RegisterView vai receber todos 
 * os parâmentos que o custom hook userRegisterViewModel
 *   está retornado
 */
export function RegisterView({ onSubmit}: ReturnType<typeof userRegisterViewModel>) {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Register</Text>

      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  )
}