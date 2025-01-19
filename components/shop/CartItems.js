import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { items } from "../../mockData/cartItems";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";

const CartItems = () => {
  return (
    <View style={tw`p-4`}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={tw`flex-row justify-between bg-white p-4 my-2 rounded-lg`}
          >
            {/* Left Side: Image and Text */}
            <View style={tw`flex-row items-center`}>
              <Image
                style={tw`w-14 h-14 rounded-lg mr-3`}
                source={item.image} // Use item.image for dynamic images
                resizeMode="cover"
              />
              <View>
                <Text style={tw`font-bold text-lg`}>{item.title}</Text>
                <Text style={tw`text-gray-400`}>{item.price}</Text>
              </View>
            </View>

            {/* Right Side: Delete Icon & Checkout Button */}
            <View style={tw`flex justify-between items-end`}>
              {/* Delete Icon aligned to the end */}
              <TouchableOpacity>
                <AntDesign name="delete" size={24} color="red" />
              </TouchableOpacity>

              {/* Checkout Button */}
              <TouchableOpacity
                style={tw`bg-[#2358ea] py-[1] px-[8] rounded-lg mt-2`}
              >
                <Text style={tw`text-white font-semibold`}>CHECKOUT</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View style={tw`my-10`}>
        {/* Order Info Heading */}
        <Text style={tw`font-bold text-lg mb-2`}>Order Info</Text>

        {/* Subtotal and Total */}
        <View>
          {/* Subtotal */}
          <View style={tw`flex-row justify-between mb-2`}>
            <Text style={tw`text-gray-400`}>Subtotal</Text>
            <Text style={tw`text-gray-400`}>N1500</Text>
          </View>

          {/* Total */}
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-gray-400`}>Total</Text>
            <Text style={tw`font-bold text-lg`}>N1500</Text>
          </View>
        </View>

        {/* Checkout Button */}
        <TouchableOpacity
          style={tw`bg-[#2358ea] items-center p-2 rounded-lg mt-8`}
        >
          <Text style={tw`text-white font-bold text-base`}>
            All Checkout {"N1500"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItems;

const styles = StyleSheet.create({});
