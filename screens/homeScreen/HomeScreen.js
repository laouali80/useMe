import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Text>Hello, Gracey,</Text>
        <Text>user profile</Text>

        <HomeWallet />
        <HomeNavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
