import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const DeliveryScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Delivery Address",
      headerTitleAlign: "center",
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <InputField label="Name" placeholder="Enter your first name" />
      <InputField label="Surname" placeholder="Enter your surname" />
      <InputField label="Address" placeholder="Enter your address" />
      <InputField
        label="Phone Number"
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("PaymentMethod")}
      >
        <Text style={styles.buttonText}>CONTINUE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// Reusable Input Component
const InputField = ({ label, placeholder, keyboardType = "default" }) => (
  <>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </View>
  </>
);

export default DeliveryScreen;

const styles = StyleSheet.create({
  container: tw`flex p-4 h-full`,
  label: tw`text-gray-500 font-bold text-lg mb-1`,
  inputContainer: tw`flex flex-row items-center bg-[#edf0ff] p-3 rounded-lg mb-5`,
  input: tw`flex-1 font-semibold`,
  button: tw`bg-[#5c89f4] items-center p-5 rounded-lg`,
  buttonText: tw`text-white font-bold`,
});
