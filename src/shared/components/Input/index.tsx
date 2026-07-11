import { Pressable, Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { IInputVariantsProps, inputVariants } from './input.variants';

type IInputProps = TextInputProps &
  IInputVariantsProps & {
    label?: string;
    leftIcon?: keyof typeof Ionicons.glyphMap;
    rightIcon?: keyof typeof Ionicons.glyphMap;
    containerClassName?: string;
    mask?: (value: string) => void | string;
  };

export function Input({
  label,
  leftIcon,
  rightIcon,
  className,
  containerClassName,
  mask,
  ...rest
}: IInputProps) {
  const styles = inputVariants({});

  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label()}>Label</Text>

      <Pressable className={styles.wrapper()}>
        <Ionicons name="person" size={22} />

        <TextInput className={styles.input({ className })} {...rest} />

        <TouchableOpacity>
          <Ionicons name="eye-off-outline" size={22} />
        </TouchableOpacity>
      </Pressable>
    </View>
  );
}
