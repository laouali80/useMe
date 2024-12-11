import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
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
