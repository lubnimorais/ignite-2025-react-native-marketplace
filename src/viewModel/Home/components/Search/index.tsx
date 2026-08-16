import { Text, TouchableOpacity, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { Input } from '../../../../shared/components/Input';

import { colors } from '../../../../styles/colors';

export function Search() {
  return (
    <View className="mt-6 mb-3">
      <Text className="text-2xl font-bold mt-6">Explore Produtos</Text>

      <View className="flex-row">
        <View className="flex-1">
          <Input
            className="flex-1 text-lg"
            leftIcon="search"
            returnKeyType="search"
          />

          <TouchableOpacity className="w-[48px] h-[48px] items-center justify-center mt-6 ml-5 rounded-xl border-[1px] border-purple-base">
            <Ionicons
              name="filter-outline"
              size={24}
              color={colors['purple-base']}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
