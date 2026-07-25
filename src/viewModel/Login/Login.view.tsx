import { Text, TouchableOpacity, View } from 'react-native';

import { router } from 'expo-router';

import { AuthFormHeader } from '../../shared/components/AuthFormHeader';
import { KeyboardContainer } from '../../shared/components/KeyboardContainer';
import { InputController } from '../../shared/components/InputController';
import { useRegisterViewModel } from '../Register/userRegister.viewModel';

export function LoginView({ control, errors, onSubmit }: ReturnType<typeof useRegisterViewModel>) {
  return (
    <KeyboardContainer>
      <View className="flex-1 items-center justify-center px-[40px]">
        <AuthFormHeader
          title="Acesse sua conta"
          subtitle="Informe seu e-mail e senha para entrar"
        />

        <InputController
          leftIcon="mail-outline"
          label="E-MAIL"
          control={control}
          name="email"
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

        <TouchableOpacity onPress={() => router.push('/register')}>
          <Text>Registro</Text>
        </TouchableOpacity>
      </View>
    </KeyboardContainer>
  );
}
