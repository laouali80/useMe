import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";

const mainNavigation = () => {
  const WelcomingNavigation = createNativeStackNavigator({
    screenOptions: { gestureEnabled: false, headerShown: false },
    initialRouteName: "Onboarding",
    screens: {
      Onboarding: {
        screen: AddContactScreen,
        initialParams: {
          handleSubmit: addContact,
        },
      },
      Login: {
        screen: ContactListScreen,
        initialParams: {
          contacts: contacts,
          loading: loading,
        },
      },
      SignUp: {
        screen: ContactListScreen,
        initialParams: {
          contacts: contacts,
          loading: loading,
        },
      },
    },
  });

  const switchNav = createStaticNavigation(SwitchNavigation);
  return (
    <View>
      <Text>mainNavigation</Text>
    </View>
  );
};

export default mainNavigation;

const styles = StyleSheet.create({});
