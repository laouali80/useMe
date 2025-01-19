import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import MapView, { PROVIDER_GOOGLE, MapMarker, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useState, useEffect } from "react";

const Map = () => {
  const [location, setLocation] = useState(null); // State for location
  const [errorMsg, setErrorMsg] = useState(null); // State for error messages
  const [geoLocat, setGeoLocat] = useState(null);
  useLayoutEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      // console.log("here........ ", status);
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let nigelec = await Location.geocodeAsync(
        "NIGELEC MARADI, RN9, Maradi, Niger"
      );
      // console.log(nigelec);
      setLocation(location);
      setGeoLocat(nigelec[0]);
    }

    getCurrentLocation();
  }, []);

  // useEffect(() => {
  //   async function getCurrentLocation() {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     // console.log("here........ ", status);
  //     if (status !== "granted") {
  //       setErrorMsg("Permission to access location was denied");
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     console.log(location);
  //     setLocation(location);
  //   }

  //   getCurrentLocation();
  // }, []);

  // console.log("Location: ", location);
  // console.log("Error: ", errorMsg);

  if (!location && !geoLocat && !errorMsg) {
    // Show a loading indicator while fetching location
    return (
      <View style={styles.container}>
        <Text>Fetching location...</Text>
      </View>
    );
  }

  if (errorMsg) {
    // Show an error message if permissions are denied
    return (
      <View style={styles.container}>
        <Text>{errorMsg}</Text>
      </View>
    );
  }

  return (
    <MapView
      // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: location.coords.latitude || 37.78825,
        longitude: location.coords.longitude || -122.4324,
        // latitude: 37.78825,
        // longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
      // mapType="mutedStandard" // to muted or reduce the information on the map
    >
      <Marker
        title="Origin"
        // description={{}}
        identifier="origin"
        coordinate={location.coords || {}}
      />
      <Marker
        title="destination"
        // description={{}}
        identifier="destination"
        coordinate={geoLocat || {}}
        pinColor="green"
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
