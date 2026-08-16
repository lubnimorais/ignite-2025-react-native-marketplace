import Constants from 'expo-constants';

export function buildImageUrl(originalUrl: string) {
  if (Boolean(Constants.expoConfig?.extra?.isProduction)) {
    return originalUrl;
  }

  return 'http://192.168.100.8:3333';
}
