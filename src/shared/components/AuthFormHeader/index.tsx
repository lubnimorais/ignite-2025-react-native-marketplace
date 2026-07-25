import { Image, Text, View } from 'react-native';

import Logo from '../../../assets/images/Logo.png';

type IAuthFormHeaderProps = {
  title: string;
  subtitle: string;
};

export function AuthFormHeader({ title, subtitle }: IAuthFormHeaderProps) {
  return (
    <View className="items-center mb-8">
      <Image source={Logo} className="w-[80px] h-[60px] mb-8" resizeMode="contain" />

      <Text className="text-3xl font-bold text-gray-500 mb-3">{title}</Text>

      <Text className="text-base text-gray-300">{subtitle}</Text>
    </View>
  );
}
