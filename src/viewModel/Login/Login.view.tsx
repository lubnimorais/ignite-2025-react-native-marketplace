import { Text, View } from 'react-native';

import { router } from 'expo-router';

import { AuthFormHeader } from '../../shared/components/AuthFormHeader';
import { KeyboardContainer } from '../../shared/components/KeyboardContainer';
import { InputController } from '../../shared/components/InputController';

import { useLoginViewModel } from './useLogin.viewModel';
import { Button } from '../../shared/components/Button';

export function LoginView({ control, onSubmit }: ReturnType<typeof useLoginViewModel>) {
  return (
    <KeyboardContainer>
      <View className="flex-1 items-center justify-center px-[40px]">
        <View className="w-full flex-1 items-center justify-center">
          <AuthFormHeader
            title="Acesse sua conta"
            subtitle="Informe seu e-mail e senha para entrar"
          />

          <InputController
            control={control}
            name="email"
            leftIcon="mail-outline"
            label="E-MAIL"
            placeholder="mail@example.com.br"
          />

          <InputController
            control={control}
            name="password"
            leftIcon="lock-closed-outline"
            label="SENHA"
            secureTextEntry
            placeholder="sua senha"
          />

          <Button className="mt-6" title="Acessar" rightIcon="arrow-forward" onPress={onSubmit} />
        </View>

        <View className="flex-2 pb-16">
          <Text className="text-base text-gray-300 mb-6">Ainda não tem uma conta?</Text>

          <Button title="Registro" variant="outlined" onPress={() => router.push('/register')} />
        </View>
      </View>
    </KeyboardContainer>
  );
}
