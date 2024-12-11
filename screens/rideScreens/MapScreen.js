import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "twrnc";
import Map from "../../components/ride/Map";
import { createStackNavigator } from "@react-navigation/stack";
import RideOptionsCard from "../../components/ride/RideOptionsCard";
import DestinationSelection from "../../components/ride/DestinationSelection";
// import { Icon } from "react-native-elements";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import ConnectedToRider from "../../components/ride/ConnectedToRider";

const MapScreen = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="DestinationSelection"
            component={DestinationSelection}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ConnectedToRider"
            component={ConnectedToRider}
            options={{
              headerShown: false,
            }}
          />
          {/* <Stack.Screen
            name="ConnectedToRider"
            component={ConnectedToRider}
            options={{
              headerShown: false,
            }}
          /> */}
        </Stack.Navigator>
      </View>

      <View
        style={tw`bg-white py-2 mt-auto border-t border-gray-100 justify-evenly`}
      >
        <TouchableOpacity
          style={tw`flex flex-row justify-between bg-[#2358ea] w-24 px-4 py-3 rounded-full`}
          onPress={() => navigation.navigate("RideOptionsCard")}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
