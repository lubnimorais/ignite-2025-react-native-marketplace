import { Text, TouchableOpacity, View } from 'react-native';

import { useUserRegisterViewModel } from './userRegister.viewModel';
import { Input } from '../../shared/components/Input';
import { useState } from 'react';

/**
 * Essa tipagem quer dizer que o RegisterView vai receber todos
 * os parâmentos que o custom hook userRegisterViewModel
 *   está retornado
 */
export function RegisterView({ onSubmit }: ReturnType<typeof useUserRegisterViewModel>) {
  const [email, setEmail] = useState('');

  return (
    <View className="flex-1 justify-center">
      <Input
        label="E-mail"
        leftIcon="person"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input label="Senha" leftIcon="lock-closed-outline" />

      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}
