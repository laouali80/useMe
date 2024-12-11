import { StyleSheet, View } from "react-native";
import React from "react";
import tw from "twrnc";
import Map from "../../components/ride/Map";
import { createStackNavigator } from "@react-navigation/stack";

import DestinationSelectionScreen from "./DestinationSelectionScreen";
import RideOptionsScreen from "./RideOptionsScreen";
import TripScreen from "./TripScreen";

const MapScreen = () => {
  const Stack = createStackNavigator();

  return (
    <View>
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
