import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import { Icon } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import tw from "twrnc";

const Rating = ({ value, text, size = 12, color = "green" }) => {
  return (
    <View style={[tw`flex flex-row`, { alignItems: "center" }]}>
      <FontAwesome
        name={value >= 1 ? "star" : value >= 0.5 ? "star-half-o" : "star-o"}
        size={size}
        color={color}
      />
      <FontAwesome
        name={value >= 2 ? "star" : value >= 1.5 ? "star-half-o" : "star-o"}
        size={size}
        color={color}
      />
      <FontAwesome
        name={value >= 3 ? "star" : value >= 2.5 ? "star-half-o" : "star-o"}
        size={size}
        color={color}
      />
      <FontAwesome
        name={value >= 4 ? "star" : value >= 3.5 ? "star-half-o" : "star-o"}
        size={size}
        color={color}
      />
      <FontAwesome
        name={value >= 5 ? "star" : value >= 4.5 ? "star-half-o" : "star-o"}
        size={size}
        color={color}
      />
      {/* {text && <Text style={tw`text-[12px] ml-2`}>{text}</Text>} */}
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({});
