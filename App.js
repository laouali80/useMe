import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
// import Login from "./screens/authScreens/LoginScreen";
import Signup from "./screens/authScreens/SignupScreen";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
// import MapScreen from "./screens/rideScreens/mapScreen";

export default function App() {
  return (
    <NavigationContainer>
      {/* this SafeAreaProvider is to protect the icons from danger zone (react elements) */}
      <SafeAreaProvider>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
        >
          <Signup />
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
