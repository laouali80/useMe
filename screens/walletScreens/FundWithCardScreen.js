import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import tw from "twrnc";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/COLORS";
import { useNavigation } from "@react-navigation/core";

const FundWithCardScreen = () => {
  return (
    <View style={styles.container}>
      {/* Funding Amount */}
      <Text style={styles.label}>How much do you want to fund?</Text>
      <View style={styles.inputWrapper}>
        <View style={styles.currencyIcon}>
          <FontAwesome6 name="naira-sign" size={24} color={COLORS.white} />
        </View>
        <TextInput style={styles.input} placeholder="Enter the amount" />
      </View>

      {/* Card Details */}
      <Text style={styles.label}>Card Details</Text>
      <View style={styles.cardDetails}>
        <Image
          source={require("../../assets/shopImages/card-pay.png")}
          style={styles.cardImage}
        />
        <TextInput
          style={styles.input}
          placeholder="5399 **** **** **** ****"
          textContentType="creditCardNumber"
        />
      </View>

      {/* CVV & Exp. Date */}
      <View style={styles.row}>
        <View style={styles.flex1}>
          <Text style={styles.label}>Exp. Date</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="04 / 2028"
              textContentType="creditCardExpiration"
            />
          </View>
        </View>

        <View style={styles.flex1}>
          <Text style={styles.label}>CVV</Text>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="..." />
          </View>
        </View>
      </View>

      {/* Continue Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: tw`flex-1 justify-between px-5 my-6`,
  label: tw`text-gray-500 font-medium mb-1`,
  inputWrapper: tw`flex flex-row items-center bg-[#edf0ff] rounded-lg gap-x-3 mb-5 p-2`,
  currencyIcon: tw`bg-[${COLORS.primary}] p-3 rounded-tl-lg rounded-bl-lg`,
  input: tw`flex-1 font-semibold`,
  cardDetails: tw`flex flex-row items-center bg-[#edf0ff] p-2 gap-x-3 rounded-lg mb-5`,
  cardImage: { width: 60, height: 50, resizeMode: "contain" },
  row: tw`flex flex-row justify-between gap-x-6`,
  flex1: tw`flex-1`,
  footer: tw`mt-auto`,
  button: tw`bg-[${COLORS.primary}] items-center p-5 rounded-lg mb-2`,
  buttonText: tw`text-white font-bold`,
});

export default FundWithCardScreen;
