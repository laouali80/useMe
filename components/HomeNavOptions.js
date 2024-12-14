import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import shop from "../assets/images/shop.png";

const data = [
  {
    id: 1,
    title: "Get a ride",
    image: require("../assets/images/taxi-cab.png"),
    screen: "RideScreen",
  },
  {
    id: 2,
    title: "Shop Now",
    image: require("../assets/images/shop.png"),
    screen: "ShopScreen",
  },
];

const HomeNavOptions = () => {
  const navigation = useNavigation();

  const _navigate = (screen) => {
    console.log(navigation);
    if (screen === "RideScreen") {
      navigation.navigate("Main");
    }
  };

  return (
    <View>
      <Text>Select !</Text>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => _navigate(item.screen)}
            style={tw`p-2 pl-6 pb-8 pt-4 bg-white m-2 w-40`}
          >
            <View>
              <Image
                style={{ width: 120, height: 120, resizeMode: "contain" }}
                source={item.image}
                // source={{uri: item.image}}
              />
              <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeNavOptions;

const styles = StyleSheet.create({});
