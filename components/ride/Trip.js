import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Rating from "../Rating";
import tw from "twrnc";
import { Ionicons, Entypo, Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
// import Entypo from "@expo/vector-icons/Entypo";
// import Ionicons from "@expo/vector-icons/Ionicons";

const Trip = ({ status }) => {
  return (
    <ScrollView style={tw`py-1 px-5`}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {status === "approaching" ? (
          <Text style={tw`text-center py-5 text-xl`}>Keke is 2 mins away</Text>
        ) : status === "arrived" ? (
          <Text style={tw`text-center py-5 text-xl`}>
            Your Keke has arrived!!
          </Text>
        ) : status === "enroute" ? (
          <Text style={tw`text-center py-5 text-xl`}>
            7 Mins to Destination
          </Text>
        ) : (
          <Text style={tw`text-center py-5 text-xl`}>
            You have arrived Destination.
          </Text>
        )}

        <Image
          style={{
            width: 40,
            height: 40,
            resizeMode: "contain",
          }}
          source={require("../../assets/images/tricycle.png")}
          // source={{ uri: image }}
        />
      </View>

      {status !== "endTrip" ? (
        <View style={tw`flex flex-row justify-between bg-[#c8d6fd] p-5 my-5`}>
          <View style={tw`flex flex-row items-center`}>
            <Image
              style={[
                tw`rounded-full mr-1`,
                {
                  width: 50,
                  height: 50,
                  resizeMode: "cover",
                  // objectFit: "contain",
                },
              ]}
              source={require("../../assets/profile/prof1.jpg")}
              // source={{uri: item.image}}
            />
            <View style={tw`flex flex-column justify-between gap-y-1`}>
              <Text>Salaman</Text>
              <Rating value={3.8} />
              <Text>07031100411</Text>
            </View>
          </View>
          <View style={tw`flex flex-column justify-between `}>
            <View>
              <Text
                style={tw`text-[#2158e9] text-center font-semibold text-2xl`}
              >
                N500
              </Text>
            </View>
            <View style={tw`flex flex-row items-center`}>
              <Text>Wallet payment</Text>
              <Entypo name="chevron-down" size={24} color="black" />
            </View>
          </View>
        </View>
      ) : (
        <View
          style={tw`flex flex-row justify-between items-center bg-[#c8d6fd] p-5 my-5`}
        >
          <Text style={tw`font-semibold text-xl`}>Amount:</Text>

          <Text style={tw`text-[#2158e9] font-semibold text-xl`}>N500</Text>
        </View>
      )}

      {status === "approaching" || status === "arrived" ? (
        <View style={tw`flex flex-row justify-center gap-x-8 py-6 `}>
          <View style={tw`flex items-center`}>
            <TouchableOpacity
              style={tw`items-center justify-center bg-red-200 rounded-full w-10 h-10`}
            >
              <Entypo name="cross" size={24} color="black" />
            </TouchableOpacity>
            <Text style={tw`text-center`}>Cancel Rid</Text>
          </View>
          <View style={tw`flex items-center`}>
            <TouchableOpacity
              style={tw`items-center justify-center bg-blue-200 rounded-full w-10 h-10`}
            >
              <Ionicons name="chatbox-outline" size={24} color="black" />
            </TouchableOpacity>
            <Text style={tw`text-center`}>Chat</Text>
          </View>
          <View style={tw`flex items-center`}>
            <TouchableOpacity
              style={tw`items-center justify-center bg-green-200 rounded-full w-10 h-10`}
            >
              <Feather name="phone-call" size={24} color="black" />
            </TouchableOpacity>
            <Text style={tw`text-center`}>Call</Text>
          </View>
        </View>
      ) : null}

      {status === "endTrip" ? (
        <View style={tw`flex flex-column justify-center`}>
          <Text style={tw`text-center py-5 text-xl `}>
            Please rate this trip
          </Text>
          <TouchableOpacity style={tw`items-center`}>
            <Rating value={0} size={50} color="grey" />
          </TouchableOpacity>
        </View>
      ) : null}

      <View>
        {status === "approaching" ? (
          <Text style={tw`text-center mt-auto text-xl text-[#5c89f4]`}>
            Rider is Approaching...
          </Text>
        ) : status === "arrived" ? (
          <Text style={tw`text-center mt-auto text-xl text-[#5c89f4]`}>
            Your Keke is here
          </Text>
        ) : status === "enroute" ? (
          <Text style={tw`text-center mt-auto mt-25 text-xl text-[#5c89f4]`}>
            Enroute Location.
          </Text>
        ) : null}
      </View>
    </ScrollView>
  );
};

export default Trip;

const styles = StyleSheet.create({});
