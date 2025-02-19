import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import Header from "../../components/share/Header";
import { productList } from "../../mockData/ProductList";

const CategoriesDisplaySreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-[#fafbff] h-full w-full`}>
      <ScrollView style={tw`px-5 py-${Platform.OS === "ios" ? "2" : "10"}`}>
        {/* <Header /> */}
        <Header type="shop" />

        <View style={tw`border border-red-200 my-4`}>
          <View style={tw` bg-[#2358ea] p-2 flex flex-row justify-between`}>
            <Text style={tw`text-white`}>Snack</Text>
            <Pressable
              onPress={() => {
                // alert("hi");
                navigation.navigate("ProductsList");
              }}
              style={tw`text-white`}
            >
              <Text>See All</Text>
            </Pressable>
          </View>

          <FlatList
            data={productList}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            contentContainerStyle={tw`gap-x-2 px-2`}
            renderItem={({ item }) => (
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
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoriesDisplaySreen;

const styles = StyleSheet.create({});
