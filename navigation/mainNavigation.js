import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";
import Onboarding from "../screens/onboardingScreens/Onboarding";
import LoginScreen from "../screens/authScreens/LoginScreen";
import SignupScreen from "../screens/authScreens/SignupScreen";
import HomeScreen from "../screens/homeScreen/HomeScreen";
import MapScreen from "../screens/rideScreens/mapScreen";

const mainNavigation = () => {
  const mainNav = createNativeStackNavigator({
    screenOptions: { gestureEnabled: false, headerShown: false },
    screens: {
      Ride: MapScreen,
      // Shop: LoginScreen,
      // SignUp: SignupScreen,
      // HomePage: HomeScreen,
    },
  });

  const WelcomingNavigation = createNativeStackNavigator({
    screenOptions: { gestureEnabled: false, headerShown: false },
    initialRouteName: "Onboarding",
    screens: {
      Onboarding: Onboarding,
      Login: LoginScreen,
      SignUp: SignupScreen,
      HomePage: HomeScreen,
      Main: mainNav,
    },
  });

  const appNav = createStaticNavigation(WelcomingNavigation);
  return appNav;
};

export default mainNavigation;
