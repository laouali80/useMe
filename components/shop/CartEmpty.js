import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Assuming you're using Expo or react-native-vector-icons
import tw from "twrnc";

const CartEmpty = () => {
  return (
    <View
      style={{ flex: 1, justifyContent: "space-between", paddingHorizontal: 8 }}
    >
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <View
          style={{
            width: 200,
            height: 200,
            backgroundColor: "#ffffff",
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome name="shopping-basket" size={64} color="#3498db" />
        </View>
        <Text
          style={{
            color: "#3498db",
            fontWeight: "bold",
            marginTop: 20,
            fontSize: 18,
          }}
        >
          CART IS EMPTY
        </Text>
      </View>

      {/* button */}
      <View style={tw`mt-auto`}>
        <TouchableOpacity
          style={tw`bg-[#2358ea] items-center p-5 rounded-lg mb-2`}
        >
          <Text style={tw`text-white font-bold`}>START SHOPPING</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartEmpty;

const styles = StyleSheet.create({});
