import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Entypo, Feather } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const DestinationSelectionScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={tw`bg-white flex-1 rounded-tl-[20px] rounded-tr-[20px]`}
    >
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, Ali</Text>
      {/* <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
            }}
            query={{
              key: "YOUR API KEY",
              language: "en",
            }}
          />
        </View>
      </View>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="From ?"
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
            }}
            query={{
              key: "YOUR API KEY",
              language: "en",
            }}
          />
        </View>
      </View> */}

      {/* ORIGIN */}
      <View
        style={tw`flex flex-row items-center bg-[#edf0ff] p-3 rounded-lg mb-5`}
      >
        {/* <FontAwesome6 name="user" size={24} style={tw`mr-3 text-gray-500`} /> */}
        <TextInput placeholder="From ?" style={tw`flex-1 font-semibold`} />
        <Entypo name="cross" size={24} color="black" />
      </View>

      <View style={tw`flex flex-column justify-center pt-4 gap-y-1`}>
        <View style={tw`bg-orange-300 w-2 h-2`}></View>
        <View style={tw`bg-orange-300 w-2 h-3`}></View>
        <View style={tw`bg-orange-300 w-2 h-2`}></View>
      </View>

      {/* DESTINATION */}
      <Text style={tw`text-gray-500 font-bold text-lg mb-1`}>Last Name</Text>
      <View
        style={tw`flex flex-row items-center bg-[#edf0ff] p-3 rounded-lg mb-5`}
      >
        {/* <FontAwesome6 name="user" size={24} style={tw`mr-3 text-gray-500`} /> */}
        <TextInput
          style={tw`flex-1 font-semibold`}
          placeholder="Where are you going?"
        />
        <Entypo name="cross" size={24} color="black" />
      </View>

      <View
        style={tw`flex flex-row justify-center bg-white py-2 mt-auto border-t border-gray-100 `}
      >
        <TouchableOpacity
          style={tw`flex flex-row justify-between  bg-[#2358ea] w-24 px-4 py-3 rounded-full`}
          onPress={() => navigation.navigate("RideOptionsScreen")}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DestinationSelectionScreen;

const styles = StyleSheet.create({});
