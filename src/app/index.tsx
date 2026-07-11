import { Redirect } from 'expo-router';

export default function App() {
  const userData = {
    name: 'User test',
    token: 'eiwiejwieuwj',
  };

  if (userData) {
    return <Redirect href="/(private)/home" />;
  }

  return <Redirect href="/login" />;
}
