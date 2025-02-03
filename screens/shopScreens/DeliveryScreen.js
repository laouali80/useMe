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

  // Use `useLayoutEffect` to set navigation options
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Delivery Address",
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
      {/* NAME */}
      <Text style={tw`text-gray-500 font-bold text-lg mb-1`}>Name</Text>
      <View
        style={tw`flex flex-row items-center bg-[#edf0ff] p-3 rounded-lg mb-5`}
      >
        <TextInput
          placeholder="Enter your first name"
          style={tw`flex-1 font-semibold`}
        />
      </View>

      {/* SURNAME */}
      <Text style={tw`text-gray-500 font-bold text-lg mb-1`}>Surname</Text>
      <View
        style={tw`flex flex-row items-center bg-[#edf0ff] p-3 rounded-lg mb-5`}
      >
        <TextInput style={tw`flex-1 font-semibold`} placeholder="Surname" />
      </View>

      {/* ADDRESS */}
      <Text style={tw`text-gray-500 font-bold text-lg mb-1`}>Address</Text>
      <View
        style={tw`flex flex-row items-center bg-[#edf0ff] p-3 rounded-lg mb-5`}
      >
        <TextInput style={tw`flex-1 font-semibold`} placeholder="Address" />
      </View>

      {/* PHONE NUMBER */}
      <Text style={tw`text-gray-500 font-bold text-lg mb-1`}>Phone Number</Text>
      <View
        style={tw`flex flex-row items-center bg-[#edf0ff] p-3 rounded-lg mb-5`}
      >
        <TextInput
          style={tw`flex-1 font-semibold`}
          placeholder="Enter your phone number"
        />
      </View>

      <TouchableOpacity
        style={tw`bg-[#5c89f4] items-center p-5 rounded-lg`}
        onPress={() => navigation.navigate("PaymentMethod")}
      >
        <Text style={tw`text-white font-bold`}>CONTINUE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DeliveryScreen;

const styles = StyleSheet.create({});
