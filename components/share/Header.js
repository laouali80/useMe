import { StyleSheet, Text, View } from "react-native";
import React from "react";

const header = () => {
  return (
    <View style={{ flexDirection: "row", marginHorizontal: 16 }}>
      <Text style={{ flex: 1 }}>backbtn</Text>
      <Text>user</Text>
    </View>
  );
};

export default header;

const styles = StyleSheet.create({
  upperRow: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    width: 44, // xxlarge
    top: 25, // width
    zIndex: 999,
  },
});
