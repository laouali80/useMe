import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";

const PaymentMethodScreen = () => {
  const navigation = useNavigation();

  // Use `useLayoutEffect` to set navigation options
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Payment Method",
      headerTitleAlign: "center",
      // headerLeft: () => (
      //   <TouchableOpacity onPress={() => navigate.goBack()}>
      //     <Ionicons name="chevron-back-circle" size={30} />
      //   </TouchableOpacity>
      // ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={tw`flex p-4 h-full`}>
      <View
        style={tw`flex flex-row items-center justify-between bg-[#edf0ff] p-3 rounded-lg mb-5`}
      >
        <Image
          source={require("../../assets/shopImages/sweet.jpg")}
          style={{ width: 60, height: 50, resizeMode: "contain" }}
        />
        <View style={tw`flex flex-row items-center gap-x-2`}>
          <Text>UseMe Wallet</Text>
          <Ionicons name="checkmark-circle" size={30} color="green" />
        </View>
      </View>

      <View
        style={tw`flex flex-row items-center justify-between bg-[#edf0ff] p-3 rounded-lg mb-5`}
      >
        <Image
          source={require("../../assets/shopImages/card-pay.png")}
          style={{ width: 60, height: 50, resizeMode: "contain" }}
        />
        <View style={tw`flex flex-row items-center gap-x-2`}>
          <Text>Debit Card</Text>
          <Ionicons name="checkmark-circle" size={30} color="green" />
        </View>
      </View>

      <View
        style={tw`flex flex-row items-center justify-between bg-[#edf0ff] p-3 rounded-lg mb-5`}
      >
        <Image
          source={require("../../assets/shopImages/cash.png")}
          style={{ width: 60, height: 50, resizeMode: "contain" }}
        />
        <View style={tw`flex flex-row items-center gap-x-2`}>
          <Text>Cash</Text>
          <Ionicons name="checkmark-circle" size={30} color="green" />
        </View>
      </View>

      <TouchableOpacity style={tw`bg-[#5c89f4] items-center p-5 rounded-lg`}>
        <Text style={tw`text-white font-bold`}>CONTINUE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PaymentMethodScreen;

const styles = StyleSheet.create({});
