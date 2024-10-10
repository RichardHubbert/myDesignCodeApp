
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Text } from "react-native";
import LoginScreen from './../components/LoginScreen'


/* const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
}; */
export default function RootLayout() {
      return (
        <Stack screenOptions={{headerShown:false}}>
          <Stack.Screen name="(back)" />
        </Stack>

  ); 
}
