import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useProductCardViewModel } from './useProductCard.viewModel';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../../styles/colors';

export function ProductCardView({
  product,
}: ReturnType<typeof useProductCardViewModel>) {
  return (
    <TouchableOpacity
      className="w-[48px] h-[157px] bg-white my-1 rounded-xl shadow-sm overflow-hidden mb-2 p-[4px]"
      activeOpacity={0.7}
    >
      <View>
        <Image
          className="w-full h-[96px] rounded-[6px]"
          source={{ uri: product.photo }}
          resizeMode="cover"
        />

        <View className="flex-row items-center bg-white absolute top-0 right-0 px-2 py-1 rounded-b-lg rounded-r-none">
          <Ionicons name="star" size={12} color={colors['blue-base']} />

          <Text className="text-sm font-semibold ml-1">
            {product.ratingCount}
          </Text>
        </View>
      </View>

      <View className="p-3">
        <Text className="text-xs font-semibold mb-1" numberOfLines={2}>
          {product.name}
        </Text>

        <View className="flex-row items-center justify-between">
          <Text>R$ {product.value}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
