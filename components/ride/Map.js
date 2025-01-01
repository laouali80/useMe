import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { PROVIDER_GOOGLE, MapMarker, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useState, useEffect } from "react";

const Map = () => {
  const [location, setLocation] = useState(null); // State for location
  const [errorMsg, setErrorMsg] = useState(null); // State for error messages

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
  }, []);

  let text = "Waiting...";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <MapView
      // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
      // mapType="mutedStandard" // to muted or reduce the information on the map
    >
      <Marker
        title="Origin"
        description={{}}
        identifier="origin"
        coordinate={location.coords}
      />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
