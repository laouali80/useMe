import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Trip from "../../components/ride/Trip";
import tw from "twrnc";

const TripScreen = () => {
  return (
    <SafeAreaView
      style={tw`bg-white flex-grow rounded-tl-[20px] rounded-tr-[20px]`}
    >
      <Trip status={"approaching"} />
    </SafeAreaView>
  );
};

export default TripScreen;

const styles = StyleSheet.create({});
