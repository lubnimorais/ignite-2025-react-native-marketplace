import { useRef, useState } from 'react';

import { BlurEvent, FocusEvent, TextInput } from 'react-native';

import { colors } from '../../../styles/colors';

type IInputViewModelProps = {
  value?: string;
  secureTextEntry?: boolean;
  isError?: boolean;
  isDisabled?: boolean;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: BlurEvent) => void;
  mask?: (text: string) => string | void;
  onChangeText?: (text: string) => string | void;
};

export function useInputViewModel({
  value,
  secureTextEntry,
  isError,
  isDisabled,
  onFocus,
  onBlur,
  mask,
  onChangeText,
}: IInputViewModelProps) {
  const [showPassword, setShowPassword] = useState(secureTextEntry);
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<TextInput>(null);

  // INPUT SERÁ FOCADO E ABRIRÁ O TECLADO
  function handleWrapperPress() {
    inputRef.current?.focus();
  }

  // SERÁ CHAMADO QUANDO FOCARMOS O INPUT
  function handleFocus(event: FocusEvent) {
    setIsFocused(true);
    onFocus?.(event);
  }

  function handleBlur(event: BlurEvent) {
    setIsFocused(false);
    onBlur?.(event);
  }

  function handlePasswordToggle() {
    setShowPassword((oldState) => !oldState);
  }

  function getIconColor() {
    if (isError) return colors.danger;

    if (isFocused) return colors['purple-base'];

    if (value) return colors['purple-base'];

    return colors.gray[200];
  }

  function handleTextChange(text: string) {
    if (mask) {
      onChangeText?.(mask(text) || '');
    } else {
      onChangeText?.(text);
    }
  }

  return {
    isFocused,
    showPassword,
    handleWrapperPress,
    handleFocus,
    handleBlur,
    handlePasswordToggle,
    getIconColor,
    handleTextChange,
  };
}
