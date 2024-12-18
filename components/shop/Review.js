import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "twrnc";
import Rating from "../Rating";
import ReviewMessage from "./ReviewMessage";
import { FontAwesome6, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/COLORS";

const Review = () => {
  return (
    <View style={tw`my-9`}>
      <Text style={{ fontFamily: "bold", fontSize: 15, marginBottom: 2 }}>
        REVIEW
      </Text>

      {/* IF THERE IS NO REVIEW  */}
      <ReviewMessage />
      <ReviewMessage
        color="blue"
        bg={COLORS.deepGray}
        bold={"bold"}
        children={"NO REVIEW"}
      />

      {/* REVIEW  */}
      <View
        style={{
          padding: 3,
          backgroundColor: COLORS.deepGray,
          marginTop: 5,
          borderRadius: 5,
        }}
      >
        <Text style={{ fontSize: 15, color: "black" }}>User Doe</Text>
        <Rating value={4} />
        <Text style={{ marginBottom: 3, color: "grey" }}>Jan 12 2022</Text>
        <ReviewMessage
          color="black"
          bg="white"
          size={10}
          children={
            "Redistribution is a process that allows a network to use a routing protocol to dynamically route traffic based on information learned from a different routing protocol. Route redistribution helps increase accessibility within networks."
          }
        />
      </View>

      {/* WRITE REVIEW */}
      <View style={{ marginTop: 6 }}>
        <Text style={{ fontSize: 15, color: "black", fontFamily: "bold" }}>
          REVIEW THIS PRODUCT
        </Text>

        <Text style={tw`text-gray-500 font-bold text-lg mb-1`}>Rating</Text>
        <View
          style={tw`flex flex-row items-center bg-[#edf0ff] p-3 rounded-lg mb-5`}
        >
          <TextInput
            placeholder="Choose Rate"
            style={tw`flex-1 font-semibold`}
          />
          <FontAwesome6 name="user" size={24} style={tw`mr-3 text-gray-500`} />
        </View>

        <Text style={tw`text-gray-500 font-bold text-lg mb-1`}>Comment</Text>
        <View
          style={tw`flex flex-row items-center bg-[#edf0ff] p-3 rounded-lg mb-5`}
        >
          <TextInput
            placeholder="Leave your review"
            style={tw`flex-1 font-semibold h-20 p-4`}
          />
          <FontAwesome6 name="user" size={24} style={tw`mr-3 text-gray-500`} />
        </View>

        {/* Submit Review button */}
        <View style={{}}>
          <TouchableOpacity
            onPress={() => {}}
            style={tw`bg-[#2358ea] items-center p-5 rounded-lg mb-2`}
          >
            <Text style={tw`text-white font-bold`}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({});
