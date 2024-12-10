import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

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
    <View>
      <View>
        <Image source={{}} style={{ aspectRatio: 1, resizeMode: "cover" }} />
      </View>
      <View>
        <Text>Choose Your Destination</Text>
        <Text>
          With UseMe you can choose your destination from your location and
          expect a ride in less than 10 mins.
        </Text>
        <Text>---</Text>
        <Button title="Continue" style={{}} onPress={{}} />
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
