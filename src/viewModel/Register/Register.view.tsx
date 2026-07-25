import { Text, TouchableOpacity, View } from 'react-native';

import { router } from 'expo-router';

import { useRegisterViewModel } from './userRegister.viewModel';

import { InputController } from '../../shared/components/InputController';
import { AuthFormHeader } from '../../shared/components/AuthFormHeader';

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
  return (
    <View className="flex-1 justify-center">
      <AuthFormHeader
        title="Crie sua conta"
        subtitle="Informe os seus dados pessoais e de acesso"
      />

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

      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
