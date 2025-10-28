import { Stack } from "expo-router";
import {StatusBar} from "expo-status-bar";
import {LogBox} from "react-native";
LogBox.ignoreAllLogs (true);



export default function RootLayout() {
  return (
    <>
-    <Stack
    screenOptions={{
      headerStyle: {
          backgroundColor: '#37ddfa',
      },
      headerShadowVisible: false,
      headerTintColor: '#fff',
      
  }}
    >
    
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen name="+not-found" options={{}}/>
    </Stack>
    </>
  );
}