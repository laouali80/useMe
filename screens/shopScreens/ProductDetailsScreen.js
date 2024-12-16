import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import {
  productDetails,
  rating,
  ratingRow,
  ratingText,
  titleRow,
  upperRow,
} from "../../constants/STYLES";
import Rating from "../../components/Rating";
import Review from "../../components/shop/Review";

const ProductDetailsScreen = () => {
  const navigation = useNavigation();

  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };
  return (
    <View>
      <View style={upperRow}>
        {/* back icon  */}
        <TouchableOpacity onPress={() => navigation.navigate.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>

        {/* heart icon (favorite) */}
        <TouchableOpacity>
          <Ionicons name="heart" color={{}} />
        </TouchableOpacity>
      </View>

      {/* Product image */}
      <Image
        source={require("../../assets/shopImages/sweet.jpg")}
        style={{ aspectRatio: 1, resizeMode: "cover" }}
      />

      {/* Product Title and Price  */}
      <View style={productDetails}>
        <View style={titleRow}>
          <Text style={title}>Product</Text>
          <View style={priceWapper}>
            <Text style={price}>Price</Text>
          </View>
        </View>
      </View>

      {/* Product rating and Qty */}
      <View style={ratingRow}>
        <View style={rating}>
          <Rating value={4.9} />
          <Text style={ratingText}> (4.9)</Text>
        </View>

        <View style={rating}>
          <TouchableOpacity onPress={increment}>
            <SimpleLineIcons name="plus" size={20} />
          </TouchableOpacity>

          <Text style={ratingText}> 1 </Text>

          <TouchableOpacity onPress={decrement}>
            <SimpleLineIcons name="minus" size={20} />
          </TouchableOpacity>
        </View>

        {/* Add to Cart button */}
        <View style={{}}>
          <TouchableOpacity
            onPress={() => {}}
            style={tw`bg-[#2358ea] items-center p-5 rounded-lg mb-2`}
          >
            <Text style={tw`text-white font-bold`}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>

        {/* Product Review */}
        <Review />
      </View>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({});
