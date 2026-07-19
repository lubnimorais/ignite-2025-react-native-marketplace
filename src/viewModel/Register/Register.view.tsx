import { useState } from 'react';

import { Text, TouchableOpacity, View } from 'react-native';

import { useRegisterViewModel } from './userRegister.viewModel';

import { InputController } from '../../shared/components/InputController';

/**
 * Essa tipagem quer dizer que o RegisterView vai receber todos
 * os parâmentos que o custom hook userRegisterViewModel
 *   está retornado
 */
export function RegisterView({
  control,
  errors,
  onSubmit,
}: ReturnType<typeof useRegisterViewModel>) {
  const [email, setEmail] = useState('');

  return (
    <View className="flex-1 justify-center">
      <InputController
        leftIcon="mail-outline"
        label="E-MAIL"
        control={control}
        name="email"
        errors={errors}
      />

      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}
