import { Text, TouchableOpacity, View } from "react-native";

import { router } from "expo-router";

import '../styles/global.css';

export default function App() {
  return (
    <View>
      <Text>Hello World!</Text>

      <TouchableOpacity onPress={() => { router.push('login')}}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}