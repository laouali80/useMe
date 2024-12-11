import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Rating from "../Rating";

const Trip = ({ status }) => {
  return (
    <View>
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
          style={{ width: 50, height: 50, resizeMode: "contain" }}
          source={{}}
          // source={{uri: item.image}}
        />
      </View>

      {status !== "endTrip" ? (
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
      ) : (
        <View style={tw`flex flex-row justify-between bg-[#c8d6fd] p-5 my-5`}>
          <Text>Amount:</Text>

          <Text style={tw`text-[#5c89f4]`}>N500</Text>
        </View>
      )}

      {status === "approaching" || status === "waiting" ? (
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
