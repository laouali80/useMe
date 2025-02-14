import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const onboardCards = [
  {
    id: 1,
    image: require("../../assets/onboarding/stud1.webp"),
    title: "Choose Your Destination",
    description: `With UseMe you can choose your destination from your location and expect a ride in less than 10 mins.`,
  },
  {
    id: 2,
    image: require("../../assets/onboarding/studpho2.webp"),
    title: "Shop From Your Confort Zone",
    description: `At your confort place you can easy order or buy any products.`,
  },
  {
    id: 3,
    image: require("../../assets/onboarding/sh2.jpg"),
    title: "Call Your Rider or Delivery Man",
    description: `UseMe provides you with all information of your rider and selling man. You can reach their line for any additional information.`,
  },
];

const Onboarding = () => {
  const [state, setState] = useState(onboardCards[0]);
  const navigation = useNavigation();

  const nextBoard = () => {
    setState(state.id === 2 ? onboardCards[2] : onboardCards[1]);
  };

  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      {state.id !== 3 && (
        <TouchableOpacity
          onPress={() => navigateTo("Login")}
          style={styles.skipButton}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      )}

      <View style={styles.imageContainer}>
        <Image source={state.image} style={styles.image} resizeMode="cover" />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{state.title}</Text>
        <Text style={styles.description}>{state.description}</Text>

        <View style={styles.indicatorContainer}>
          {[1, 2, 3].map((id) => (
            <View
              key={id}
              style={
                state.id === id
                  ? styles.activeIndicator
                  : styles.inactiveIndicator
              }
            />
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={state.id !== 3 ? nextBoard : () => navigateTo("SignUp")}
            style={styles.primaryButton}
          >
            <Text style={styles.primaryButtonText}>
              {state.id !== 3 ? "Continue" : "Create Account"}
            </Text>
          </TouchableOpacity>

          {state.id === 3 && (
            <TouchableOpacity
              onPress={() => navigateTo("Login")}
              style={styles.secondaryButton}
            >
              <Text style={styles.secondaryButtonText}>Login</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: tw`bg-white h-full w-full`,
  skipButton: tw`bg-gray-950/50 absolute top-16 right-8 z-50 py-3 px-4 rounded-md shadow-lg`,
  skipText: tw`text-white`,
  imageContainer: tw`h-[60%]`,
  image: tw`flex-1`,
  contentContainer: tw`h-[40%] py-5 px-8`,
  title: tw`text-center font-semibold text-xl text-[#2358ea]`,
  description: tw`text-gray-400 font-medium text-base text-center`,
  indicatorContainer: tw`flex flex-row justify-center pt-4 gap-x-2`,
  activeIndicator: tw`bg-orange-300 w-8 h-1`,
  inactiveIndicator: tw`bg-slate-200 w-4 h-1`,
  buttonContainer: tw`mt-auto`,
  primaryButton: tw`bg-[#2358ea] items-center p-5 rounded-lg mb-2`,
  primaryButtonText: tw`text-white font-bold`,
  secondaryButton: tw`border border-[#2358ea] items-center p-5 rounded-lg mb-2`,
  secondaryButtonText: tw`text-[#2358ea] font-bold`,
});

export default Onboarding;
