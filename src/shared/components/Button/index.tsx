import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { colors } from '../../../styles/colors';

import { buttonVariants, ButtonVariantsEnum, IButtonVariantsProps } from './button.variantes';

type IButtonProps = TouchableOpacityProps &
  IButtonVariantsProps & {
    title: string;
    leftIcon?: keyof typeof Ionicons.glyphMap;
    rightIcon?: keyof typeof Ionicons.glyphMap;
  };

export function Button({
  title,
  leftIcon,
  rightIcon,
  isLoading,
  isDisabled,
  variant = 'filled',
  className,
  ...rest
}: IButtonProps) {
  const styles = buttonVariants({
    hasIcon: !!leftIcon || !!rightIcon,
    isLoading,
    isDisabled,
    variant,
  });

  const contentColor = variant === ButtonVariantsEnum.FILLED ? colors.white : colors['purple-base'];

  function renderContent() {
    if (isLoading) {
      return <ActivityIndicator size="small" color={contentColor} />;
    }

    return (
      <>
        {leftIcon && <Ionicons name={leftIcon} color={contentColor} />}

        <Text className={styles.text()}>{title}</Text>

        {rightIcon && <Ionicons name={rightIcon} color={contentColor} />}
      </>
    );
  }

  return (
    <TouchableOpacity className={styles.base({ className })} activeOpacity={0.7} {...rest}>
      {renderContent()}
    </TouchableOpacity>
  );
}
