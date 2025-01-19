import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}
      >
        <Ionicons name="menu" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        // onPress={() => navigation.navigate("HomeScreen")}
        style={tw`bg-gray-100 absolute top-16 right-8 z-50 p-3 rounded-full shadow-lg`}
      >
        <Ionicons name="menu" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  upperRow: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    width: 44 - 44, // xxlarge
    top: 25, // width
    zIndex: 999,
  },
});
