import { StyleSheet, Text, View } from "react-native";
import React from "react";

const loginScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full w-full`}>
      <View style={tw`p-5`}>
        <Text style={tw`text-[]`}>UseMe.</Text>
        <Text>Create your UseMe account.</Text>
        <Text>Fill your details below to login into your UseMe account.</Text>

        {/* PHONE NUMBER */}
        <Text>Phone Number</Text>
        <TextInput
          //   inlineImageLeft={}
          placeholder="Enter your phone number"
        />

        {/* PIN */}
        <Text>Pin</Text>
        <TextInput
          //   inlineImageLeft={}
          placeholder="Enter pin again"
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <Text>Forget Pin?</Text>

        <Button
          title="Create Account"
          style={styles.button}
          onPress={loginValidation}
        />

        <Text>
          Don't have an account?
          <Pressable onPress={{}}>
            <Text style={tw`text-[]`}>Create Account</Text>
          </Pressable>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default loginScreen;

const styles = StyleSheet.create({});
