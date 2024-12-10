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
import MapScreen from "./screens//rideScreens/MapScreen";

import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
      >
        <MapScreen />
      </KeyboardAvoidingView>
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
