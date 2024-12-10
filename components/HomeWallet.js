import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

const HomeWallet = () => {
  return (
    <View style={tw`bg-[#c8d6fd] p-5 my-5`}>
      <Text style={{}}>Wallet Balance</Text>
      <Text style={tw`font-semibold text-2xl`}>N 10,500</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text>Account Number:</Text>
          <Text style={tw`text-[#5c89f4]`}>1234567890</Text>
        </View>
        <View>
          <Pressable style={tw`bg-[#2358ea] p-1`}>
            <Text>+ Fund wallet</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default HomeWallet;

const styles = StyleSheet.create({});
