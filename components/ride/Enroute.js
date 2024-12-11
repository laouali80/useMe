import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Enroute = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={tw`text-center py-5 text-xl`}>7 Mins to Destination</Text>
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
        <Text>Enroute Location.</Text>
      </View>
    </View>
  );
};

export default Enroute;

const styles = StyleSheet.create({});
