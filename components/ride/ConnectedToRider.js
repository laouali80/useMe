import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import Rating from "../Rating";

const ConnectedToRider = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={tw`text-center py-5 text-xl`}>Keke is 2 mins away</Text>
        <Image
          style={{ width: 50, height: 50, resizeMode: "contain" }}
          source={{}}
          // source={{uri: item.image}}
        />
      </View>

      <View style={tw`flex flex-row justify-between bg-[#c8d6fd] p-5 my-5`}>
        <View style={tw`flex flex-row`}>
          <Image
            style={{ width: 50, height: 50, resizeMode: "contain" }}
            source={{}}
            // source={{uri: item.image}}
          />
          <View style={tw`flex flex-column`}>
            <Text>Salaman</Text>
            <Rating value={4} />
            <Text>07031100411</Text>
          </View>
        </View>
        <View style={tw`flex flex-column`}>
          <View>
            <Text style={tw`text-[#5c89f4]`}>N500</Text>
          </View>
          <View>
            <Text>Wallet payment</Text>
          </View>
        </View>
      </View>

      <View>
        <View style={tw`flex flex-column`}>
          <Text>Icon</Text>
          <Text>Cancel Ride</Text>
        </View>
        <View style={tw`flex flex-column`}>
          <Text>Icon</Text>
          <Text>Chat</Text>
        </View>
        <View style={tw`flex flex-column`}>
          <Text>Icon</Text>
          <Text>Call</Text>
        </View>
      </View>

      <View>
        <Text>Rider is Approaching...</Text>
      </View>
    </SafeAreaView>
  );
};

export default ConnectedToRider;

const styles = StyleSheet.create({});
