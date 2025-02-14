import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import tw from "twrnc";
import HomeWallet from "../../components/HomeWallet";
import HomeNavOptions from "../../components/HomeNavOptions";

import Header from "../../components/share/Header";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-[#fafbff] h-full w-full`}>
      <View style={tw`px-5 py-${Platform.OS === "ios" ? "2" : "10"}`}>
        <Header type="welcome" />
        <HomeWallet />
        <HomeNavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
