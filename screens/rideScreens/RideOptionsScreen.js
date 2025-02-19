import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "cab-123",
    title: "Cab",
    multiplier: 1.75,
    image: require("../../assets/images/car-white.png"),
  },
  {
    id: "keke-321",
    title: "Keke",
    multiplier: 1,
    image: require("../../assets/images/tricycle.png"),
  },
];

const RideOptionsScreen = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("DestinationSelectionScreen")}
          style={styles.backButton}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Select a Ride</Text>
      </View>

      {/* Ride Options List */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.rideOption,
              selected?.id === item.id && styles.selectedRide,
            ]}
            onPress={() => setSelected(item)}
          >
            <Image style={styles.rideImage} source={item.image} />
            <View style={styles.rideDetails}>
              <Text style={styles.rideTitle}>{item.title}</Text>
              <Text>Travel time...</Text>
            </View>
            <Text style={styles.priceText}>N100</Text>
          </TouchableOpacity>
        )}
      />

      {/* Select Button */}
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("TripScreen")}
          disabled={!selected}
          style={[styles.selectButton, !selected && styles.disabledButton]}
        >
          <Text style={styles.buttonText}>Choose {selected?.title || ""}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsScreen;

const styles = StyleSheet.create({
  container: tw`bg-white flex-grow rounded-tl-[20px] rounded-tr-[20px]`,
  backButton: tw`absolute top-3 left-5 z-50 p-3 rounded-full`,
  headerText: tw`text-center py-5 text-xl`,
  rideOption: tw`flex-row justify-between items-center px-10 py-3`,
  selectedRide: tw`bg-gray-200`,
  rideImage: { width: 100, height: 100, resizeMode: "contain" },
  rideDetails: tw`-ml-6`,
  rideTitle: tw`text-xl font-semibold`,
  priceText: tw`text-xl`,
  selectButton: tw`bg-[#2358ea] py-3 m-3`,
  disabledButton: tw`bg-gray-300`,
  buttonText: tw`text-center text-white text-xl`,
});
