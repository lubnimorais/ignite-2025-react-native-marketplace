import { Text, TouchableOpacity, View } from 'react-native';

import { router } from 'expo-router';

import { useRegisterViewModel } from './userRegister.viewModel';

import { InputController } from '../../shared/components/InputController';
import { AuthFormHeader } from '../../shared/components/AuthFormHeader';
import { KeyboardContainer } from '../../shared/components/KeyboardContainer';

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
    <KeyboardContainer>
      <View className="flex-1 items-center justify-center px-[40px]">
        <AuthFormHeader
          title="Crie sua conta"
          subtitle="Informe os seus dados pessoais e de acesso"
        />

        <InputController
          leftIcon="person-outline"
          label="NOME"
          control={control}
          name="name"
          errors={errors}
        />

        <InputController
          leftIcon="mail-outline"
          label="E-MAIL"
          control={control}
          name="email"
          errors={errors}
        />

        <InputController
          leftIcon="call-outline"
          label="TELEFONE"
          control={control}
          name="phone"
          errors={errors}
        />

        <InputController
          leftIcon="lock-closed-outline"
          label="SENHA"
          control={control}
          name="password"
          errors={errors}
          secureTextEntry
        />

        <InputController
          leftIcon="lock-closed-outline"
          label="CONFIRMAR SENHA"
          control={control}
          name="confirmPassword"
          errors={errors}
          secureTextEntry
        />

        <TouchableOpacity onPress={onSubmit}>
          <Text>Registrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/login')}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardContainer>
  );
}
