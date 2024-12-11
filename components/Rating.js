import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";

const Rating = ({ value, text }) => {
  const size = 8;
  const color = "green";
  return (
    <View style={{ alignItems: "center" }}>
      <Icon
        name={value >= 1 ? "star" : value >= 0.5 ? "star-half-o" : "star-0"}
        size={size}
        color={color}
        type="fontawesome"
      />
      <Icon
        name={value >= 2 ? "star" : value >= 1.5 ? "star-half-o" : "star-0"}
        size={size}
        color={color}
        type="fontawesome"
      />
      <Icon
        name={value >= 3 ? "star" : value >= 2.5 ? "star-half-o" : "star-0"}
        size={size}
        color={color}
        type="fontawesome"
      />
      <Icon
        name={value >= 4 ? "star" : value >= 3.5 ? "star-half-o" : "star-0"}
        size={size}
        color={color}
        type="fontawesome"
      />
      <Icon
        name={value >= 5 ? "star" : value >= 4.5 ? "star-half-o" : "star-0"}
        size={size}
        color={color}
        type="fontawesome"
      />
      {text && <Text style={tw`text-[12px] ml-2`}>{text}</Text>}
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({});
