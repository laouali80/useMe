import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";

const OnboardCards = [
  {
    id: 1,
    image: "img1",
    title: "Choose Your Destination",
    description: `With UseMe you can choose your destination from your location and expect a ride in less than 10 mins.`,
  },
  {
    id: 2,
    image: "img2",
    title: "Shop From Your Confort Zone",
    description: `At your confort place you can easy order or buy any products.`,
  },
  {
    id: 3,
    image: "img3",
    title: "Call Your Rider or Delivery Man",
    description: `UseMe provides you with all information of your rider and selling man. You can reach their line for any additional information.`,
  },
];
const Onboarding = () => {
  return (
    <View style={tw`bg-white h-full w-full`}>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={tw`bg-gray-950/50 absolute top-16 right-8 z-50 py-3 px-4 rounded-md shadow-lg`}
      >
        <Text style={tw`text-white`}>Skip</Text>
      </TouchableOpacity>

      <View style={tw`h-[60%]`}>
        <Image
          source={require("../../assets/onboarding/stud1.webp")}
          style={{ resizeMode: "cover", flex: 1 }}
        />
      </View>
      <View style={tw`h-[40%] py-5 px-8`}>
        <Text style={tw`text-center font-semibold text-2xl text-[#2358ea]`}>
          Choose Your Destination
        </Text>
        <Text style={tw`text-gray-400 font-medium text-base text-center`}>
          With UseMe you can choose your destination from your location and
          expect a ride in less than 10 mins.
        </Text>
        <View style={tw`flex flex-row justify-center pt-4 gap-x-2`}>
          <View style={tw`bg-orange-300 w-8 h-1`}></View>
          <View style={tw`bg-slate-200 w-4 h-1`}></View>
          <View style={tw`bg-slate-200 w-4 h-1`}></View>
        </View>
        <TouchableOpacity
          style={tw`bg-[#2358ea] items-center mt-auto p-5 rounded-lg mb-2`}
        >
          <Text style={tw`text-white font-bold`}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
