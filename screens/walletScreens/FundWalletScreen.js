import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import tw from "twrnc";
import {
  AntDesign,
  Feather,
  FontAwesome,
  FontAwesome6,
  Ionicons,
} from "@expo/vector-icons";
import { COLORS } from "../../constants/COLORS";
import { useNavigation } from "@react-navigation/core";

const FundWalletScreen = () => {
  const navigation = useNavigation();

  // Use `useLayoutEffect` to set navigation options
  Platform.OS === "ios"
    ? useLayoutEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <TouchableOpacity onPress={navigation.goBack}>
              <Ionicons name="chevron-back-circle" size={30} />
            </TouchableOpacity>
          ),
        });
      }, [navigation])
    : null;

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {/* Bank Transfer Info */}
        <View style={styles.walletInfo}>
          <View style={styles.sectionHeader}>
            <View style={styles.iconWrapper}>
              <FontAwesome name="bank" size={15} color={COLORS.white} />
            </View>
            <Text style={styles.primaryText}>Via bank Transfer</Text>
          </View>
          <Text style={styles.description}>
            You can make payment into your UseMe account by paying up to N10,000
            into the account below
          </Text>

          {/* Bank Details */}
          <View style={styles.bankDetails}>
            <BankDetail icon="bank" label="Bank Name" value="UseMe" />
            <BankDetail
              icon="hash"
              label="Account Number"
              value="1234567890"
              isCopyable
            />
            <BankDetail
              icon="user-large"
              label="Beneficiary"
              value="AHAMED MUHAMMED"
            />
          </View>
        </View>

        {/* OR Divider */}
        <View style={styles.barContainer}>
          <View style={styles.bar} />
          <Text>OR</Text>
          <View style={styles.bar} />
        </View>

        {/* Funding Options */}
        <FundOption
          option="USSD"
          text="Transfer using other banks code"
          onPress={() =>
            navigation.navigate("Main", { screen: "FundWithUSSD" })
          }
        />
        <FundOption
          option="Fund with debit card"
          text="Transfer using your credit card"
          onPress={() =>
            navigation.navigate("Main", { screen: "FundWithCard" })
          }
        />
      </View>
    </View>
  );
};

// Bank Detail Component
const BankDetail = ({ icon, label, value, isCopyable }) => (
  <View style={styles.detailContainer}>
    <View style={styles.iconWrapperGray}>
      {icon === "bank" ? (
        <FontAwesome name={icon} size={15} color={COLORS.black} />
      ) : icon === "hash" ? (
        <Feather name="hash" size={15} color={COLORS.black} />
      ) : (
        <FontAwesome6 name="user-large" size={15} color={COLORS.black} />
      )}
    </View>
    <View>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.accountRow}>
        <Text style={styles.accountNumber}>{value}</Text>
        {isCopyable && (
          <Pressable>
            <Ionicons name="copy-outline" size={20} color="#2158e8" />
          </Pressable>
        )}
      </View>
    </View>
  </View>
);

// Funding Option Component
const FundOption = ({ option, text, onPress }) => (
  <TouchableOpacity style={styles.option} onPress={onPress}>
    <View style={styles.iconWrapper}>
      <Feather name="hash" size={15} color={COLORS.white} />
    </View>
    <View>
      <Text style={styles.primaryText}>{option}</Text>
      <Text style={styles.optionText}>{text}</Text>
    </View>
    <AntDesign name="right" size={24} color="black" />
  </TouchableOpacity>
);

export default FundWalletScreen;

const styles = StyleSheet.create({
  container: tw`flex-1 justify-between px-5`,
  wrapper: tw`justify-center items-center flex-1`,
  walletInfo: tw`bg-[#c8d6fd] p-5 my-5 gap-y-2 rounded-lg`,
  sectionHeader: tw`flex flex-row items-center gap-x-2`,
  iconWrapper: tw`bg-[${COLORS.primary}] rounded-full p-2`,
  iconWrapperGray: tw`bg-gray-300 rounded-full p-2`,
  primaryText: tw`text-[${COLORS.primary}] text-lg font-semibold`,
  description: tw`text-[${COLORS.black}] text-[15px] font-semibold`,
  bankDetails: tw`bg-[#edf0ff] p-2.5 my-2 gap-y-4 rounded-lg`,
  detailContainer: tw`flex flex-row items-center gap-x-2`,
  text: tw`text-gray-400 text-base`,
  accountRow: tw`flex flex-row items-center gap-x-2`,
  accountNumber: tw`text-[#2158e8] text-lg`,
  barContainer: tw`flex flex-row items-center justify-center pt-4 gap-x-2 mb-5`,
  bar: tw`bg-slate-200 flex-1 h-1`,
  option: tw`flex flex-row items-center justify-between bg-[#edf0ff] p-2 rounded-lg mb-5 w-full`,
  optionText: tw`text-[${COLORS.black}]`,
});
