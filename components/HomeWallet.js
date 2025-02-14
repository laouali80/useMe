import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw, { style } from "twrnc";
import { Feather, Ionicons } from "@expo/vector-icons";

const HomeWallet = () => {
  return (
    <View style={styles.walletContainer}>
      <Text style={styles.text}>Wallet Balance</Text>
      <Text style={styles.balance}>N 10,500</Text>
      <View style={styles.wrapper}>
        <View style={styles.accountNumberWrapper}>
          <Text style={styles.text}>Account Number:</Text>
          <View style={styles.account}>
            <Text style={styles.accountNumber}>1234567890</Text>
            <Pressable>
              <Ionicons name="copy-outline" size={24} color="#2158e8" />
            </Pressable>
          </View>
        </View>
        <View>
          <Pressable style={styles.addFundBtn}>
            <Feather name="plus-circle" size={24} color="white" />
            <Text style={tw`text-white`}>Fund wallet</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  walletContainer: tw`bg-[#c8d6fd] p-5 my-5 rounded-[8px]`,
  text: tw`text-[#4a4a4a] text-base`,
  balance: tw`font-bold text-[#000e33] text-2xl my-1`,
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  accountNumberWrapper: tw`flex flex-col gap-y-1`,
  account: tw`flex flex-row items-center gap-x-2 `,
  accountNumber: tw`text-[#2158e8] text-lg`,
  addFundBtn: tw`flex flex-row items-center bg-[#2358ea] p-2 gap-x-2 rounded-[5px]`,
});

export default HomeWallet;
