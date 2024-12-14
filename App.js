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
import Login from "./screens/authScreens/LoginScreen";
// import MapScreen from "./screens/rideScreens/mapScreen";
import Onboarding from "./screens/onboardingScreens/Onboarding";
import mainNavigation from "./navigation/mainNavigation";

export default function App() {
  const AppNavigator = mainNavigation();
  return (
    <SafeAreaProvider>
      {/* this SafeAreaProvider is to protect the icons from danger zone (react elements) */}

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
      >
        <AppNavigator />
      </KeyboardAvoidingView>
    </SafeAreaProvider>
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
