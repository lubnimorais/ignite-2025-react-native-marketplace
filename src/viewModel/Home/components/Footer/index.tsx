import { ActivityIndicator, View } from 'react-native';
import { colors } from '../../../../styles/colors';

type IFooterProps = {
  isLoading: boolean;
};

export function Footer({ isLoading }: IFooterProps) {
  if (!isLoading) {
    return null;
  }

  return (
    <View>
      <ActivityIndicator size="small" color={colors['purple-base']} />
    </View>
  );
}
