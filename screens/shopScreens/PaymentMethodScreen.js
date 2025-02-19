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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Payment Method",
      headerTitleAlign: "center",
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <PaymentOption
        image={require("../../assets/shopImages/sweet.jpg")}
        label="UseMe Wallet"
      />
      <PaymentOption
        image={require("../../assets/shopImages/card-pay.png")}
        label="Debit Card"
      />
      <PaymentOption
        image={require("../../assets/shopImages/cash.png")}
        label="Cash"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>CONTINUE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// Reusable Payment Option Component
const PaymentOption = ({ image, label }) => (
  <View style={styles.optionContainer}>
    <Image source={image} style={styles.image} />
    <View style={styles.optionTextContainer}>
      <Text style={styles.optionText}>{label}</Text>
      <Ionicons name="checkmark-circle" size={30} color="green" />
    </View>
  </View>
);

export default PaymentMethodScreen;

const styles = StyleSheet.create({
  container: tw`flex p-4 h-full`,
  optionContainer: tw`flex flex-row items-center justify-between bg-[#edf0ff] p-3 rounded-lg mb-5`,
  optionTextContainer: tw`flex flex-row items-center gap-x-2`,
  optionText: tw`text-black`,
  image: { width: 60, height: 50, resizeMode: "contain" },
  button: tw`bg-[#5c89f4] items-center p-5 rounded-lg`,
  buttonText: tw`text-white font-bold`,
});
