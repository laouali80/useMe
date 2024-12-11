import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Rating from "../Rating";

const EndTrip = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={tw`text-center py-5 text-xl`}>
          You have arrived Destination.
        </Text>
        <Image
          style={{ width: 50, height: 50, resizeMode: "contain" }}
          source={{}}
          // source={{uri: item.image}}
        />
      </View>

      <View style={tw`flex flex-row justify-between bg-[#c8d6fd] p-5 my-5`}>
        <Text>Amount:</Text>

        <Text style={tw`text-[#5c89f4]`}>N500</Text>
      </View>

      <View>
        <Text>Please rate this trip</Text>
        <TouchableOpacity>
          <Rating value={0} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EndTrip;

const styles = StyleSheet.create({});
