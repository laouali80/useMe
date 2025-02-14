import tw from "twrnc";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const Header = ({ type }) => {
  const navigation = useNavigation();

  const renderWelcomeHeader = () => (
    <View style={styles.rowContainer}>
      <Text>Hello, Gracey,</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Main", { screen: "Profile" })}
      >
        <Image
          style={styles.profileImage}
          source={require("../../assets/profile/prof1.jpg")}
        />
      </TouchableOpacity>
    </View>
  );

  const renderShopHeader = () => (
    <View style={styles.shopHeader}>
      <TouchableOpacity onPress={navigation.goBack} style={styles.iconButton}>
        <Ionicons name="chevron-back-circle" size={30} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        style={styles.cartButton}
      >
        <FontAwesome name="shopping-basket" size={24} />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>9</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderDefaultHeader = () => (
    <View>
      <TouchableOpacity onPress={navigation.goBack} style={styles.menuButton}>
        <Ionicons name="menu" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => navigation.navigate("Main", { screen: "Profile" })}
      >
        <Image
          style={styles.profileImage}
          source={require("../../assets/profile/prof1.jpg")}
        />
      </TouchableOpacity>
    </View>
  );

  return type === "welcome"
    ? renderWelcomeHeader()
    : type === "shop"
    ? renderShopHeader()
    : renderDefaultHeader();
};

const styles = {
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileImage: [
    tw`rounded-full mr-1`,
    {
      width: 50,
      height: 50,
      resizeMode: "cover",
    },
  ],
  shopHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
  iconButton: tw`bg-gray-100 p-1 rounded-full opacity-75`,
  cartButton: tw`bg-gray-100 relative p-2 rounded-full opacity-75`,
  badge: tw`absolute -top-1 right-2 bg-red-500 rounded-full px-2 py-0.5`,
  badgeText: tw`text-white text-xs font-bold`,
  menuButton: tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`,
  profileButton: tw`absolute top-16 right-8 z-50 p-3 rounded-full shadow-lg`,
};

export default Header;
