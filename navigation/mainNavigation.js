import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";
import Onboarding from "../screens/onboardingScreens/Onboarding";
import LoginScreen from "../screens/authScreens/LoginScreen";
import SignupScreen from "../screens/authScreens/SignupScreen";
import HomeScreen from "../screens/homeScreen/HomeScreen";
import MapScreen from "../screens/rideScreens/mapScreen";
import CategoriesDisplaySreen from "../screens/shopScreens/CategoriesDisplaySreen";
import CategoryProductsListScreen from "../screens/shopScreens/CategoryProductsListScreen";
import ProductDetailsScreen from "../screens/shopScreens/ProductDetailsScreen";
import CartScreen from "../screens/shopScreens/CartScreen";
import DeliveryScreen from "../screens/shopScreens/DeliveryScreen";

const mainNavigation = () => {
  const mainNav = createNativeStackNavigator({
    screenOptions: { gestureEnabled: true },
    screens: {
      Ride: {
        screen: MapScreen,
        options: {
          headerShown: false,
        },
      },
      Shop: {
        screen: CategoriesDisplaySreen,
        options: {
          headerShown: false,
        },
      },
      ProductsList: {
        screen: CategoryProductsListScreen,
        options: {
          headerShown: false,
        },
      },
      ProductDetails: {
        screen: ProductDetailsScreen,
        options: {
          headerShown: false,
        },
      },
      Cart: {
        screen: CartScreen,
        options: {
          headerShown: true,
        },
      },
      DeliveryInfo: {
        screen: DeliveryScreen,
      },
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
