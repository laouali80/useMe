import {
  KeyboardAvoidingView,
  Platform,
  PlatformColor,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import mainNavigation from "./navigation/mainNavigation";

export default function App() {
  const AppNavigator = mainNavigation();
  const colorScheme = useColorScheme(); // Detects light or dark mode

  const isDarkMode = colorScheme === "dark";
  const statusBarStyle = isDarkMode ? "light-content" : "dark-content";

  return (
    <SafeAreaProvider>
      {/* this SafeAreaProvider is to protect the icons from danger zone (react elements) */}

      <KeyboardAvoidingView
        behavior={PlatformColor.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
      >
        <StatusBar
          barStyle={statusBarStyle}
          backgroundColor={isDarkMode ? "#000" : "#fff"}
          translucent={true}
        />
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
