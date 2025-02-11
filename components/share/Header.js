import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import stylesProductDetails from "../../constants/stylesProductDetails";

const Header = ({ type }) => {
  const navigation = useNavigation();
  return type === "shop" ? (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 16,
      }}
    >
      {/* back icon  */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={tw`bg-gray-100  p-1 rounded-full opacity-75`}
      >
        <Ionicons name="chevron-back-circle" size={30} />
      </TouchableOpacity>

      {/* heart icon (favorite) */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        style={tw`bg-gray-100  relative p-2 rounded-full opacity-75`}
      >
        {/* Shopping Basket Icon */}
        <FontAwesome name="shopping-basket" size={24} />

        {/* Badge Notification */}
        <View
          style={tw`absolute -top-1 right-2 bg-red-500 rounded-full px-2 py-0.5`}
        >
          <Text style={tw`text-white text-xs font-bold`}>9</Text>
        </View>
      </TouchableOpacity>
    </View>
  ) : (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 16,
      }}
    >
      {/* <Text style={{ flex: 1, fontSize: 22, fontWeight: "700" }}>
  Hello, Gracey,
</Text> */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}
      >
        <Ionicons name="menu" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}
      >
        <Ionicons name="menu" size={24} color="black" />
      </TouchableOpacity>

      {/* <TouchableOpacity
  onPress={() => navigation.goBack()}
  style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}
>
  <Ionicons name="menu" size={24} color="black" />
</TouchableOpacity>

<TouchableOpacity
  // onPress={() => navigation.navigate("HomeScreen")}
  style={tw`bg-gray-100 absolute top-16 right-8 z-50 p-3 rounded-full shadow-lg`}
>
  <Ionicons name="menu" size={24} color="black" />
</TouchableOpacity> */}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  upperRow: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    width: 44 - 44, // xxlarge
    top: 25, // width
    zIndex: 999,
  },
});
