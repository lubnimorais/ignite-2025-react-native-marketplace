import { Image, Text, TouchableOpacity, View } from 'react-native';

import { router } from 'expo-router';

import { useRegisterViewModel } from './useRegister.viewModel';

import { InputController } from '../../shared/components/InputController';
import { AuthFormHeader } from '../../shared/components/AuthFormHeader';
import { KeyboardContainer } from '../../shared/components/KeyboardContainer';
import { Button } from '../../shared/components/Button';
import { Ionicons } from '@expo/vector-icons';

/**
 * Essa tipagem quer dizer que o RegisterView vai receber todos
 * os parâmentos que o custom hook userRegisterViewModel
 *   está retornado
 */
export function RegisterView({
  control,
  errors,
  avatarUri,
  handleSelectAvatar,
  onSubmit,
}: ReturnType<typeof useRegisterViewModel>) {
  return (
    <KeyboardContainer>
      <View className="flex-1 items-center justify-center px-[40px]">
        <AuthFormHeader
          title="Crie sua conta"
          subtitle="Informe os seus dados pessoais e de acesso"
        />

        <TouchableOpacity
          className="w-[120px] h-[120px] items-center justify-center self-center rounded-[12px] bg-shape mb-8"
          activeOpacity={0.7}
          onPress={handleSelectAvatar}
        >
          {avatarUri ? (
            <Image
              className="w-full h-full rounded-[12px]"
              source={{ uri: avatarUri }}
              resizeMode="cover"
            />
          ) : (
            <Ionicons name="cloud-upload-outline" size={32} />
          )}
        </TouchableOpacity>

        <InputController
          control={control}
          name="name"
          leftIcon="person-outline"
          label="NOME"
          placeholder="Seu nome completo"
          errors={errors}
        />

        <InputController
          control={control}
          name="phone"
          leftIcon="call-outline"
          label="TELEFONE"
          placeholder="(00) 00000-0000"
          errors={errors}
        />

        <Text className="text-base font-bold text-gray-500 mt-6">Acesso</Text>

        <InputController
          control={control}
          name="email"
          leftIcon="mail-outline"
          label="E-MAIL"
          placeholder="mail@example.com.br"
          errors={errors}
        />

        <InputController
          control={control}
          name="password"
          leftIcon="lock-closed-outline"
          label="SENHA"
          errors={errors}
          secureTextEntry
          placeholder="sua senha"
        />

        <InputController
          leftIcon="lock-closed-outline"
          label="CONFIRMAR SENHA"
          control={control}
          name="confirmPassword"
          errors={errors}
          secureTextEntry
          placeholder="confirme sua senha"
        />

        <Button className="mt-6" title="Registrar" onPress={onSubmit} />

        <View className="mt-16">
          <Text className="text-base text-gray-300 mb-6">
            Já tem uma conta?
          </Text>

          <Button
            title="Login"
            variant="outlined"
            onPress={() => router.push('/(public)/login')}
          />
        </View>
      </View>
    </KeyboardContainer>
  );
}
