import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-web";

const CategoriesDisplaySreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>menu</Text>
        <Text>search</Text>
        <Text>profile</Text>
      </View>

      <View>
        <View>
          <Text>Snack</Text>
          <Text>See All</Text>
        </View>
        <View>
          <Text>Product 1</Text>
          <Text>Product 2</Text>
          <Text>Product 3</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CategoriesDisplaySreen;

const styles = StyleSheet.create({});
