import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Rating from "../Rating";
import tw from "twrnc";
import { Icon } from "@rneui/themed";

const Trip = ({ status }) => {
  return (
    <View style={tw`py-1 px-5`}>
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
          <View style={tw`flex flex-row`}>
            <Image
              style={[
                tw`rounded-full`,
                {
                  width: 50,
                  height: 50,
                  resizeMode: "contain",
                  // objectFit: "contain",
                },
              ]}
              source={require("../../assets/profile/prof1.jpg")}
              // source={{uri: item.image}}
            />
            <View style={tw`flex flex-column justify-between`}>
              <Text>Salaman</Text>
              <Rating value={5} />
              <Text>07031100411</Text>
            </View>
          </View>
          <View style={tw`flex flex-column justify-between `}>
            <View>
              <Text style={tw`text-[#5c89f4] text-center`}>N500</Text>
            </View>
            <View>
              <Text>Wallet payment</Text>
            </View>
          </View>
        </View>
      ) : (
        <View style={tw`flex flex-row justify-between bg-[#c8d6fd] p-5 my-5`}>
          <Text>Amount:</Text>

          <Text style={tw`text-[#5c89f4]`}>N500</Text>
        </View>
      )}

      {status === "approaching" || status === "arrived" ? (
        <View>
          <View style={tw`flex flex-column`}>
            <View>
              <Icon name="xmark" size={25} color="red" type="font-awesome" />
            </View>
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
      ) : null}

      {status === "endTrip" ? (
        <View style={tw`flex flex-column`}>
          <Text style={tw`text-center py-5 text-xl text-[#5c89f4]`}>
            Please rate this trip
          </Text>
          <TouchableOpacity>
            <Rating value={0} />
          </TouchableOpacity>
        </View>
      ) : null}

      <View>
        {status === "approaching" ? (
          <Text style={tw`text-center py-5 text-xl text-[#5c89f4]`}>
            Rider is Approaching...
          </Text>
        ) : status === "arrived" ? (
          <Text style={tw`text-center py-5 text-xl text-[#5c89f4]`}>
            Your Keke is here
          </Text>
        ) : status === "enroute" ? (
          <Text style={tw`text-center py-5 text-xl text-[#5c89f4]`}>
            Enroute Location.
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export default Trip;

const styles = StyleSheet.create({});
