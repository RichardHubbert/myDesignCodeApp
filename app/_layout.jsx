import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Text } from "react-native";
import LoginScreen from './../components/LoginScreen'


const tokenCache = {
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
};
export default function RootLayout() {
  useFonts({
    'outfit-Regular':require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-Thin':require('./../assets/fonts/Outfit-Thin.ttf'),
    'outfit-bold':require('./../assets/fonts/Outfit-Bold.ttf'),
  
  })
  return (
    <ClerkProvider  publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        <Stack screenOptions={{
          headerShown:false,
         
        }}>
          <Stack.Screen name="(tabs)"
       
          />
        </Stack>
      </SignedIn>
      <SignedOut>
       <LoginScreen/>
      </SignedOut>
    
    </ClerkProvider>
  );
}
