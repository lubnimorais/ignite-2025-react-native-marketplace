import { Text, TouchableOpacity, View } from 'react-native';

import { router } from 'expo-router';

import { AuthFormHeader } from '../../shared/components/AuthFormHeader';
import { Input } from '../../shared/components/Input';

export function LoginView() {
  return (
    <View className="flex-1 items-center justify-center">
      <AuthFormHeader title="Acesse sua conta" subtitle="Informe seu e-mail e senha para entrar" />

      <Input />

      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text>Registro</Text>
      </TouchableOpacity>
    </View>
  );
}
