import { Text, TouchableOpacity, View } from 'react-native';
import { ISelectionOption } from '../../../hooks/useModal';
import { Ionicons } from '@expo/vector-icons';

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
  return (
    <View className="w-[85%] max-w-sm bg-white rounded-xl shadow-2xl mx-auto p-6">
      <Text>{title}</Text>

      {message && <Text>{message}</Text>}

      <View>
        {options.map((option) => (
          <TouchableOpacity
            className="w-full flex-row items-center justify-center px-4 rounded-lg mb-2"
            activeOpacity={0.7}
            onPress={option.onPress}
          >
            {option.icon && <Ionicons name={option.icon} size={20} />}

            <Text>{option.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
