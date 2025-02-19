import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";
import { COLORS } from "../../constants/COLORS";

const FundWithUSSDScreen = () => {
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

      {/* Bank Selection */}
      <Text style={styles.label}>What Bank</Text>
      <View style={styles.bankSelector}>
        <TextInput style={styles.input} placeholder="Select the Bank" />
        <TouchableOpacity>
          <AntDesign name="down" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Instructions & Button */}
      <View style={styles.footer}>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Select UseMe from the bank list provided to you
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Dial USSD code</Text>
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
  bankSelector: tw`flex flex-row items-center bg-[#edf0ff] p-3 rounded-lg mb-5`,
  footer: tw`mt-auto`,
  infoBox: tw`flex flex-row items-center justify-center bg-[#edf0ff] p-8 rounded-lg mb-5`,
  infoText: tw`text-base text-center`,
  button: tw`bg-[${COLORS.primary}] items-center p-5 rounded-lg mb-2`,
  buttonText: tw`text-white font-bold`,
});

export default FundWithUSSDScreen;
