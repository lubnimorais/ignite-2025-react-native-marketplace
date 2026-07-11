import { Text, TouchableOpacity, View } from 'react-native';

import { useUserRegisterViewModel } from './userRegister.viewModel';
import { Input } from '../../shared/components/Input';

/**
 * Essa tipagem quer dizer que o RegisterView vai receber todos
 * os parâmentos que o custom hook userRegisterViewModel
 *   está retornado
 */
export function RegisterView({ onSubmit }: ReturnType<typeof useUserRegisterViewModel>) {
  return (
    <View className="flex-1 justify-center">
      <Input />

      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}
