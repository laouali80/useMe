import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import CategoriesFilter from "../../components/shop/CategoriesFilter";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import ProductCard from "../../components/shop/ProductCard";
import Header from "../../components/share/Header";

const CategoryProductsListScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-[#fafbff] h-full w-full `}>
      <View style={tw`px-3 py-${Platform.OS === "ios" ? "2" : "10"}`}>
        {/* <Header /> */}
        <Header type="shop" />

        {/* Categories filter */}
        <View style={{ marginTop: 22 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
          {/* categories list  */}
          <CategoriesFilter />
        </View>

        {/* Product List Filter  */}
        <View style={{ marginTop: 22 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>Products</Text>
          {/* Products list  */}
          <ProductCard />
        </View>
      </View>

      {/* <ScrollView style={tw`px-5 py-${Platform.OS === "ios" ? "2" : "10"}`}>
        <View style={`gap-x-2 px-2`}>
          <View style={tw`flex-1 bg-white my-2 px-4 py-2 rounded-lg w-30`}>
            <Image
              style={{
                width: "100%", // Image takes up full width of the container
                height: 120, // Consistent height across images
                resizeMode: "contain", // Keeps the aspect ratio intact
              }}
              source={item.image}
              // source={{uri: item.image}}
            />
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
          </View>
          <View style={tw`flex-1 bg-white my-2 px-4 py-2 rounded-lg w-30`}>
            <Image
              style={{
                width: "100%", // Image takes up full width of the container
                height: 120, // Consistent height across images
                resizeMode: "contain", // Keeps the aspect ratio intact
              }}
              source={item.image}
              // source={{uri: item.image}}
            />
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
          </View>
        </View>

        <View style={tw`border border-red-200 my-4`}>
          <View style={tw` bg-[#2358ea] p-2 flex flex-row justify-between`}>
            <Text style={tw`text-white`}>Snack</Text>
            <Text style={tw`text-white`}>See All</Text>
          </View>
        </View>
      </ScrollView> */}
    </SafeAreaView>
  );
};

export default CategoryProductsListScreen;

const styles = StyleSheet.create({});
