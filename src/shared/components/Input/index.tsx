import { Pressable, Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { IInputVariantsProps, inputVariants } from './input.variants';
import { useInputViewModel } from './useInputViewModel';

type IInputProps = TextInputProps &
  IInputVariantsProps & {
    label?: string;
    leftIcon?: keyof typeof Ionicons.glyphMap;
    rightIcon?: keyof typeof Ionicons.glyphMap;
    containerClassName?: string;
    error?: string;
    mask?: (value: string) => void | string;
  };

export function Input({
  label,
  value,
  leftIcon,
  rightIcon,
  className,
  containerClassName,
  isError,
  error,
  secureTextEntry = true,
  mask,
  onChangeText,
  onFocus,
  onBlur,
  ...rest
}: IInputProps) {
  const {
    isFocused,
    getIconColor,
    handleWrapperPress,
    handlePasswordToggle,
    handleFocus,
    handleBlur,
    handleTextChange,
  } = useInputViewModel({
    value,
    isError: !!error,
    secureTextEntry,
    error,
    mask,
    onChangeText,
    onFocus,
    onBlur,
  });

  const styles = inputVariants({
    isFocused,
  });

  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label()}>{label}</Text>

      <Pressable className={styles.wrapper()}>
        {leftIcon && <Ionicons className="mr-3" name={leftIcon} size={22} color={getIconColor()} />}

        <TextInput
          className={styles.input({ className })}
          onBlur={handleBlur}
          onFocus={handleFocus}
          value={value}
          onChangeText={handleTextChange}
          {...rest}
        />

        <TouchableOpacity>
          <Ionicons name="eye-off-outline" size={22} />
        </TouchableOpacity>
      </Pressable>
    </View>
  );
}
