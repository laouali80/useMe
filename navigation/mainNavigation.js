import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";
import Onboarding from "../screens/onboardingScreens/Onboarding";
import LoginScreen from "../screens/authScreens/LoginScreen";
import SignupScreen from "../screens/authScreens/SignupScreen";
import HomeScreen from "../screens/homeScreen/HomeScreen";
import MapScreen from "../screens/rideScreens/mapScreen";
import CategoriesDisplaySreen from "../screens/shopScreens/CategoriesDisplaySreen";
import CategoryProductsListScreen from "../screens/shopScreens/CategoryProductsListScreen";

const mainNavigation = () => {
  const mainNav = createNativeStackNavigator({
    screenOptions: { gestureEnabled: false, headerShown: false },
    screens: {
      Ride: MapScreen,
      Shop: CategoriesDisplaySreen,
      ProductsList: CategoryProductsListScreen,
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
