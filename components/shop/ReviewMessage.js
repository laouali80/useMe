import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ReviewMessage = ({ bg, color, children, size, bold }) => {
  return (
    <View style={{ backgroundColor: bg, padding: 4, borderRadius: 5 }}>
      <Text
        style={{ color: color, fontSize: size, fontFamily: bold || "normal" }}
      >
        {children}
      </Text>
    </View>
  );
};

export default ReviewMessage;

const styles = StyleSheet.create({});
