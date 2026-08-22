import { Text, TouchableOpacity, View } from 'react-native';
import { useFilterViewModel } from './useFilter.viewModel';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../../styles/colors';
import { Input } from '../../../../shared/components/Input';
import { Button } from '../../../../shared/components/Button';

export function FilterView(props: ReturnType<typeof useFilterViewModel>) {
  return (
    <View>
      <View className="flex-row items-center justify-between p-4 px-6">
        <Text className="text-lg font-bold text-gray-900">
          Filtrar anúncios
        </Text>

        <TouchableOpacity activeOpacity={0.7}>
          <Ionicons name="close" size={20} color={colors['purple-base']} />
        </TouchableOpacity>
      </View>

      <View className="p-4 px-6">
        <Text className="font-semibold text-base text-gray-300">VALOR</Text>

        <View className="w-[100%] flex-row">
          <View className="flex-1">
            <Input
              placeholder="De"
              keyboardType="numeric"
              containerClassName="w-[90%]"
            />
          </View>

          <View className="flex-1">
            <Input
              placeholder="De"
              keyboardType="numeric"
              containerClassName="w-[90%]"
            />
          </View>
        </View>

        <Text className="font-semibold text-base text-gray-300">CATEGORIA</Text>

        <View className="flex-row gap-3 mt-4 mb-6">
          <View className="flex-1">
            <Button title="Limpar filtro" variant="outlined" />
          </View>

          <View className="flex-1">
            <Button title="Limpar filtro" />
          </View>
        </View>
      </View>
    </View>
  );
}
