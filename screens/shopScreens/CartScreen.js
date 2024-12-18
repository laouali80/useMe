import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import CartEmpty from "../../components/shop/CartEmpty";
import tw from "twrnc";
import CartItems from "../../components/shop/CartItems";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const CartScreen = () => {
  const navigation = useNavigation();

  // Use `useLayoutEffect` to set navigation options
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Cart",
      headerTitleAlign: "center",
      // headerLeft: () => (
      //   <TouchableOpacity onPress={() => navigate.goBack()}>
      //     <Ionicons name="chevron-back-circle" size={30} />
      //   </TouchableOpacity>
      // ),
    });
  }, [navigation]);
  return (
    <SafeAreaView style={tw`flex py-5 h-full`}>
      {/* IF CART IS EMPTY */}
      {/* <CartEmpty /> */}

      {/* CART ITEMS  */}
      <CartItems />
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
