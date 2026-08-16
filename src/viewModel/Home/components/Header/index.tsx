import { Image, Text, TouchableOpacity, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { useUserStore } from '../../../../shared/store/user-store';

import { colors } from '../../../../styles/colors';

export function HomeHeader() {
  const { user } = useUserStore();

  return (
    <View>
      <TouchableOpacity className="flex-row items-center gap-6">
        <View className="relative">
          {user?.avatarUrl ? (
            <Image
              source={{ uri: user?.avatarUrl }}
              className="w-[56px] h-[56px] rounded-[12px] border-shape"
            />
          ) : (
            <View className="w-[56px] h-[56px] items-center justify-center bg-shape rounded-[12px] border-2 border-gray-200">
              <Ionicons name="person" size={24} color={colors.gray[300]} />
            </View>
          )}
        </View>

        <View>
          <Text className="text-base font-bold">
            Olá, {user?.name.split(' ')[0] || 'Usuário'}
          </Text>

          <View className="flex-row items-center gap-2">
            <Text className="text-sm font-bold color-purple-base">
              Ver perfil
            </Text>

            <Ionicons
              name="arrow-forward-outline"
              size={20}
              color={colors['purple-base']}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
