import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import stylesProductDetails from "../../constants/stylesProductDetails";
import Rating from "../../components/Rating";
import Review from "../../components/shop/Review";
import tw from "twrnc";

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
    <ScrollView>
      <View style={stylesProductDetails.upperRow}>
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
      <View style={stylesProductDetails.productDetails}>
        <View style={stylesProductDetails.titleRow}>
          <Text style={stylesProductDetails.title}>Product</Text>
          <View style={stylesProductDetails.priceWrapper}>
            <Text style={stylesProductDetails.price}>Price</Text>
          </View>
        </View>
      </View>

      {/* Product rating and Qty */}
      <View style={stylesProductDetails.ratingRow}>
        <View style={stylesProductDetails.rating}>
          <Rating value={4.9} />
          <Text style={stylesProductDetails.ratingText}> (4.9)</Text>
        </View>

        <View style={stylesProductDetails.rating}>
          <TouchableOpacity onPress={increment}>
            <SimpleLineIcons name="plus" size={20} />
          </TouchableOpacity>

          <Text style={stylesProductDetails.ratingText}> 1 </Text>

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
    </ScrollView>
  );
};

export default ProductDetailsScreen;
