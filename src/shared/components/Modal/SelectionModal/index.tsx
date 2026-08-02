import { Text, TouchableOpacity, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import clsx from 'clsx';

import { ISelectionOption, ISelectionVariant } from '../../../hooks/useModal';
import { colors } from '../../../../styles/colors';

export type ISelectionModalProps = {
  title: string;
  message?: string;
  options: ISelectionOption[];
};

export function SelectionModal({
  title,
  message,
  options,
}: ISelectionModalProps) {
  function getButtonClass(variant: ISelectionVariant) {
    return clsx(
      'w-full flex-row items-center justify-center px-4 rounded-lg mb-2',
      {
        'bg-danger': variant === 'danger',
        'bg-blue-dark': variant === 'secondary',
        'bg-purple-base': variant === 'primary',
      }
    );
  }

  return (
    <View className="w-[85%] max-w-sm bg-white rounded-xl shadow-2xl mx-auto p-6">
      <View className="items-center">
        <Text className="text-lg font-bold text-gray-900 mb-3">{title}</Text>
      </View>

      {message && (
        <Text className="text-base text-gray-600 leading-6 mb-6">
          {message}
        </Text>
      )}

      <View className="gap-3">
        {options.map((option, index) => (
          <TouchableOpacity
            key={`selection-item=${index}`}
            className={getButtonClass(option.variant ?? 'primary')}
            activeOpacity={0.7}
            onPress={option.onPress}
          >
            {option.icon && (
              <Ionicons
                className="mr-2"
                name={option.icon}
                size={20}
                colors={colors.white}
              />
            )}

            <Text className="font-semibold text-white">{option.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
