import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { productList } from "../../mockData/ProductList";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/core";

const ProductCard = () => {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={productList}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          // paddingHorizontal: 10,
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate("ProductDetails");
            }}
            style={[
              tw`bg-white`,
              {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 7,
                borderRadius: 16,
                marginVertical: 16,
                alignItems: "center",
                paddingHorizontal: 8,
                paddingVertical: 26,
              },
            ]}
          >
            <Image
              source={item.image}
              style={{ width: 150, height: 150, resizeMode: "center" }}
            />
            <Text>{item.title}</Text>
            <View>
              <Text>{item.price}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
