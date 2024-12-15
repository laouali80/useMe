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
    // console.log(na vigation);
    if (screen === "RideScreen") {
      navigation.navigate("Main");
    }
  };

  return (
    <View>
      <Text style={tw`text-xl font-bold mb-4`}>Select !</Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => _navigate(item.screen)}
            style={tw`pl-4 pb-8 pt-4 bg-white m-2 w-40`}
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
