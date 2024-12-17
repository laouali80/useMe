import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import MapView, { PROVIDER_GOOGLE, MapMarker, Marker } from "react-native-maps";

const Map = () => {
  return (
    <MapView
      // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
      mapType="mutedStandard" // to muted or reduce the information on the map
    >
      {/* <Marker
        title="Origin"
        description={{}}
        identifier="origin"
        coordinate={{}}
      /> */}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
