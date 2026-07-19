import { Pressable, Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { IInputVariantsProps, inputVariants } from './input.variants';
import { useInputViewModel } from './useInputViewModel';

export type IInputProps = TextInputProps &
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
  isDisabled,
  leftIcon,
  rightIcon,
  className,
  containerClassName,
  isError,
  error,
  secureTextEntry = false,
  mask,
  onChangeText,
  onFocus,
  onBlur,
  ...rest
}: IInputProps) {
  const {
    isFocused,
    getIconColor,
    showPassword,
    handleWrapperPress,
    handlePasswordToggle,
    handleFocus,
    handleBlur,
    handleTextChange,
  } = useInputViewModel({
    value,
    isError: !!error,
    secureTextEntry,
    isDisabled,
    mask,
    onChangeText,
    onFocus,
    onBlur,
  });

  const styles = inputVariants({
    isFocused,
    isDisabled,
    isError: !!error,
  });

  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label()}>{label}</Text>

      <Pressable className={styles.wrapper()}>
        {leftIcon && <Ionicons className="mr-3" name={leftIcon} size={22} color={getIconColor()} />}

        <TextInput
          className={styles.input({ className })}
          secureTextEntry={showPassword}
          onBlur={handleBlur}
          onFocus={handleFocus}
          value={value}
          onChangeText={handleTextChange}
          {...rest}
        />

        {showPassword && (
          <TouchableOpacity activeOpacity={0.7} onPress={handlePasswordToggle}>
            <Ionicons name={showPassword ? 'eye-outline' : 'eye-off-outline'} size={22} />
          </TouchableOpacity>
        )}
      </Pressable>

      {error && (
        <Text className={styles.error()}>
          <Ionicons name="alert-circle-outline" /> {error}
        </Text>
      )}
    </View>
  );
}
