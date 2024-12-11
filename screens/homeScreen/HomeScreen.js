import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import HomeWallet from "../../components/HomeWallet";
import HomeNavOptions from "../../components/HomeNavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-[#fafbff] h-full w-full`}>
      <View style={tw`p-5`}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text>Hello, Gracey,</Text>
          <Text>user profile</Text>
        </View>

        <HomeWallet />
        <HomeNavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
