import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "twrnc";
import Map from "../../components/ride/Map";
import { createStackNavigator } from "@react-navigation/stack";
import DestinationSelectionScreen from "./DestinationSelectionScreen";
import RideOptionsScreen from "./RideOptionsScreen";
import TripScreen from "./TripScreen";
import { Ionicons } from "@expo/vector-icons";

const MapScreen = () => {
  const Stack = createStackNavigator();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}
      >
        <Ionicons name="menu" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={tw`bg-gray-100 absolute top-16 right-8 z-50 p-3 rounded-full shadow-lg`}
      >
        <Ionicons name="menu" size={24} color="black" />
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="DestinationSelectionScreen"
            component={DestinationSelectionScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsScreen"
            component={RideOptionsScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="TripScreen"
            component={TripScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
