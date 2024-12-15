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

  useEffect(() => {}, [state]);

  const nextBoard = (skip) => {
    if (state.id === 2) {
      setState(onboardCards[2]);
      return;
    }

    setState(onboardCards[1]);
  };

  const _loginPage = () => {
    navigation.navigate("Login");
  };

  const _signUpPage = () => {
    navigation.navigate("SignUp");
  };
  return (
    <View style={tw`bg-white h-full w-full`}>
      <TouchableOpacity
        // onPress={() => nextBoard("skip")}
        style={tw`bg-gray-950/50 absolute top-16 right-8 z-50 py-3 px-4 rounded-md shadow-lg`}
      >
        <Text style={tw`text-white`}>Skip</Text>
      </TouchableOpacity>

      <View style={tw`h-[60%]`}>
        <Image
          // source={require("../../assets/onboarding/stud1.webp")}
          source={state.image}
          style={{ resizeMode: "cover", flex: 1 }}
        />
      </View>
      <View style={tw`h-[40%] py-5 px-8`}>
        <Text style={tw`text-center font-semibold text-xl text-[#2358ea]`}>
          {/* Choose Your Destination */}
          {state.title}
        </Text>
        <Text style={tw`text-gray-400 font-medium text-base text-center`}>
          {/* With UseMe you can choose your destination from your location and
          expect a ride in less than 10 mins. */}
          {state.description}
        </Text>
        <View style={tw`flex flex-row justify-center pt-4 gap-x-2`}>
          <View
            style={tw`bg-${
              state.id === 1 ? "orange-300 w-8 " : "slate-200 w-4"
            } h-1`}
          ></View>
          <View
            style={tw`bg-${
              state.id === 2 ? "orange-300 w-8 " : "slate-200 w-4"
            }h-1`}
          ></View>
          <View
            style={tw`bg-${
              state.id === 3 ? "orange-300 w-8 " : "slate-200 w-4"
            } h-1`}
          ></View>
        </View>

        <View style={tw`mt-auto`}>
          <TouchableOpacity
            onPress={state.id !== 3 ? nextBoard : _signUpPage}
            style={tw`bg-[#2358ea] items-center p-5 rounded-lg mb-2`}
          >
            <Text style={tw`text-white font-bold`}>
              {state.id !== 3 ? "Continue" : "Create Account"}
            </Text>
          </TouchableOpacity>
          {state.id === 3 ? (
            <TouchableOpacity
              onPress={_loginPage}
              style={tw` border border-[#2358ea] items-center p-5 rounded-lg mb-2`}
            >
              <Text style={tw`text-[#2358ea] font-bold`}>Login</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
