import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const SignupScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full w-full`}>
      <View style={tw`p-5`}>
        <Text style={tw`text-[]`}>UseMe.</Text>
        <Text>Create your UseMe account.</Text>

        {/* FIRST NAME */}
        <Text>First Name</Text>
        <TextInput
          //   inlineImageLeft={}
          placeholder="Enter your first name"
        />

        {/* LAST NAME */}
        <Text>Last Name</Text>
        <TextInput
          //   inlineImageLeft={}
          placeholder="Enter your last name"
        />

        {/* PHONE NUMBER */}
        <Text>Phone Number</Text>
        <TextInput
          //   inlineImageLeft={}
          placeholder="Enter your phone number"
        />

        {/* CREATE PIN */}
        <Text>Create Pin</Text>
        <TextInput
          //   inlineImageLeft={}
          placeholder="Enter your preferred pin"
          secureTextEntry={true}
          autoCapitalize="none"
        />

        {/* CONFIRM PIN */}
        <Text>Confirm Pin</Text>
        <TextInput
          //   inlineImageLeft={}
          placeholder="Enter pin again"
          secureTextEntry={true}
          autoCapitalize="none"
        />

        <Button
          title="Create Account"
          style={styles.button}
          onPress={loginValidation}
        />

        <Text>
          Already have an account?
          <Pressable onPress={{}} style={{}}>
            Sign In
          </Pressable>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
