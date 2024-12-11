import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Trip from "../../components/ride/Trip";

const TripScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <Trip status={"approaching"} />
    </SafeAreaView>
  );
};

export default TripScreen;

const styles = StyleSheet.create({});
